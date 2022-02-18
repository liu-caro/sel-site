import { Grid, Typography, ImageList, ImageListItem, LinearProgress } from "@mui/material";
import Button from "@mui/material/Button";
import turtleProgressBar from './../../assets/onboardingImages/turtleBar.svg';
import dolphinProgressBar from './../../assets/onboardingImages/dolphinBar.svg';
import giraffeProgressBar from './../../assets/onboardingImages/giraffeBar.svg';
import tigerProgressBar from './../../assets/onboardingImages/tigerBar.svg';
import hippoProgressBar from './../../assets/onboardingImages/hippoBar.svg';

const OnboardingWelcomePage = () => {
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
        <Typography variant="h1">Welcome to your SEL Portal!</Typography>
      </Grid>

      <ImageList cols={1} gap={40}>
        <ImageListItem>
          <img src={turtleProgressBar} alt="turtle progress bar" width={2500} />
        </ImageListItem>

        <ImageListItem>
          <img src={dolphinProgressBar} alt="dolphin progress bar" width={2500} />
        </ImageListItem>

        <ImageListItem>
          <img src={giraffeProgressBar} alt="giraffe progress bar" width={2500} />
        </ImageListItem>

        <ImageListItem>
          <img src={tigerProgressBar} alt="tiger progress bar" width={2500} />
        </ImageListItem>

        <ImageListItem>
          <img src={hippoProgressBar} alt="hippo progress bar" width={2500} />
        </ImageListItem>
      </ImageList>

      {/* <ImageList sx={{ width: 600 }} cols={2} gap={80}>
        
          <ImageListItem>
            <img src={turtleCharacter} alt="turtle"/>
           </ImageListItem> 

           <ImageListItem>
            <Typography variant = "h5">Responsible Decision Making</Typography>
            <LinearProgress variant="determinate" value={80} sx={{height: 30}} />
           </ImageListItem>
           
           <ImageListItem>
            <img src={dolphinCharacter} alt="dolphin"/>
           </ImageListItem>

           <ImageListItem>
            <Typography variant = "h5">Self Awareness</Typography>
            <LinearProgress variant="determinate" value={60} sx={{height: 30}}/>
           </ImageListItem>   

           <ImageListItem>
            <img src={giraffeCharacter} alt="giraffe"/>
           </ImageListItem>
           
           <ImageListItem>
            <Typography variant = "h5">Social Awareness</Typography>
            <LinearProgress variant="determinate" value={25} sx={{height: 30}}/>
           </ImageListItem>

           <ImageListItem>
            <img src={tigerCharacter} alt="tiger"/>
           </ImageListItem>

           <ImageListItem>
            <Typography variant = "h5">Relationship Skills</Typography>
            <LinearProgress variant="determinate" value={85} sx={{height: 30}}/>
           </ImageListItem> 

           <ImageListItem>
            <img src={hippoCharacter} alt="hippo"/>
           </ImageListItem>
           
           <ImageListItem>
            <Typography variant = "h5">Self Management</Typography>
            <LinearProgress variant="determinate" value={40} sx={{height: 30}}/>
           </ImageListItem>
        </ImageList> */}


      <Grid item xs={12}>
        <Typography variant="body1">
          SEL has 5 main pillars of learning, represented by 5 animals. We provide activities for parents to do with their children to develop SEL skills As your child improves on their skills, they will level up in the related category.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Button variant="text">Skip tutorial</Button>
      </Grid>

      <Grid item xs={12}>
        <Button variant="contained">Next</Button>
      </Grid>

    </Grid>
  );
};

export default OnboardingWelcomePage;
