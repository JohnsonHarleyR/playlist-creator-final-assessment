import Box from '@mui/material/Box';

const ListBox = ({
  title,
  items,
  setSelected,
  leftOrRight,
}) => {

  return (
    <div className='creator-container inside'>
      <div className={`area-div inside ${leftOrRight}`}>
      <div className={`title-div inside ${leftOrRight}`}>
        <h3>{title}</h3>
      </div>
        <Box className='list-box'>
          Ummm
        </Box>
      </div>

    </div>
  );
}


export default ListBox;