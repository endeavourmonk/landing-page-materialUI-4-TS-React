import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import Features from "./Features";
import Hero from "./Hero";
import FAQs from "./FAQs";
import Footer from "./Footer";
import NotificationChannels from "./NotificationChannels";
import Products from "./Products";
import Reviews from "./Reviews";
import Awards from "./Awards";
import JoinUs from "./JoinUs";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
}));

const Body: React.FC = () => {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.container}>
      <Hero />
      <Features />
      <NotificationChannels />
      <Products />
      <Reviews />
      <FAQs />
      <Awards />
      <JoinUs />
      <Footer />
    </Container>
  );
};

export default Body;
