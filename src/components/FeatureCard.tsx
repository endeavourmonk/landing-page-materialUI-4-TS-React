import React from "react";
import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 800,
    minHeight: 275,
    margin: "auto",
    padding: 32,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "scale(0.9)",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: 16,
    },
  },
  image: {
    height: "75px",
  },
}));

interface FeatureCardProps {
  title: string;
  description: string;
  imgUrl: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  imgUrl,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <img className={classes.image} alt={title} src={imgUrl} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ fontWeight: 800 }}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
