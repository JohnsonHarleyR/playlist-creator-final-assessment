import { connect } from 'react-redux';
import AreaBox from '../../common/components/AreaBox';
import ListBox from '../../common/components/ListBox';

const PlaylistCreator = ({
  songs,
  playList,
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
              leftOrRight={'right'}
            />
          </div>
          <div className='middle'></div>
          <div className='right-side'>
          <ListBox 
              title="play list"
              leftOrRight={'left'}
            />
          </div>
        </AreaBox>
      </div>

    </div>
  );
}

const mapStateToProps = ({music}) => {
  return {
    songs: music.songList,
    playList: music.playList,
  };
}

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistCreator);