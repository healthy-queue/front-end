import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import jeremy from './jeremy.jpg';
import ayrat from './ayrat.jpg';
import tom from './tom.png';
import lorenzo from './lorenzo.jpeg';

const About = () => {
  const authors = [
    {
      name: 'Jeremy Brazell',
      bio: 'Software Developer & UX Designer. \n\n17 years of Procurement experience in supply chain in aerospace, ecommerce, defense, & telecommunications. \n\nPassionate about accessibility and building scalable, useful, & fun software',
      image: jeremy,
      linkedIn: 'https://www.linkedin.com/in/jeremywbrazell/',
      gitHub: 'https://github.com/jeremywbrazell'
    },
    {
      name: 'Tom McGuire',
      bio: 'A software developer passionate about open source.',
      image: tom,
      linkedIn: 'https://www.linkedin.com/in/1337/',
      gitHub: 'https://github.com/MuckT'
    },
    {
      name: 'Lorenzo Ortega',
      bio: 'My greatest aspiration is to become a professional in the Tech Industry as Software Developer \n\nI continue to grow by being adaptive and malleable to new concepts and paradigms \n\n My willingness to work in a team is paramount to my conceptual knowledge and growth \n\nI want to be an effective and approachable developer that is always willing to teach those around me',
      image: lorenzo,
      linkedIn: 'https://www.linkedin.com/in/lorenzo-ortega-antoni/',
      gitHub: 'https://github.com/antoni909'
    },
    {
      name: 'Ayrat Gimranov',
      bio: 'Software developer with background in healthcare. \n\nFormer acute care RN specializing in advanced heart failure and cardiothoracic surgery \n\nHobbies: Foreign languages (Russian, Tatar, Turkish) and playing accordion',
      image: ayrat,
      linkedIn: 'https://www.linkedin.com/in/ayrat-gimranov/',
      gitHub: 'https://github.com/ag961'
    }
  ]

  return (
    <main>
      <Typography variant="h4" component="h2" sx={{textAlign: "center"}}>
        Who Are We? 
      </Typography>
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
              <Typography gutterBottom variant="h5" component="div" sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                  {author.name}
                </Box>
                <Box>
                  <IconButton sx={{ width: "auto" }} aria-label="linkedIn" href={author.linkedIn}>
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton sx={{ width: "auto" }} aria-label="gitHub" href={author.gitHub}>
                    <GitHubIcon />
                  </IconButton>
                </Box>
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ whiteSpace: 'pre-line' }}>
                {author.bio}
              </Typography>
            </CardContent>
          </Card>
        )}
      </div>
    </main>
  );
}

export default About;