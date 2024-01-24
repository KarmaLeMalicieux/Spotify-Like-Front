import React, { useState, useEffect } from 'react'

function Home() {
  const [allSongs, setAllSongs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1234/songs/all")
      .then((res) => res.json())
      .then((data) => {
        setAllSongs(data);
      });
  }, []);
  return (
    <div id="AddSongToPlauylist_Main_Div">
      <h1> Your Musics  </h1>

      <br />
      <ul className="list-group" id='songlist'>
        {allSongs.map((song) => (
          <li key={song._id} className="list-group-item liBigBg">

            {song.title}

          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
