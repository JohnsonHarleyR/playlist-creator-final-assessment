import TYPES from './types';
import { getAllSongs } from "../../../common/helpers/song-helper";

const initialState = {
  selectedIndex: null,
  selectedList: null,
  songList: getAllSongs(),
  playList: [],
};

const musicReducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
    case TYPES.SELECT_ITEM:
      return {
        ...state,
        selectedIndex: action.selectedIndex,
        selectedList: action.selectedList,
      }
    case TYPES.DESELECT:
      return {
        ...state,
        selectedIndex: action.selectedIndex,
        selectedList: action.selectedList,
      }
    case TYPES.UPDATE_SONG_LIST:
      return {
        ...state,
        songList: action.payload,
      }
    case TYPES.UPDATE_PLAY_LIST:
      return {
        ...state,
        playList: action.payload,
      }
  }
}

export default musicReducer;