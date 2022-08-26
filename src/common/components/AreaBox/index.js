import Box from '@mui/material/Box';

const AreaBox = ({children}) => {

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