import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { sanitizeFormInput } from "../utils/sanitizeFormInput";
import { useSelector } from "react-redux";
import { useStyles } from "../Constants/theme";
import { useNavigate } from "react-router-dom";

const ProcessPatient = () => {
  const [ submitted, setSubmitted] = useState(false)
  const classes = useStyles();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth0();
  const userRole =
    (user &&
      user["http://localhost:3000/role"] &&
      user["http://localhost:3000/role"][0]) ||
    "general";
  const [ visit, setVisit ] = useState([]);
  const activePatient = useSelector((state) => state.patients.activePatient);
  const {
    register,
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const newVisit = { ...data, patient_id: activePatient.id };
      await axios.post(`${process.env.REACT_APP_API}/visit`, {
        ...newVisit,
        ...sanitizeFormInput(newVisit),
      });
      getPriorVisits(activePatient.id)
      setSubmitted(true)
    } catch (e) {
      console.error(e);
    }
  };

  const onExit = () => {
    navigate("/queue");
  };

  const getPriorVisits = async (id) => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API}/visits/${id}`);
      if (res.status === 200) setVisit([...res.data.patientVisits]);
    } catch (err) {
      console.error({ err: err.message });
    }
  };
  // Netlify complains, but we just want this once
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getPriorVisits(activePatient.id), []);
  return isAuthenticated &&
    (userRole === "provider") ? (
    <>
      <Container alignment="center" component="main" maxWidth="lg">
        <Card>
          <CardContent>
            <Typography 
              align="center"
              color="text.primary"
              sx={{ fontSize: 15 }} 
            >
              Hello, you are now seeing {activePatient.first_name} {activePatient.last_name}
            </Typography>
          </CardContent>
        </Card>
        <div className={classes.root}>
          <Grid container spacing={10}>

            <Grid item xs={6}>
              <h2>Previous Visits:</h2>
              <CardContent>
                  {visit
                    ? visit.map((pat) => (
                        <Card
                          style={{padding: 10, margin: 0}} 
                          className={classes.card}
                          key={parseInt(pat.id)} 
                        >
                          <h5> Reported Ailment:{" "}{pat.primary_ailment}</h5>
                          <h5> Visit Notes:{" "}{pat.notes}</h5>
                          <Typography>
                            Visit Date:{" "}
                            {new Date(pat.admission_date).toLocaleString("en-US")}
                          </Typography>
                          {/* <Typography>
                            {" "}
                            Dischared Date:{" "}
                            {new Date(pat.discharge_date).toLocaleString("en-US")}
                          </Typography> */}
                        </Card>
                      ))
                    : null}

              </CardContent>
            </Grid>

            <Grid item xs={6}>
              <h2> New Visit </h2>
              <Card>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 15 }}
                    color="text.secondary"
                    gutterBottom
                  >
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <InputLabel>Admission Date</InputLabel>
                        <Input
                          type="date"
                          placeholder="Admission date"
                          {...register("admission_date", {
                            required: true,
                            maxLength: 100,
                          })}
                        />
                        <InputLabel>Notes</InputLabel>
                        <Input
                          fullWidth={true}
                          type="text"
                          multiline={true}
                          placeholder="Reason For Visit"
                          {...register("notes", { required: true, maxLength: 500 })}
                        />
                        <InputLabel>Primary Ailment</InputLabel>
                        <Input
                          fullWidth={true}
                          type="text"
                          multiline={true}
                          placeholder="ailment"
                          {...register("primary_ailment", {
                            required: true,
                            maxLength: 500,
                          })}
                        />
                        <div className="submit-button">
                          <Button
                            disabled={submitted}
                            color="success"
                            size="medium"
                            variant="contained"
                            onClick={handleSubmit(onSubmit)}
                          >
                            Submit
                          </Button>
                        </div>
                      </form>

                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
          </Grid>

        </div>
        <br />
        <Button
          color="error"
          onClick={() => onExit()}
          size="medium"
          variant="contained"
        >
          {" "}
          exit
        </Button>
      </Container>
    </>
  ) : null;
};

export default ProcessPatient;
