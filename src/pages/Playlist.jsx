import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function Playlist() {

  const [playlistTitle, setPlaylistTitle] = useState("All songs");
  const [playlistDesc, setPlaylistDesc] = useState("")
  const [songs, setSongs] = useState([]);
  const { playlistId } = useParams();

  useEffect(() => {
    fetchPlaylist(playlistId)
  }, [playlistId])

  const fetchPlaylist = (playlistId) => {
    fetch(`http://localhost:1234/playlists/${playlistId}`)
      .then((res) => res.json())
      .then((data) => {
        setPlaylistTitle(data.title);
        setPlaylistDesc(data.description);
        setSongs(data.songs);
      });
  };

  const handleDeleteSongFromPlaylist = (songId) => {
    fetch(
      `http://localhost:1234/playlists/${playlistId}/delete-song/${songId}`,
      {
        method: "PUT",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        fetchPlaylist(playlistId);
      });
  };

  const handleDeletePlaylistFromPlaylists = async (playlistId) => {
    const response = await axios.delete(`http://localhost:1234/playlists/${playlistId}/delete`)
    window.location.reload();
  }
  return (
    <div>
      <h1 id="playlist-header">{playlistTitle}
        <div id="divButtonPlaylist">
          <button type="button" className="btn btn-secondary" id='editCssButton'>  <Link className="nav-link text-white" to={'add-song-to-playlist'}> + </Link> </button>
          <button type="button" className="btn btn-secondary" id='editCssButton' onClick={() => handleDeletePlaylistFromPlaylists(playlistId)}>  <Link className="nav-link text-white" to={'/'}> - </Link> </button>
        </div>
      </h1>

      <hr />
      <p id='description-playlist'> {playlistDesc} </p>
      <hr />
      <ul className="list-group" id='showSongList'>
        {songs.map((song) => (
          <li key={song._id} className="list-group-item" >
            {song.title}
            <button
              onClick={() => {
                handleDeleteSongFromPlaylist(song._id);
              }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Playlist
