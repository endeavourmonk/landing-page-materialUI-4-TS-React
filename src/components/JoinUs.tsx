import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import GroupIcon from "@material-ui/icons/Group";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 800,
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#448FD4",
    color: "#eef7ff",
  },
  topBox: {
    flex: 1,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E79CB",
    color: "#eef7ff",
  },
  bottomBox: {
    flex: 3,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    textTransform: "none",
    color: "#1E79CB",
    fontSize: "16px",
    fontWeight: 700,
    backgroundColor: "#eef7ff",
    borderRadius: 32,
    margin: "12px 0px",
    padding: "14px 64px",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#ccd9e8",
    },
  },
}));

const JoinUs: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.topBox}>
        <GroupIcon style={{ fontSize: "40px" }} />
        <Typography
          variant="h6"
          component="h3"
          gutterBottom
          style={{ fontWeight: 400, margin: "16px 0", padding: "0 32px" }}
        >
          Thousands of customers are using Domain Monitor every day - join us.
        </Typography>
      </Box>
      <Box className={classes.bottomBox}>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          style={{ fontWeight: 500 }}
        >
          Ready to start monitoring?
        </Typography>
        <Typography
          variant="h6"
          component="h3"
          gutterBottom
          style={{ fontWeight: 400, margin: "16px 0", padding: "0 32px" }}
        >
          Join thousands of others monitoring their domain's expiry date and
          website on our platform, you could be one of them.
        </Typography>
        <Button
          variant="contained"
          size="large"
          component="a"
          href="#"
          className={classes.button}
        >
          Create my Account Now
        </Button>
      </Box>
    </Box>
  );
};

export default JoinUs;
