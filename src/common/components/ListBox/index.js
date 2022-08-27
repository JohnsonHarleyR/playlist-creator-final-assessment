import List from '@mui/material/List';
import { useEffect, useState } from 'react';
import { MusicList } from '../../../theme/constants/music';
import MyListItem from './MyListItem';

const ListBox = ({
  listType,
  selectedList,
  items,
  itemPropName,
  selectedIndex,
  setSelected,
}) => {

  const [title, setTitle] = useState();
  const [position, setPosition] = useState();
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    if (listType) {
      switch(listType) {
        default:
          setTitle('');
          setPosition('center');
          break;
        case MusicList.SONG_LIST:
          setTitle('song list');
          setPosition('left');
          break;
        case MusicList.PLAY_LIST:
          setTitle('play list');
          setPosition('right');
          break;
      }
    }
  }, [listType]);

  useEffect(() => {
    if (items) {
      let newItems = [];
      items.forEach((item, i) => {
        newItems.push(
          <MyListItem 
            key={`${title}-item-${i}`}
            index={i}
            itemText={item[itemPropName]}
            listType={listType}
            setSelected={setSelected}
            selectedIndex={selectedIndex}
            selectedList={selectedList}
        />
        );
      });
      setListItems(newItems);
    }
  }, [items, selectedIndex, listType, selectedList]);

  return (
    <div className='creator-container inside'>
      <div className={`area-div inside ${position}`}>
      <div className={`title-div inside ${position}`}>
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