import { cyan, deepOrange } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const preTheme = createTheme({
  palette: {
    primary: cyan,
    secondary: deepOrange,
  },
});

const theme = responsiveFontSizes(preTheme);

export default theme;
