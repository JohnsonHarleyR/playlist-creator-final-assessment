import List from '@mui/material/List';
import { useEffect, useState } from 'react';
import MyListItem from './MyListItem';

const ListBox = ({
  title,
  items,
  itemPropName,
  selectedId,
  setSelected,
  leftOrRight,
}) => {

  const [listItems, setListItems] = useState([]);
  // const [selectedIndex, setSelectedIndex] = useState(null);

  // useEffect(() => {
  //   if (selectedId !== undefined) {
  //     if (selectedId === null && selectedIndex !== null) {
  //       setSelectedIndex(null);
  //     } else {
  //       for (let i = 0; i < items.length; i++) {
  //         if (selectedId === items[i].id) {
  //           if (selectedIndex !== i) {
  //             setSelectedIndex(i);
  //           }
  //           break;
  //         }
  //       }
  //     }
  //   }
  // }, [selectedId]);

  // const selectItem = (index) => {
  //   let id = items[index].id;
  //   setSelected(id);
  // }

  useEffect(() => {
    if (items) {
      let newItems = [];
      items.forEach((item, i) => {
        newItems.push(
          <MyListItem 
            key={`${title}-item-${i}`}
            index={i}
            itemText={item[itemPropName]}
            itemId={item.id}
            setSelected={setSelected}
            selectedId={selectedId}
        />
        );
      });
      setListItems(newItems);
    }
  }, [items, selectedId]);

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