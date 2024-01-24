import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function AddSongToPlaylist() {

  const { playlistId } = useParams();

  const [allSongs, setAllSongs] = useState([]);



  const handleClick = async (id) => {
    console.log(songId)
    const response = await axios.post(`http://localhost:1234/playlists/${playlistId}/add-song/${id}`)
    console.log(response.message);
    console.log("song added successfully to playlist")
  }

  useEffect(() => {
    fetch("http://localhost:1234/songs/all")
      .then((res) => res.json())
      .then((data) => {
        setAllSongs(data);
      });
  }, []);

  return (
    <div id='AddSongToPlauylist_Main_Div'>
      <h1 > Select wich song you want to add to this playlist </h1>
      <hr />
      <div>
        <br />
        <div className="list-group" id='songListWhenAdding'>

          {allSongs.map((song) => (
            <button type="button" className="btn btn-secondary" key={song._id} onClick={() => {
              handleClick(song._id);
            }}> {song.title} </button>
          ))}

        </div>
      </div>
    </div>
  )
}

export default AddSongToPlaylist
