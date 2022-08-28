import { connect } from 'react-redux';
import AreaBox from '../../common/components/AreaBox';
import ListBox from '../../common/components/ListBox';
import MyButton from '../../common/components/MyButton';
import { MusicThunks } from './redux';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { MusicList } from '../../theme/constants/music';
import AddSong from './AddSong';

const PlaylistCreator = ({
  selectedIndex,
  selectedList,
  songs,
  playList,
  selectItemByIndex,
  addItemToPlayList,
  removeItemFromList,
  addToSongList,
}) => {


  return (
    <div className='creator-container'>
      <div className='title-div'>
        <h1>Playlist Creator</h1>
      </div>
      <div className='area-div creator'>
        <AreaBox>
          <div className='left-side'>
            <ListBox 
              listType={MusicList.SONG_LIST}
              itemPropName='title'
              items={songs}
              selectedIndex={selectedIndex}
              selectedList={selectedList}
              setSelected={selectItemByIndex}
            />
            <AddSong 
              addSong={addToSongList}
            />
          </div>
          <div className='middle'>
            <div className='buttons'>
              <MyButton
                text={<><span className='add-text'>Add to list</span><ArrowRightAltIcon /></>}
                handleClick={() => {addItemToPlayList(selectedIndex, selectedList)}}
              >
              </MyButton>
              <MyButton
                text="Remove"
                handleClick={() => {removeItemFromList(selectedIndex, selectedList)}}
              >
              </MyButton>
            </div>
          </div>
          <div className='right-side'>
          <ListBox 
              listType={MusicList.PLAY_LIST}
              selectedList={selectedList}
              itemPropName='title'
              items={playList}
              selectedIndex={selectedIndex}
              setSelected={selectItemByIndex}
            />
          </div>
        </AreaBox>
      </div>
    </div>
  );
}

const mapStateToProps = ({music}) => {
  return {
    selectedIndex: music.selectedIndex,
    selectedList: music.selectedList,
    songs: music.songList,
    playList: music.playList,
  };
}

const mapDispatchToProps = {
  selectItemByIndex: MusicThunks.selectItemByIndex,
  addItemToPlayList: MusicThunks.addItemToPlayList,
  removeItemFromList: MusicThunks.removeItemFromList,
  addToSongList: MusicThunks.addItemToSongList,
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistCreator);