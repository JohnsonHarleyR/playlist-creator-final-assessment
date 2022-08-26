import { AllSongs } from "../resource/music"

export const getAllSongs = () => {
  let copy = [...AllSongs];
  copy.sort(function(a,b) {
    let songA = a.title.toUpperCase();
    let songB = b.title.toUpperCase();
    return songA < songB
      ? -1
      : songA > songB
        ? 1
        : 0;
  });

  let songs = [];
  copy.forEach((s, i) => {
    songs.push({id: `s${i + 1}`, ...s});
  });
  
  return songs;
}