import TYPES from './types';
import { getAllSongs } from "../../../common/helpers/song-helper";

const initialState = {
  selectedId: null,
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
        selectedId: action.payload,
      }
  }
}

export default musicReducer;