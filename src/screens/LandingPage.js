import { useTheme } from '@mui/material/styles';
import { Grid, Typography, Button, Card, CardContent, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { firebaseAuth } from '../firebase-config';
import { signOut } from 'firebase/auth';
import logo from '../assets/logo-white.png';

const LandingPage = () => {
    const [user] = useAuthState(firebaseAuth);
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.up('sm'));
    const md = useMediaQuery(theme.breakpoints.up('md'));

    const logoSize = () => {
        if (md) {
            return '15%';
        } else if (sm) {
            return '20%';
        } else {
            return '30%';
        }
    }

    return (
        <div>
            <Grid
                container
                direction='column'
                justifyContent='center'
                alignItems='center'
                pt={2}
                mb={5}
                style={{
                    background: `linear-gradient(#1A1A1A37, #1A1A1A37), url("https://rochester.kidsoutandabout.com/sites/default/files/styles/970w/public/Parent%20Child%20Read%201.jpg?itok=E7Xt6FqZ")`,
                    minHeight: '300px',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundColor: 'white',
                }}
            >
                <Grid item xs={12} pb={2}>
                    <img src={logo} alt="Logo" height={logoSize()} width={logoSize()} align='center' style={{'margin-left': 'auto', 'margin-right': 'auto', 'display': 'block'}} />
                    <Typography
                        variant='h6'
                        align='center'
                        style={{ color: 'white' }}
                    >
                        Guiding Your Child to Academic Success
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    {user ? (
                        <Button
                            variant='contained'
                            class='landingOnboardingButton'
                            onClick={() => signOut(firebaseAuth)}
                        >
                            Log out
                        </Button>
                    ) : (
                        <div>
                            <Link
                                to='/signup'
                                style={{
                                    textDecoration: 'none',
                                    marginRight: 10,
                                }}
                            >
                                <Button
                                    variant='contained'
                                    class='landingOnboardingButton'
                                >
                                    Sign up
                                </Button>
                            </Link>
                            <Link
                                to='/login'
                                style={{ textDecoration: 'none' }}
                            >
                                <Button
                                    variant='contained'
                                    class='landingOnboardingButton'
                                >
                                    Log in
                                </Button>
                            </Link>
                        </div>
                    )}
                </Grid>
            </Grid>

            <Grid
                container
                direction='column'
                justifyContent='center'
                alignItems='center'
                px={3}
            >
                <Grid container alignItems='center' justifyContent={'center'}>
                    <Grid
                        item
                        xs={12}
                        md={3}
                        ml={2}
                        mr={2}
                        mt={2}
                        mb={2}
                        style={{ maxWidth: '350px' }}
                    >
                        <Card
                            style={{
                                backgroundColor: '#00A87D40',
                                minHeight: '200px',
                            }}
                        >
                            <CardContent>
                                <Typography variant='h6'>
                                    What is SEL?
                                </Typography>
                                <Typography variant='paragraph'>
                                    Social Emotional Learning (SEL) is the
                                    developmental process of improving social
                                    and emotional competencies to support the
                                    formation and maintenance of intrapersonal
                                    and interpersonal relationships through the
                                    recognition, understanding, and management
                                    of emotions.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        md={3}
                        ml={2}
                        mr={2}
                        mt={2}
                        mb={2}
                        style={{ maxWidth: '350px' }}
                    >
                        <Card
                            style={{
                                backgroundColor: '#FBBD3340',
                                minHeight: '200px',
                            }}
                        >
                            <CardContent>
                                <Typography variant='h6'>
                                    Why is SEL important for your child?
                                </Typography>
                                <Typography variant='paragraph'>
                                    Learning SEL skills improves the ways young
                                    children treat themselves and others.
                                    Children learn how to better navigate the
                                    people and environment around them, leading
                                    to academic success, less emotional
                                    distress, and positive social behavior.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        md={3}
                        ml={2}
                        mr={2}
                        mt={2}
                        mb={2}
                        style={{ maxWidth: '350px' }}
                    >
                        <Card
                            style={{
                                backgroundColor: '#FEE9E5',
                                minHeight: '200px',
                            }}
                        >
                            <CardContent>
                                <Typography variant='h6'>
                                    How can we help?
                                </Typography>
                                <Typography variant='paragraph'>
                                    We use a combination of digital and physical
                                    platforms to support parents in building SEL
                                    skills with their children. Our mobile site
                                    allows parents to lead SEL activities
                                    on-the-go while our printable materials such
                                    as the activity booklet and skill tracker
                                    help children take charge of their learning
                                    journey.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default LandingPage;
