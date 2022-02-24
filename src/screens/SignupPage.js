import { Grid, Typography, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

const SignupPage = () => {
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            p={8}
        >
            <Grid item xs={12} mb={2}>
                <Typography variant="h1" align='center'>Create an Account</Typography>
            </Grid>

            <Grid item xs={12} style={{ maxWidth: 500 }} mb={4}>
                <Typography variant="body2" align='left'>Users can browse all activities without an account,
                    but with an account you can keep track of your child’s progress in SEL skills and we can recommend
                    activities which are best suited for your child’s age!</Typography>
                <br />
                <Typography variant="body2" align='left'>We currently do not and will never share your information
                    with third parties.</Typography>
            </Grid>

            <Grid container spacing={2} style={{ maxWidth: 500 }} justifyContent="center">
                <Grid item xs={12}>
                    <TextField fullWidth id="filled-basic" label="Child's Age" variant="filled" />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth id="filled-basic" label="Email" variant="filled" />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth id="filled-basic" label="Confirm Email" variant="filled" />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth id="filled-basic" label="Create Password" variant="filled" />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth id="filled-basic" label="Confirm Password" variant="filled" />
                </Grid>

                <Grid item align={"center"} xs={12}>
                    <Link to="/">
                        <Typography variant="subtitle1">Returning User? Log in here</Typography>
                    </Link>
                </Grid>
                <Grid item align={"center"} xs={12}>
                    <Button variant="contained">Sign Up!</Button>
                </Grid>
            </Grid>



        </Grid>
    );
};

export default SignupPage;
