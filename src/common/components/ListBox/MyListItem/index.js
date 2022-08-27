import ListItem from '@mui/material/ListItem';
import { useEffect, useState } from 'react';

const MyListItem = ({
  index,
  selectedId,
  itemText,
  itemId,
  setSelected,
}) => {

  const [isEven, setIsEven] = useState();
  const [isSelected, setIsSelected] = useState();
  const [className, setClassName] = useState('list-item');

  useEffect(() => {
    let selected = itemId === selectedId;
    console.log(`selected? ${itemId} = ${selectedId}? ${selected}`)
    setIsSelected(selected);
  },[selectedId]);

  useEffect(() => {
    if (index !== undefined) {
      setIsEven((index + 1) % 2 === 0);
    }
  }, [index]);

  useEffect(() => {
    if (isSelected && isEven) {
      setClassName('list-item selected-even');
    } else if (isSelected) {
      setClassName('list-item selected');
    } else if (isEven) {
      setClassName('list-item even');
    } else {
      setClassName('list-item');
    }
  },[isEven, isSelected]);

  const handleClick = () => {
    setSelected(itemId);
  }

  return (
    <ListItem button className={className} onClick={handleClick}>
      {itemText}
    </ListItem>
  );
}

export default MyListItem;