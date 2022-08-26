import TYPES from './types';
import { getAllSongs } from "../../../common/helpers/song-helper";

const initialState = {
  songList: getAllSongs(),
  playList: [],
};

const musicReducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default musicReducer;