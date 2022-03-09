import { Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import progressTracker from './../../assets/onboardingImages/progressTracker.svg';
import flashcards from './../../assets/onboardingImages/flashcards.svg';
import { Link } from 'react-router-dom';

const OnboardingPrintablesPage = () => {
    return (
        <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
            p={3}

        >
            <Grid item xs={12} style={{ textAlign: 'center' }}>
                <Typography variant='h1'>Enhance with printables</Typography>
            </Grid>

            <br />

            <Grid container direction='row' style={{ alignItems: 'center', justifyContent:'center' }}>
                <Grid item xs={6} mr={5}>
                    <img src={progressTracker} alt='progress tracker' />
                </Grid>

                <Grid item xs={3}>
                    <Typography variant='h4'>Progress Tracker</Typography>
                </Grid>
            </Grid>

            <br />
            <Grid container direction='row' style={{ alignItems: 'center', justifyContent:'center' }}>
                <Grid item xs={5} mr={1}>
                    <Typography variant='h4' style={{ textAlign: 'center'}}>
                        On-the-Go Activity Flipbook
                    </Typography>
                </Grid>

                <Grid item xs={6}>
                    <img src={flashcards} alt='flashcards' />
                </Grid>
            </Grid>

            <br /> 
            <Grid item xs={12}>
                <Typography variant='body1'>
                    We provide lots of low-cost printable resources that go
                    along with our SEL activities. The home Progress Tracker
                    lets children visually see their progress. The Activity
                    Booklet lets families do activities while travelling. We
                    hope you and your family enjoy growing your SEL skills
                    together!
                </Typography>
            </Grid>
            <br /> 

            <Grid item xs={12}>
                <Link to='/home' style={{ textDecoration: 'none' }}>
                    <Button variant='contained'>Get started!</Button>
                </Link>
            </Grid>
        </Grid>
    );
};

export default OnboardingPrintablesPage;
