import Box from '@mui/material/Box';
import { useMediaQuery } from 'react-responsive'

const AreaBox = ({children}) => {

  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
  const isBigScreen = useMediaQuery({ minWidth: 1824 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isPortrait = useMediaQuery({ orientation: 'portrait' });

  // TODO make responsive (perhaps inside css file instead)

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      className="area-box"
      maxWidth="lg"
    >
      {children}
    </Box>
  );

}

export default AreaBox;