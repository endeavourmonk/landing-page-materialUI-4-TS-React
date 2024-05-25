import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Typography,
  MenuItem,
  Drawer,
  IconButton,
  Box,
  Link,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { makeStyles } from "@material-ui/core/styles";

import logo from "../assets/imgs/logo.webp";
import { navbarItems } from "../constants/navbarItems";

const useStyles = makeStyles((theme) => ({
  logoStyle: {
    width: "90px",
    height: "auto",
    cursor: "pointer",
    marginRight: "16px",
  },
  appBar: {
    top: 4,
    boxShadow: "none",
    backgroundColor: "transparent",
    backgroundImage: "none",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexShrink: 0,
    backgroundColor:
      theme.palette.type === "light"
        ? "rgba(255, 255, 255, 0.4)"
        : "rgba(0, 0, 0, 0.4)",
    backdropFilter: "blur(24px)",
    maxHeight: 40,
  },
  menuItem: {
    padding: "6px 12px",
  },
  loginButton: {
    textTransform: "none",
    fontSize: "16px",
    fontWeight: 700,
    backgroundColor: "transparent",
    border: "none",
  },
  accountButton: {
    textTransform: "none",
    color: "#eef7ff",
    fontSize: "16px",
    fontWeight: 700,
    backgroundColor: "#0368d9",
    border: "none",
    borderRadius: "32px",
    padding: "10px 24px",
    boxShadow: "none",
  },
}));

function Navbar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <AppBar position="relative" className={classes.appBar}>
      <Container maxWidth="xl">
        <Toolbar variant="regular" className={classes.toolbar}>
          <Box
            style={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              marginLeft: "-18px",
            }}
          >
            <img
              src={logo}
              style={{
                width: "90px",
                height: "auto",
                cursor: "pointer",
                marginRight: "16px",
              }}
              alt="logo"
            />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {navbarItems.map((item) => (
                <MenuItem
                  key={item.id}
                  onClick={() => scrollToSection(item.scrollToSection)}
                  className={classes.menuItem}
                >
                  <Typography
                    variant="body2"
                    color="textPrimary"
                    style={{ fontSize: 16, fontWeight: 700 }}
                  >
                    {item.name}
                  </Typography>
                </MenuItem>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            <Button className={classes.loginButton}>Log In</Button>
            <Button className={classes.accountButton}>Create account</Button>
          </Box>
          <Box sx={{ display: { sm: "", md: "none" } }}>
            <IconButton
              color="primary"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
              <IconButton
                style={{ justifyContent: "start" }}
                onClick={toggleDrawer(false)}
              >
                <ChevronRightIcon />
              </IconButton>
              <Box
                style={{
                  minWidth: "60vw",
                  padding: 2,
                  backgroundColor: "background.paper",
                  flexGrow: 1,
                }}
              >
                {navbarItems.map((item) => (
                  <MenuItem
                    key={item.id}
                    onClick={() => {
                      toggleDrawer(false)();
                      scrollToSection(item.scrollToSection);
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="textPrimary"
                      style={{ fontSize: 16, fontWeight: 700 }}
                    >
                      {item.name}
                    </Typography>
                  </MenuItem>
                ))}
                <MenuItem>
                  <Link
                    href="#"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Typography
                      variant="body2"
                      color="textPrimary"
                      style={{ fontSize: 16, fontWeight: 700 }}
                    >
                      Log In
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Button className={classes.accountButton}>
                    Create account
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
