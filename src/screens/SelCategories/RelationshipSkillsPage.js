import { Grid, Typography, Button } from '@mui/material';

const activitiesRS = [
  ['Count Me Down'],
  ['Rose, Bud, Thorn'],
  ['Make New Friends Bingo'],
  ['Team Puzzle'],
];

const RelationshipSkillsPage = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      p={8}
    >

      <Grid item xs={12}>
        <Typography variant="h1" align='center'>Relationship Skills</Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography paragraph>
          Relationship Skills is the ability to understand the
          perspectives of others and empathize (including those from a differing
          backgrounds to one’s own).
        </Typography>
        <Typography paragraph>
          It is essential to:
          <ul>
            <li>Helping us build and maintain meaningful
              connections across race, culture, age, and distance</li>
            <li>Supporting one another during collective grief and struggle</li>
            <li>Collaboratively finding solutions to new obstacles</li>
          </ul>
        </Typography>
        <Typography paragraph>
          It includes the capacties to:
          <ul>
            <li>Communicate clearly</li>
            <li>Listen actively</li>
            <li>Cooperate</li>
            <li>Work collaboratively to problem solve and negotiate conflict constructively</li>
            <li>Navigate settings with differing social and cultural demands and opportunities</li>
            <li>Provide leadership</li>
            <li>Seek or offer help when needed</li>
          </ul>
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h3" align='center'>Activities</Typography>
      </Grid>
      {activitiesRS.map((activity) => {
        return (
          <Grid item key={activity} xs={12}>
             <Button variant="contained">{activity} </Button>
          </Grid>
        )
      })}
    </Grid>
  );
};

export default RelationshipSkillsPage;
