import { useRef, useState } from "react"
import TextInput from "../../../common/components/TextInput";
import MyButton from "../../../common/components/MyButton";
import { song } from "../../../common/resource/song-model";

const AddSong = ({
  addSong,
}) => {

  const inputRef = useRef();
  const [title, setTitle] = useState('');

  const createSong = () => {
    return song(title, null, null, null);
  }

  const handleClick = () => {
    if (title) {
      addSong(createSong());
      setTitle('');
      console.log(inputRef.current.value);
      inputRef.current.value = '';
    }
  }

  return(
    <div className="add-song">
      <TextInput 
        placeholder={'Song title...'}
        setValue={setTitle}
        inputRef={inputRef}
      />
      <MyButton 
        text="Add"
        handleClick={handleClick}
      />
    </div>
  );
}

export default AddSong;