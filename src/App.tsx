import "./App.css";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import { ThemeProvider, Typography, createTheme } from "@material-ui/core";

export interface MyTheme {
  typography: {
    fontFamily?: string;
    fontSize?: number;
  };
  breakpoints: {
    values: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
  };
  palette?: {
    primary?: {
      main: string;
    };
    secondary?: {
      main: string;
    };
  };
}

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    error: {
      main: "#f44336",
    },
    background: {
      default: "#fafafa",
      paper: "#fff",
    },
    text: {
      primary: "#333",
      secondary: "#555",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
        padding: "8px 16px",
        margin: "8px",
      },
    },
    MuiCssBaseline: {
      "@global": {
        body: {
          padding: "16px",
          margin: "16px",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Body />
    </ThemeProvider>
  );
}

export default App;
