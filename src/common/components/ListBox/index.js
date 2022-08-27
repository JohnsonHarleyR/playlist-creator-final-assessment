import List from '@mui/material/List';
import { useEffect, useState } from 'react';
import MyListItem from './MyListItem';

const ListBox = ({
  title,
  items,
  itemPropName,
  setSelected,
  leftOrRight,
}) => {

  const [listItems, setListItems] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    if (items) {
      let newItems = [];
      items.forEach((item, i) => {
        newItems.push(
          <MyListItem 
            key={`${title}-item-${i}`}
            index={i}
            selectedIndex={selectedIndex}
            itemText={item[itemPropName]}
            itemId={item.id}
            setSelected={setSelected}
        />
        );
      });
      setListItems(newItems);
    }
  }, [items]);

  return (
    <div className='creator-container inside'>
      <div className={`area-div inside ${leftOrRight}`}>
      <div className={`title-div inside ${leftOrRight}`}>
        <h3>{title}</h3>
      </div>
        <List className='list-box'>
          {listItems}
        </List>
      </div>

    </div>
  );
}


export default ListBox;