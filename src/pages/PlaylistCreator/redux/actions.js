import TYPES from './types';

const selectItem = (index, listType) => {
  return {
    type: TYPES.SELECT_ITEM,
    selectedIndex: index,
    selectedList: listType,
  }
}

const deselect = () => {
  return {
    type: TYPES.SELECT_ITEM,
    selectedIndex: null,
    selectedList: null,
  }
}

const updatePlayList = (playList) => {
  return {
    type: TYPES.UPDATE_PLAY_LIST,
    payload: playList,
  }
}

const updateSongList = (songList) => {
  return {
    type: TYPES.UPDATE_SONG_LIST,
    payload: songList,
  }
}


export default {
  selectItem,
  deselect,
  updateSongList,
  updatePlayList,
};