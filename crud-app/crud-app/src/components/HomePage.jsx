import { createTheme, responsiveFontSizes} from '@mui/material/styles';
import { Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const HomePage = () =>{
    return(
        <ThemeProvider theme={theme}>
        <Typography variant="h5"> Hello Admin </Typography>

      </ThemeProvider>
    )
}

export default HomePage;