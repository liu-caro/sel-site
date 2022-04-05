import { Grid, Typography, Chip } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const CategoryPage = ({ activities, timeAndDifficulties, title, overviewText, importanceText, keySkillsText }) => {

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
                <Typography variant="h1" align='center'>{title}</Typography>
            </Grid>

            <Grid item xs={12}>
                <Typography paragraph>{overviewText}</Typography>
            </Grid>

            <Grid item xs={12}>
                <Typography paragraph>{importanceText}</Typography>
            </Grid>

            <Grid item xs={12}>
                <Typography paragraph>{keySkillsText}</Typography>
            </Grid>

            <Grid item xs={12}>
                <Typography variant="h2" align='center'>Activities</Typography>

            </Grid>

            {activities.map(([activityName, difficulty, time, activityLink, buttonCategory]) => {
                return (
                    <Grid key={activityName} container spacing={1}>
                        <Grid container item xs={6}  style={{ textDecoration: 'none', flex: 1 }}>
                            <Link to={activityLink} style={{ textDecoration: 'none'}}>
                                <Button variant="contained" class={buttonCategory}>{activityName}</Button>
                            </Link>
                        </Grid>
                        <br />
                        <Grid container item xs={6} style={{ flex: 1 }}>
                            <Chip label={difficulty} class='chip' />
                            <Chip label={time} class='chip' /> 
                        </Grid>
                            
                    </Grid>
                )
            })}
        </Grid>
    );
};

export default CategoryPage;
