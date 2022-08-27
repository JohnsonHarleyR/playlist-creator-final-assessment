import React from 'react';
import './theme/styles/css/theme.css';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme} from "@mui/material/styles";
import Palette from './theme/constants/palette';
import PlaylistCreator from './pages/PlaylistCreator';

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
        width={'100%'}
        display={'flex'}
        sx={{
          backgroundColor: Palette.primary.main,
          color: '#fff',
          border: `5px solid ${Palette.secondary.main}`,
        }}
      >
        <PlaylistCreator />
      </Container>
</ThemeProvider>


  );
}

export default App;
