import { AllSongs } from "../resource/music"

export const sortSongs = (songs) => {
  songs.sort(function(a,b) {
    let songA = a.title.toUpperCase();
    let songB = b.title.toUpperCase();
    return songA < songB
      ? -1
      : songA > songB
        ? 1
        : 0;
  });
}

export const getAllSongs = () => {
  let copy = [...AllSongs];
  sortSongs(copy);
  
  return copy;
}