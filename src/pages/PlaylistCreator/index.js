import { connect } from 'react-redux';
import AreaBox from '../../common/components/AreaBox';
import ListBox from '../../common/components/ListBox';
import MyButton from '../../common/components/MyButton';
import { MusicThunks } from './redux';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const PlaylistCreator = ({
  selectedId,
  songs,
  playList,
  selectItemById,
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
              title="song list"
              leftOrRight='right'
              itemPropName='title'
              items={songs}
              selectedId={selectedId}
              setSelected={selectItemById}
            />
          </div>
          <div className='middle'>
            <div className='buttons'>
              <MyButton
                text={<><span className='add-text'>Add to list</span><ArrowRightAltIcon /></>}
              >
              </MyButton>
              <MyButton
                text="Remove"
              >
              </MyButton>
            </div>
          </div>
          <div className='right-side'>
          <ListBox 
              title="play list"
              leftOrRight='left'
              itemPropName='title'
              items={playList}
              selectedId={selectedId}
              setSelected={selectItemById}
            />
          </div>
        </AreaBox>
      </div>

    </div>
  );
}

const mapStateToProps = ({music}) => {
  return {
    selectedId: music.selectedId,
    songs: music.songList,
    playList: music.playList,
  };
}

const mapDispatchToProps = {
  selectItemById: MusicThunks.selectItemById,
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistCreator);