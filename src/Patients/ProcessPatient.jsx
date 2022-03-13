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
import TextField from '@material-ui/core/TextField';
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { sanitizeFormInput } from "../utils/sanitizeFormInput";
import { useSelector } from "react-redux";
import { useStyles } from "../Constants/theme";
import { useNavigate } from "react-router-dom";

const ProcessPatient = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth0();
  const userRole =
    (user &&
      user["http://localhost:3000/role"] &&
      user["http://localhost:3000/role"][0]) ||
    "general";
  const [visit, setVisit] = useState([]);
  const activeP = useSelector((state) => state.patients.activePatient);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const newVisit = { ...data, patient_id: activeP["id"] };
    try {
      await axios.post(`${process.env.REACT_APP_API}/visit`, {
        ...newVisit,
        ...sanitizeFormInput(newVisit),
      });
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
  useEffect(() => getPriorVisits(activeP["id"]), [activeP]);

  return isAuthenticated &&
    (userRole === "triage" || userRole === "provider") ? (
    <>
      <Container alignment="center" component="main" maxWidth="lg">
        <Card>
          <CardContent>
            <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
              Hello, you are now seeing{" "}{activeP.last_name.toUpperCase()},{" "}{activeP.first_name.toUpperCase()}
            </Typography>
          </CardContent>
        </Card>
        <div classes={classes.root}>
          <Grid container spacing={40}>

            <Grid item xs={6}>
              <h2>Previous Visits: </h2>
              <CardContent>
                <Typography
                  align="center"
                  sx={{ fontSize: 15 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {visit
                    ? visit.map((pat) => (
                        <Card key={parseInt(pat.id)} classes={classes.card}>
                          <h5> Reported Ailment: {pat.primary_aliment}</h5>
                          <p>
                            Visit Date:{" "}
                            {new Date(pat.admission_date).toLocaleString("en-US")}
                          </p>
                          <p>
                            {" "}
                            Dischared Date:{" "}
                            {new Date(pat.discharge_date).toLocaleString("en-US")}
                          </p>
                        </Card>
                      ))
                    : null}
                </Typography>
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
