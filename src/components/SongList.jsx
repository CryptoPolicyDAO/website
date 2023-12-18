import React, { useState, useRef } from "react";

const SongList = ({ songs }) => {
  const [audioPlayer, setAudioPlayer] = useState(null);
  const audioRef = useRef(null);

  const playSong = (songUrl) => {
    const audio = new Audio(songUrl);
    setAudioPlayer(audio);
    audio.play();
  };

  const pauseSong = () => {
    if (audioPlayer) {
      audioPlayer.pause();
    }
  };

  const stopSong = () => {
    if (audioPlayer) {
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
    }
  };

  return (
    <div>
      <h2>Choose a Song</h2>
      <ul>
        {songs.map((song, index) => (
          <li key={index}>
            <button onClick={() => playSong(song)}>Play {song}</button>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={pauseSong}>Pause</button>
        <button onClick={stopSong}>Stop</button>
      </div>
      <audio ref={audioRef} />
    </div>
  );
};

export default SongList;
