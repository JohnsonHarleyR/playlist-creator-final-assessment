import { MusicList } from '../../../theme/constants/music';
import { sortSongs } from '../../../common/helpers/song-helper';
import actions from './actions';

export const selectItemByIndex = (index, listType) => async(
  dispatch
) => {
    dispatch(actions.selectItem(index, listType));
}

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

export const removeItemFromList = (index, listType) => async(
  dispatch,
  getState,
) => {
  let state = getState();
  let allSongs = [...state.music.songList];
  let playList = [...state.music.playList];

  if (listType === MusicList.PLAY_LIST) {
    let song = playList[index];

    if (song) {
      allSongs.push(song);
      sortSongs(allSongs);
      playList.splice(index, 1);
      dispatch(actions.deselect());
      dispatch(actions.updatePlayList(playList));
      dispatch(actions.updateSongList(allSongs));
    }
  }

}

export default {
  selectItemByIndex,
  addItemToPlayList,
  removeItemFromList,
};