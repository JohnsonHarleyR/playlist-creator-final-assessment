import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './theme/styles/css/theme.css';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme} from "@mui/material/styles";
import Palette from './theme/constants/palette';

function App() {

  //#region Theme
  const theme = createTheme({
    palette: {...Palette},
    typography: {
      fontFamily: [
        'Rajdhani',
        'Rubik',
        'sans-serif',
      ].join(','),
    },
  });
  //#endregion


  return (
<ThemeProvider theme={theme}>
<Container
        className="app-container"
        maxWidth={false}
        maxHeight={false}
        width={'100%'}
        display={'flex'}
        sx={{
          'background-color': Palette.primary.main,
          color: '#fff',
          border: `5px solid ${Palette.accent.main}`,
        }}
      >
        Ummm
      </Container>
</ThemeProvider>


  );
}

export default App;
