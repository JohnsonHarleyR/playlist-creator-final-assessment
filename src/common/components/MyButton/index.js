import { Button } from "@mui/material"

const MyButton = ({
  text,
  handleClick,
}) => {


  return(
    <Button
      variant="contained"
      className="my-button"
      onClick={handleClick}
    >
      {text}
    </Button>
  );

}

export default MyButton;