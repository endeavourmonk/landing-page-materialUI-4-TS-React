import React from "react";
import { Box, Button, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 350,
    width: "100vw",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(12),
      marginBottom: theme.spacing(12),
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  contentBox: {
    width: "70%",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    textTransform: "none",
    color: "#eef7ff",
    backgroundColor: "#0368d9",
    fontSize: "18px",
    fontWeight: 700,
    border: "none",
    borderRadius: "32px",
    padding: "14px 64px",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#0256b3",
    },
  },
  paragraph: {
    color: "#3D3B40",
    fontWeight: 500,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8),
    },
  },
}));

const Hero: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.contentBox}>
        <Box>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            style={{ fontWeight: 500 }}
          >
            The fastest all-in-one{" "}
            <Typography
              component="span"
              style={{ color: "#0256b3", fontSize: 48, fontWeight: 500 }}
            >
              domain & website monitoring
            </Typography>{" "}
            tool
          </Typography>
          <Typography
            variant="h6"
            component="h3"
            gutterBottom
            className={classes.paragraph}
          >
            Keep your website, server and domain online with our complete
            monitoring solution, join our platform today.
          </Typography>
        </Box>
      </Box>
      <Button
        variant="contained"
        component="a"
        href="#"
        className={classes.button}
      >
        Monitor Your Domain Now
      </Button>
    </Box>
  );
};

export default Hero;
