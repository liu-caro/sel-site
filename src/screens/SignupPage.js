import { Alert, Grid, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import { firebaseAuth } from '../firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import useInput from '../hooks/useInput';
import { useState } from 'react';
import { useStyles } from '../utils/theme';

const SignupPage = () => {
    const email = useInput('');
    const password = useInput('');
    const [error, setError] = useState();
    let navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const classes = useStyles();
    return (
        <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
            spacing={2}
            p={8}
        >
            <Grid item xs={12} mb={2}>
                <Typography variant='h1' align='center'>
                    Create an Account
                </Typography>
            </Grid>

            {error ? (
                <Alert severity='error'>
                    The following error occured when creating your account:
                    <br />
                    {error.errorMessage}
                </Alert>
            ) : null}

            <Grid item xs={12} style={{ maxWidth: 500 }} mb={4}>
                <Typography variant='body2' align='left'>
                    Users can browse all activities without an account, but with
                    an account you can keep track of your child’s progress in
                    SEL skills and we can recommend activities which are best
                    suited for your child’s age!
                </Typography>
                <br />
                <Typography variant='body2' align='left'>
                    We currently do not and will never share your information
                    with third parties.
                </Typography>
            </Grid>

            <Grid
                container
                spacing={2}
                style={{ maxWidth: 500 }}
                justifyContent='center'
            >
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id='child-age'
                        label="Child's Age"
                        variant='filled'
                        InputProps={{ className: classes.input }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id='email'
                        label='Email'
                        variant='filled'
                        value={email.value}
                        onChange={email.onChange}
                        InputProps={{ className: classes.input }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id='confirm-email'
                        label='Confirm Email'
                        variant='filled'
                        InputProps={{ className: classes.input }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id='password'
                        label='Create Password'
                        type='password'
                        variant='filled'
                        value={password.value}
                        onChange={password.onChange}
                        InputProps={{ className: classes.input }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id='confirm-password'
                        label='Confirm Password'
                        type='password'
                        variant='filled'
                        InputProps={{ className: classes.input }}
                    />
                </Grid>

                <Grid item align={'center'} xs={12}>
                    <Typography variant='subtitle1'>
                        <span> Returning User? </span>
                        <Link to='/'>Log in here</Link>
                    </Typography>
                </Grid>
                <Grid item align={'center'} xs={12}>
                    <LoadingButton
                        loading={isLoading}
                        variant='contained'
                        onClick={() => {
                            setIsLoading(true);
                            createUserWithEmailAndPassword(
                                firebaseAuth,
                                email.value,
                                password.value
                            )
                                .then((userCredential) => {
                                    // Signed in
                                    const user = userCredential.user;
                                    console.log(user);
                                    navigate('/onboarding-welcome');
                                })
                                .catch((error) => {
                                    const errorCode = error.code;
                                    const errorMessage = error.message;
                                    console.log(
                                        'Error occured with ' +
                                            { errorCode } +
                                            { errorMessage }
                                    );
                                    setError({ errorCode, errorMessage });
                                })
                                .finally(() => setIsLoading(false));
                        }}
                    >
                        Sign Up!
                    </LoadingButton>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default SignupPage;
