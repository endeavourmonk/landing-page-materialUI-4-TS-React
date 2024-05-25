import React from "react";
import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 800,
    minHeight: 275,
    margin: "auto",
    padding: 32,
    backgroundColor: "#164B60",
    color: "#eef7ff",
    "&:hover": {
      transform: "scale(0.9)",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: 16,
    },
  },
}));

interface PremiumFeatureCardProps {
  title: string;
  description: string;
}

const PremiumFeatureCard: React.FC<PremiumFeatureCardProps> = ({
  title,
  description,
}) => {
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.card}>
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          style={{ fontWeight: 800, marginBottom: 16 }}
        >
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default PremiumFeatureCard;
