import * as React from 'react';
import {
    AppBar,
    Box,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { firebaseAuth } from '../firebase-config';
import { signOut } from 'firebase/auth';

const pages = [['Home', '/home']];

const ResponsiveAppBar = () => {
    const [user] = useAuthState(firebaseAuth);

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position='static'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Link to={'/'} style={{ textDecoration: 'none' }}>
                        <Typography
                            variant='h6'
                            noWrap
                            component='div'
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            SEL Zoo
                        </Typography>
                    </Link>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' },
                        }}
                    >
                        <IconButton
                            size='large'
                            aria-label='account of current user'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleOpenNavMenu}
                            color='inherit'
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id='menu-appbar'
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map(([pageName, pageLink]) => (
                                <MenuItem
                                    key={pageName}
                                    onClick={handleCloseNavMenu}
                                    component={Link}
                                    to={pageLink}
                                >
                                    <Link
                                        to={pageLink}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <Typography textAlign='center'>
                                            {pageName}
                                        </Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant='h6'
                        noWrap
                        component='div'
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' },
                        }}
                    >
                        SEL Zoo
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                        }}
                    >
                        {pages.map(([pageName, pageLink]) => (
                            <div>
                                <Link
                                    to={pageLink}
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Button
                                        key={pageName}
                                        onClick={handleCloseNavMenu}
                                        sx={{
                                            my: 2,
                                            color: 'white',
                                            display: 'block',
                                        }}
                                    >
                                        {pageName}
                                    </Button>
                                </Link>
                            </div>
                        ))}
                    </Box>
                    {user ? (
                        <Button
                            variant='contained'
                            class='landingOnboardingButton'
                            disableRipple={true}
                            onClick={() => signOut(firebaseAuth)}
                        >
                            Log out
                        </Button>
                    ) : (
                        <Link to='/signup' style={{ textDecoration: 'none' }}>
                            <Button
                                variant='contained'
                                class='landingOnboardingButton'
                                disableRipple={true}
                            >
                                Sign up / Log in
                            </Button>
                        </Link>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
