import "./App.css"; // Import your global CSS styles (if any)
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
    // Optional palette for colors
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
      main: "#1976d2", // Blue
    },
    secondary: {
      main: "#dc004e", // Pink
    },
    error: {
      main: "#f44336", // Red
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
        textTransform: "none", // Removes uppercase transformation for buttons
        padding: "8px 16px", // Default padding for buttons
        margin: "8px", // Default margin for buttons
      },
    },
    MuiCssBaseline: {
      "@global": {
        body: {
          padding: "16px", // Default padding for the body
          margin: "16px", // Default margin for the body
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar /> {/* Pass theme as a prop */}
      <Body />
    </ThemeProvider>
  );
}

export default App;
