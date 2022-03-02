import { Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const CategoryPage = ({ activities, title, overviewText, importanceText, keySkillsText }) => {

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

            {activities.map(([activityName, activityLink]) => {
                return (
                    <Grid item key={activityName} xs={12}>
                        <Link to={activityLink} style={{ textDecoration: 'none' }}>
                            <Button variant="contained">{activityName}</Button>
                        </Link>
                    </Grid>
                )
            })}
        </Grid>
    );
};

export default CategoryPage;
