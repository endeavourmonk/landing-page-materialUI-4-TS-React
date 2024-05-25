import React from "react";
import { Box, Grid, Typography, makeStyles, useTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  awardsSection: {
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    padding: theme.spacing(16, 0),
  },
  image: {
    width: "100%",
  },
}));

const Awards: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box id="awardsSection" className={classes.awardsSection}>
      <Typography
        variant="h6"
        component="h3"
        gutterBottom
        style={{
          fontSize: 20,
          fontWeight: 400,
          marginBottom: theme.spacing(2), // mb={4} equivalent
          color: "#3D3B40",
        }}
      >
        Featured on with <b>5 star reviews</b>.
      </Typography>
      <Grid
        container
        spacing={2}
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 10%",
        }}
      >
        <Grid item xs={4} sm={2} md={3}>
          <img
            src="https://domain-monitor.io/images/sponsors/product-hunt.png"
            alt="Award 1"
            className={classes.image}
          />
        </Grid>
        <Grid item xs={4} sm={2} md={3}>
          <img
            src="https://domain-monitor.io/images/sponsors/alternative-to.png"
            alt="Award 2"
            className={classes.image}
          />
        </Grid>
        <Grid item xs={4} sm={2} md={3}>
          <img
            src="https://domain-monitor.io/images/sponsors/saas-hub.png"
            alt="Award 3"
            className={classes.image}
          />
        </Grid>
        <Grid item xs={4} sm={2} md={3}>
          <img
            src="https://domain-monitor.io/images/sponsors/software-suggest.png"
            alt="Award 4"
            className={classes.image}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Awards;
