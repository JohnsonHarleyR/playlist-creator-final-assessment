import ListItem from '@mui/material/ListItem';
import { useEffect, useState } from 'react';

const MyListItem = ({
  index,
  selectedIndex,
  itemText,
  itemId,
  setSelected,
}) => {

  const [isEven, setIsEven] = useState();
  const [isSelected, setIsSelected] = useState();
  const [className, setClassName] = useState('list-item');

  useEffect(() => {
    setIsSelected(index === selectedIndex);
  },[selectedIndex]);

  useEffect(() => {
    if (index !== undefined) {
      setIsEven((index + 1) % 2 === 0);
    }
  }, [index]);

  useEffect(() => {
    if (isSelected) {
      setClassName('list-item selected');
    } else if (isEven) {
      setClassName('list-item even');
    } else {
      setClassName('list-item');
    }
  },[isEven, isSelected]);

  useEffect(() => {
    console.log(`class: `, className);
    console.log('index: ', index);
    console.log('isEven: ', isEven);
  }, [className]);

  return (
    <ListItem button className={className}>
      {itemText}
    </ListItem>
  );
}

export default MyListItem;