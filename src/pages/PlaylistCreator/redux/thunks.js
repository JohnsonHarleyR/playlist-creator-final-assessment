import { MusicList } from '../../../theme/constants/music';
import actions from './actions';

export const selectItemByIndex = (index, listType) => async(
  dispatch
) => {
    dispatch(actions.selectItem(index, listType));
}

// should keep item on song list, but only 
//add to play list if it doesn't exist there
export const addItemToPlayList = (index, listType) => async(
  dispatch,
  getState,
) => {
  if (listType !== MusicList.SONG_LIST) {
    return;
  }

  let state = getState();
  let allSongs = [...state.music.songList];
  let playList = [...state.music.playList];
  let song = allSongs[index];

  if (song) {
    playList.push(song);
    allSongs.splice(index, 1);
    dispatch(actions.deselect());
    dispatch(actions.updatePlayList(playList));
    dispatch(actions.updateSongList(allSongs));
  }
}

export default {
  selectItemByIndex,
  addItemToPlayList,
};