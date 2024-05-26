import {
  Box,
  Button,
  Typography,
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    marginTop: theme.spacing(4),
    marginBottom: "-1px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  contentBox: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
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
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8),
    },
  },
}));

const Hero: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box className={classes.root}>
      <Box
        className={classes.contentBox}
        style={{ marginTop: isSmallScreen ? "16px" : "64px" }}
      >
        <Box>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            style={{
              fontWeight: 500,
              fontSize: isSmallScreen ? "40px" : "48px",
            }}
          >
            The fastest all-in-one{" "}
            <Typography
              component="span"
              style={{
                color: "#0256b3",
                fontWeight: 500,
                fontSize: isSmallScreen ? "40px" : "48px",
              }}
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
        <Button
          variant="contained"
          component="a"
          href="#"
          className={classes.button}
          style={{ padding: isSmallScreen ? "12px 32px" : "14px 48px" }}
        >
          Monitor Your Domain Now
        </Button>
      </Box>

      <svg id="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#1B6B93"
          fill-opacity="1"
          d="M0,256L48,229.3C96,203,192,149,288,149.3C384,149,480,203,576,229.3C672,256,768,256,864,229.3C960,203,1056,149,1152,144C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </Box>
  );
};

export default Hero;
