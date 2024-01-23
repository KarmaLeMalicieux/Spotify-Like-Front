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
    <div>
      <h1> Your Musics  </h1>
      <hr />
      <br />
      <ul className="list-group">
        {allSongs.map((song) => (
          <li key={song._id} className="list-group-item">
            <div className="song">
              <span className="songName">{song.title}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
