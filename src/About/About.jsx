import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import jeremy from './jeremy.jpg';
import ayrat from './ayrat.jpg';
import tom from './tom.png';
import lorenzo from './lorenzo.jpeg'

const About = () => {
  const authors = [
    {
      name: 'Jeremy Brazell',
      bio: '\nSoftware Developer & UX Designer. \n\n17 years of Procurement experience in supply chain in aerospace, ecommerce, defense, & telecommunications. \n\nPassionate about accessibility and building scalable, useful, & fun software',
      image: jeremy
    },
    {
      name: 'Tom McGuire',
      bio: '\nA software developer passionate about open source. \n\nIf I won the lottery I’d attend a code bootcamp. - Tom (2019)',
      image: tom
    },
    {
      name: 'Lorenzo Ortega',
      bio: '\nMy greatest aspiration is to become a professional in the Tech Industry as Software Developer \n\nI continue to grow by being adaptive and malleable to new concepts and paradigms \n\n My willingness to work in a team is paramount to my conceptual knowledge and growth \n\nI want to be an effective and approachable developer that is always willing to teach those around me',
      image: lorenzo
    },
    {
      name: 'Ayrat Gimranov',
      bio: '\nSoftware developer with background in healthcare. \n\nFormer acute care RN specializing in advanced heart failure and cardiothoracic surgery \n\nHobbies: Foreign languages (Russian, Tatar, Turkish) and playing accordion',
      image: ayrat
    }
  ]

  return (
    <main>
      <h2 style={{ textAlign: "center" }}>Who are we?</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
        {authors.map((author, i) =>
          <Card key={i} sx={{ maxWidth: 400, boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
            <CardMedia
              component="img"
              height="400"
              image={author.image}
              alt="author image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {author.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ whiteSpace: 'pre-line' }}>
                {author.bio}
              </Typography>
            </CardContent>
            <CardActions>

            </CardActions>
          </Card>
        )}
      </div>
    </main>
  );
}

export default About;