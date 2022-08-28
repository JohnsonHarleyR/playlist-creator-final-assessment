import { Input } from "@mui/material";
import { useEffect, useRef } from "react";

const TextInput = ({
  placeholder,
  setValue,
  inputRef,
}) => {

  const handleChange = (e) => {
    console.log(inputRef.current.value);
    setValue(e.target.value);
  }

  return(
    <Input 
      ref={inputRef}
      className="text-input"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );

}

export default TextInput;