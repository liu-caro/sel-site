import { Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';

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
                <Typography variant="h3" align='center'>Activities</Typography>

            </Grid>

            {activities.map((activity) => {
                return (
                    <Grid item key={activity} xs={12}>
                        <Button variant="contained">{activity}</Button>
                    </Grid>
                )
            })}
        </Grid>
    );
};

export default CategoryPage;
