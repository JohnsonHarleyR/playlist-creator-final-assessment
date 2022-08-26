import { configureStore } from '@reduxjs/toolkit';
import { MusicReducer as music } from '../pages/PlaylistCreator/redux';

export const store = configureStore({
  reducer: {
    music,
  },
});
