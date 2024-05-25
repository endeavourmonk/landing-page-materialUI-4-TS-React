import React, { useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  isWidthDown,
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Style } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    marginTop: theme.spacing(4),
    // marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      // marginTop: theme.spacing(12),
      // marginBottom: theme.spacing(12),
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  contentBox: {
    width: "80%",
    // marginTop: theme.spacing(8),
    // marginBottom: theme.spacing(4),
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
    // padding:  "14px 64px",
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
    // marginBottom: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8),
    },
  },
}));

const Hero: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();

  // adjusting the svg on small devices
  useEffect(() => {
    function handleResize() {
      const svg = document.getElementById("wave");
      if (window.innerWidth < 600) {
        svg?.setAttribute("viewBox", "300 0 540 310");
      } else {
        svg?.setAttribute("viewBox", "0 0 1440 310");
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

      <svg
        id="wave"
        style={{
          transform: "rotate(0deg)",
          transition: " 0.3s",
        }}
        viewBox="0 0 1440 310"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="rgba(189, 224, 255, 1)" offset="0%"></stop>
            <stop stop-color="rgba(180, 210, 238, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 0px)", opacity: "1" }}
          fill="url(#sw-gradient-0)"
          d="M0,217L80,227.3C160,238,320,258,480,222.2C640,186,800,93,960,87.8C1120,83,1280,165,1440,206.7C1600,248,1760,248,1920,211.8C2080,176,2240,103,2400,62C2560,21,2720,10,2880,5.2C3040,0,3200,0,3360,5.2C3520,10,3680,21,3840,25.8C4000,31,4160,31,4320,51.7C4480,72,4640,114,4800,118.8C4960,124,5120,93,5280,82.7C5440,72,5600,83,5760,113.7C5920,145,6080,196,6240,191.2C6400,186,6560,124,6720,113.7C6880,103,7040,145,7200,155C7360,165,7520,145,7680,144.7C7840,145,8000,165,8160,180.8C8320,196,8480,207,8640,191.2C8800,176,8960,134,9120,134.3C9280,134,9440,176,9600,175.7C9760,176,9920,134,10080,98.2C10240,62,10400,31,10560,25.8C10720,21,10880,41,11040,41.3C11200,41,11360,21,11440,10.3L11520,0L11520,310L11440,310C11360,310,11200,310,11040,310C10880,310,10720,310,10560,310C10400,310,10240,310,10080,310C9920,310,9760,310,9600,310C9440,310,9280,310,9120,310C8960,310,8800,310,8640,310C8480,310,8320,310,8160,310C8000,310,7840,310,7680,310C7520,310,7360,310,7200,310C7040,310,6880,310,6720,310C6560,310,6400,310,6240,310C6080,310,5920,310,5760,310C5600,310,5440,310,5280,310C5120,310,4960,310,4800,310C4640,310,4480,310,4320,310C4160,310,4000,310,3840,310C3680,310,3520,310,3360,310C3200,310,3040,310,2880,310C2720,310,2560,310,2400,310C2240,310,2080,310,1920,310C1760,310,1600,310,1440,310C1280,310,1120,310,960,310C800,310,640,310,480,310C320,310,160,310,80,310L0,310Z"
        ></path>
        <defs>
          <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="rgba(189, 224, 255, 1)" offset="0%"></stop>
            <stop stop-color="rgba(68, 143, 212, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 50px)", opacity: "0.9" }}
          fill="url(#sw-gradient-1)"
          d="M0,93L80,98.2C160,103,320,114,480,144.7C640,176,800,227,960,242.8C1120,258,1280,238,1440,232.5C1600,227,1760,238,1920,237.7C2080,238,2240,227,2400,206.7C2560,186,2720,155,2880,155C3040,155,3200,186,3360,175.7C3520,165,3680,114,3840,124C4000,134,4160,207,4320,217C4480,227,4640,176,4800,144.7C4960,114,5120,103,5280,87.8C5440,72,5600,52,5760,77.5C5920,103,6080,176,6240,206.7C6400,238,6560,227,6720,206.7C6880,186,7040,155,7200,134.3C7360,114,7520,103,7680,98.2C7840,93,8000,93,8160,98.2C8320,103,8480,114,8640,98.2C8800,83,8960,41,9120,56.8C9280,72,9440,145,9600,191.2C9760,238,9920,258,10080,222.2C10240,186,10400,93,10560,72.3C10720,52,10880,103,11040,149.8C11200,196,11360,238,11440,258.3L11520,279L11520,310L11440,310C11360,310,11200,310,11040,310C10880,310,10720,310,10560,310C10400,310,10240,310,10080,310C9920,310,9760,310,9600,310C9440,310,9280,310,9120,310C8960,310,8800,310,8640,310C8480,310,8320,310,8160,310C8000,310,7840,310,7680,310C7520,310,7360,310,7200,310C7040,310,6880,310,6720,310C6560,310,6400,310,6240,310C6080,310,5920,310,5760,310C5600,310,5440,310,5280,310C5120,310,4960,310,4800,310C4640,310,4480,310,4320,310C4160,310,4000,310,3840,310C3680,310,3520,310,3360,310C3200,310,3040,310,2880,310C2720,310,2560,310,2400,310C2240,310,2080,310,1920,310C1760,310,1600,310,1440,310C1280,310,1120,310,960,310C800,310,640,310,480,310C320,310,160,310,80,310L0,310Z"
        ></path>
      </svg>
    </Box>
  );
};

export default Hero;
