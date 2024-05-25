import React from "react";
import { Box, Grid, Typography, makeStyles } from "@material-ui/core";
import { reviews } from "../constants/reviews";
import ReviewCard from "./ReviewCard";

const useStyles = makeStyles((theme) => ({
  reviewSection: {
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#DDE6ED",
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
  gridContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 10%",
  },
  header: {
    color: "#3D3B40",
    fontWeight: 700,
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(2),
  },
  subHeader: {
    fontSize: 20,
    fontWeight: 400,
    marginBottom: theme.spacing(4),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    color: "#3D3B40",
  },
}));

export default function Reviews() {
  const classes = useStyles();

  return (
    <Box className={classes.reviewSection}>
      <Typography
        variant="h4"
        component="h3"
        gutterBottom
        className={classes.header}
      >
        Trusted by thousands of customers
      </Typography>
      <Typography
        variant="h6"
        component="h3"
        gutterBottom
        className={classes.subHeader}
      >
        Here's what some of our awesome customers are saying
      </Typography>
      <Grid container spacing={3} className={classes.gridContainer}>
        {reviews.map((review) => (
          <Grid item xs={12} sm={12} md={4} lg={4} key={review.id}>
            <ReviewCard {...review} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
