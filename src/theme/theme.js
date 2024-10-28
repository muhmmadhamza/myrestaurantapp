import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6765EE', 
    },
    secondary: {
      main: '#ffa500', 
    },
    background: {
      default: '#F8F8F8', 
      paper: '#ffffff', 
      white: '#fff', 
      btncolor: '#6765EE', 
    },
    text: {
      primary: '#333', // Dark text for headings, matches the restaurant names
      secondary: '#676767', // Lighter text, such as for delivery times and ratings
      tertiary: '#fff', // White text color for icons on colored backgrounds
    },
  },
  typography: {
    fontFamily: `-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
  },
});

export default theme;
