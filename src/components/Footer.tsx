import React from "react";
import { Grid, Typography, Link, Box, makeStyles } from "@material-ui/core";
import logo from "../assets/img/logo.png";

const useStyles = makeStyles((theme) => ({
  logoStyle: {
    width: "90px",
    height: "auto",
    cursor: "pointer",
  },
  linkStyle: {
    fontWeight: "bold",
    textDecoration: "none",
    marginRight: "16px",
  },
  footerBox: {
    backgroundColor: "#3D3B40",
    marginTop: "auto",
    width: "100vw",
    height: 400,
    color: "#eef7ff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.footerBox}>
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item xs={12}>
          <img src={logo} className={classes.logoStyle} alt="logo" />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2">
            © Domain Monitor 2024, all rights reserved.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Resources
          </Typography>
          <Link
            href="#"
            variant="body2"
            color="inherit"
            className={classes.linkStyle}
          >
            Help center
          </Link>
          <Link
            href="#"
            variant="body2"
            color="inherit"
            className={classes.linkStyle}
          >
            Pricing
          </Link>
          <Link
            href="#"
            variant="body2"
            color="inherit"
            className={classes.linkStyle}
          >
            Contact
          </Link>
          <Link
            href="#"
            variant="body2"
            color="inherit"
            className={classes.linkStyle}
          >
            Blog
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2">
            Registered in India, company number: 111111
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
