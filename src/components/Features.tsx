import React from "react";
import { Box, Button, Grid, Typography, makeStyles } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { featuresItem, proFeatures } from "../constants/featuresItems";
import FeatureCard from "./FeatureCard";
import PremiumFeatureCard from "./PremiumFeatureCard";

const useStyles = makeStyles((theme) => ({
  featuresSection: {
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#1B6B93",
    padding: theme.spacing(10, 0),
  },
  gridContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(0, 10),
  },
  button: {
    textTransform: "none",
    marginTop: theme.spacing(4),
    color: "#000000",
    fontSize: "16px",
    fontWeight: 700,
    backgroundColor: "#eef7ff",
    border: "none",
    borderRadius: "32px",
    padding: "14px 64px",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#f0f0f0",
      boxShadow: "none",
    },
  },
}));

const Features: React.FC = () => {
  const classes = useStyles();

  return (
    <Box id="featuresSection" className={classes.featuresSection}>
      <Typography
        variant="h4"
        component="h2"
        color="textPrimary"
        style={{ fontWeight: 700, color: "#eef7ff", padding: "24px 16px" }}
        gutterBottom
      >
        Every feature you need, on one platform
      </Typography>
      <Typography
        variant="h6"
        component="h3"
        gutterBottom
        style={{
          fontWeight: 400,
          color: "#eef7ff",
          marginBottom: "32px",
          padding: "8px 24px",
        }}
      >
        Never miss a critical website outage again. Get Instant Downtime &
        Expiration Alerts.
      </Typography>
      <Grid container spacing={3} className={classes.gridContainer}>
        {featuresItem.map((item) => (
          <Grid item xs={12} sm={12} md={6} lg={6} key={item.id}>
            <FeatureCard {...item} />
          </Grid>
        ))}
      </Grid>
      <Typography
        variant="h4"
        component="h3"
        gutterBottom
        style={{ fontWeight: 700, color: "#eef7ff", margin: "40px 8px" }}
      >
        Premium features for PRO users.
      </Typography>
      <Grid container spacing={3} className={classes.gridContainer}>
        {proFeatures.map((item) => (
          <Grid item xs={12} sm={12} md={4} lg={4} key={item.id}>
            <PremiumFeatureCard {...item} />
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        size="large"
        component="a"
        href="#"
        className={classes.button}
      >
        Try Us <ChevronRightIcon />
      </Button>
    </Box>
  );
};

export default Features;
