import React, { useContext, useState } from 'react'
import "../createPlaylist.css"
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Context } from '../contexts/Contexte';


function CreatePlaylist() {

  const { token } = useContext(Context)
  const navigate = useNavigate();

  const [newPlaylist, setNewPlaylist] = useState({
    title: "",
    description: "",
  })

  const CreateNewPlaylist = async () => {
    try {
      const response = await axios.post(
        `http://localhost:1234/playlists/create-playlist`, newPlaylist
        , { headers: { Authorization: `Bearer ${token}` } }
      );
      navigate("/")
      window.location.reload()

    } catch (error) {
      console.error("Error the creation was unsuccessful", error);
    }
  }

  if (!token) {
    return (
      <div >
        <h1 id='error-page'> Access dinied 😈 , petit filou </h1>
      </div>
    )
  }
  return (
    <div id='createPlaylistDiv' onSubmit={(e) => {
      e.preventDefault();
      CreateNewPlaylist()
    }}>
      <form>
        <div className="form-group">
          <label>Playlist Name </label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Insert title here"
            onChange={(e) =>
              setNewPlaylist({ ...newPlaylist, title: e.target.value })
            } required />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Insert the description"
            onChange={(e) =>
              setNewPlaylist({ ...newPlaylist, description: e.target.value })
            } required />
        </div>
        <button type="submit" className="btn btn-primary">Create</button>
      </form>

    </div>
  )
}

export default CreatePlaylist
