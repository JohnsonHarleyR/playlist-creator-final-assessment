import { connect } from 'react-redux';
import AreaBox from '../../common/components/AreaBox';

const PlaylistCreator = ({
  songs,
  playList,
}) => {


  return (
    <div className='creator-container'>
      <div className='title-div'>
        <h1>Playlist Creator</h1>
      </div>
      <div className='area-div'>
        <AreaBox>
          Ummm
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