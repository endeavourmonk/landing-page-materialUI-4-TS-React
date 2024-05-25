import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  Box,
  Typography,
  Grid,
  Button,
  makeStyles,
  useTheme,
} from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

// image imports
import email from "../assets/imgs/email.webp";
import discord from "../assets/imgs/discord.webp";
import slack from "../assets/imgs/slack.webp";
import sms from "../assets/imgs/sms.webp";
import twitter from "../assets/imgs/twitter.webp";
import web from "../assets/imgs/web.webp";
import webhooks from "../assets/imgs/webhooks.webp";
import pushover from "../assets/imgs/pushover.webp";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    margin: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
    backgroundColor: "#EAEAE0",
  },
  headerBox: {
    marginBottom: theme.spacing(6),
    width: "60%",
  },
  gridContainer: {
    width: "70%",
  },
  buttonStyle: {
    textTransform: "none",
    marginTop: theme.spacing(8),
    color: "#000000",
    fontSize: "18px",
    fontWeight: 700,
    backgroundColor: "transparent",
    border: "none",
    borderRadius: "32px",
    padding: "14px 64px",
    boxShadow: "none",
    "&:hover": {
      textDecoration: "underline",
      backgroundColor: "transparent",
      boxShadow: "none",
    },
  },
}));

const images = [
  { src: twitter, alt: "Twitter" },
  { src: webhooks, alt: "Webhooks" },
  { src: email, alt: "Email" },
  { src: discord, alt: "Discord" },
  { src: slack, alt: "Slack" },
  { src: sms, alt: "SMS" },
  { src: web, alt: "Web" },
  { src: pushover, alt: "Pushover" },
];

export default function NotificationChannels() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box className={classes.root}>
      <Box className={classes.headerBox}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          style={{ fontSize: 32, fontWeight: 600 }}
        >
          Notification channels{" "}
          <Typography
            variant="h4"
            component="span"
            gutterBottom
            style={{ fontSize: 32, fontWeight: 600, color: "#52699b" }}
          >
            reimagined
          </Typography>
        </Typography>
        <Typography
          variant="h6"
          component="h3"
          gutterBottom
          style={{
            fontSize: 20,
            fontWeight: 400,
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
          }}
        >
          Get notified right away with instant and customizable alerting,
          straight to the channel of your choice! Never miss critical downtime
          ever again.
        </Typography>
      </Box>
      <Grid container spacing={4} className={classes.gridContainer}>
        {images.map((item, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <LazyLoadImage
              alt={item.alt}
              src={item.src}
              width={"30%"}
              threshold={600}
            />
            <Typography variant="body2" style={{ fontWeight: 500 }}>
              {item.alt}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Button
        className={classes.buttonStyle}
        size="large"
        component="a"
        href="#"
      >
        Discover more <ArrowRightAltIcon />
      </Button>
    </Box>
  );
}
