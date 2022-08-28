import { useState } from "react"
import TextInput from "../../../common/components/TextInput";
import MyButton from "../../../common/components/MyButton";
import { song } from "../../../common/resource/song-model";

const AddSong = ({
  addSong,
}) => {

  const [title, setTitle] = useState('');

  const createSong = () => {
    return song(title, null, null, null);
  }

  const handleClick = () => {
    if (title) {
      addSong(createSong());
      setTitle('');
    }
  }

  return(
    <div className="add-song">
      <TextInput 
        placeholder={'Song title...'}
        value={title}
        setValue={setTitle}
      />
      <MyButton 
        text="Add"
        handleClick={handleClick}
      />
    </div>
  );
}

export default AddSong;