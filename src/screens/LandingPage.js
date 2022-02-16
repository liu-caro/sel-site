import { Grid, Typography, Button, Card, CardContent } from '@mui/material';

const LandingPage = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      p={8}>

      {/*
        background photo behind text here
        */}

      <Grid item xs={12}>
        <Typography variant="h2" align='center'>Social Emotional Learning (SEL)</Typography>
        <Typography variant="body1" align='center'>Guiding Your Child to Academic Success</Typography>
      </Grid>

      <Grid item xs={12} mb={4}>
        <Button variant="contained">Sign up / Log in</Button>
      </Grid>

      <Grid item xs={12} mt={2}>
        <Card>
          <CardContent>
            <Typography variant="h6">What is SEL?</Typography>
            <Typography variant="paragraph">
              Social Emotional Learning (SEL) is the developmental process of improving social and emotional competencies
              to support the formation and maintenance of intrapersonal and interpersonal relationships through the recognition,
              understanding, and management of emotions.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} mt={2}>
        <Card>
          <CardContent>
            <Typography variant="h6">Why is SEL important for your child?</Typography>
            <Typography variant="paragraph">
              Learning SEL skills improves the ways young children treat themselves and others. Children learn how to better
              navigate the people and environment around them, leading to academic success, less emotional distress, and
              positive social behavior.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} mt={2}>
        <Card>
          <CardContent>
            <Typography variant="h6">How can we help?</Typography>
            <Typography variant="paragraph">
              We use a combination of digital and physical platforms to support parents in building SEL skills with their children.
              Our mobile site allows parents to lead SEL activities on-the-go while our printable materials such as the activity booklet
              and skill tracker help children take charge of their learning journey.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

    </Grid>
  );
};

export default LandingPage;
