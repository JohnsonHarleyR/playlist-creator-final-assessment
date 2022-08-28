import { Input } from "@mui/material";
import { useEffect, useRef } from "react";

const TextInput = ({
  placeholder,
  value,
  setValue,
}) => {

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return(
    <Input 
      value={value}
      className="text-input"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );

}

export default TextInput;