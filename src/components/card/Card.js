import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Card = ({ title, icon }) => {
  return (
    <MuiCard style={{ backgroundColor: "cyan", textAlign: "center" }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
      </CardContent>
      <CardMedia>{icon}</CardMedia>
    </MuiCard>
  );
};

export default Card;
