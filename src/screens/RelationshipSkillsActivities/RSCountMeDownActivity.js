import { Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ReactPlayer from 'react-player'

const RSCountMeDownActivity = () => {
  return (
      <Container maxWidth="sm">
        <Typography variant="h2">Count Me Down</Typography>

        <Typography variant="body1">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Typography>
        <Button variant="contained" disabled>Printable Version</Button>
      
        <Typography variant="h3">Directions</Typography>
        <Typography variant="body1">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Typography>
        
        <Typography variant="h3">Instructional Video</Typography>
        <ReactPlayer url="https://youtu.be/4S2yj4TB_I8" />

        <Button variant="outlined">Mark as done!</Button>
      </Container>
  );
};

export default RSCountMeDownActivity;
