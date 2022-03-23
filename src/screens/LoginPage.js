import { Alert, Grid, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { firebaseAuth } from '../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import useInput from '../hooks/useInput';
import { useState } from 'react';

const LoginPage = () => {
    const email = useInput('');
    const password = useInput('');
    const [error, setError] = useState();
    let navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
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
                    Login
                </Typography>
            </Grid>

            {error ? (
                <Alert severity='error'>
                    The following error occured when logging into your account:
                    <br />
                    {error.errorMessage}
                </Alert>
            ) : null}

            <Grid item xs={12} style={{ maxWidth: 500 }} mb={4}>
                <Typography variant='body2' align='left'>
                    Welcome back to your SEL portal!
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
                        id='email'
                        label='Email'
                        variant='filled'
                        value={email.value}
                        onChange={email.onChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id='password'
                        label='Password'
                        type='password'
                        variant='filled'
                        value={password.value}
                        onChange={password.onChange}
                    />
                </Grid>
                <Grid item align={'center'} xs={12}>
                    <LoadingButton
                        loading={isLoading}
                        variant='contained'
                        onClick={() => {
                            setIsLoading(true);
                            signInWithEmailAndPassword(
                                firebaseAuth,
                                email.value,
                                password.value
                            )
                                .then((userCredential) => {
                                    const user = userCredential.user;
                                    console.log(user);
                                    navigate('/home');
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
                        Log in
                    </LoadingButton>
                </Grid>
            </Grid>

        </Grid>
    );
};

export default LoginPage;