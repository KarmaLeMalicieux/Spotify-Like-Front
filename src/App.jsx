import { useContext, useEffect, useState } from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";
import { Context } from "./contexts/Contexte";
import { jwtDecode } from "jwt-decode";

function App() {
  const [playlists, setPlaylists] = useState([]);
  const { token } = useContext(Context)

  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://localhost:1234/playlists/all")
        .then((res) => res.json())
        .then((data) => {
          setPlaylists(data);
        })
    }

    fetchData()
      .catch(console.error)
  }, []);

  return (
    <main>
      <div className="sidebar d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <h1 className="fs-4" id="title">Spotify-like <br /> <br />
            {token && <span id="welcome-message">{jwtDecode(token).user.name}</span>}
          </h1>
        </a>
        <hr />
        <h6 className="subtitle"> Playlist </h6>
        <ul className="nav nav-pills flex-column mb-auto">
          {playlists.map((playlist) => (
            <li key={playlist._id} >
              <Link to={`playlist/${playlist._id}`} className="nav-link text-white">
                {playlist.title}
              </Link>
            </li>
          ))}
        </ul>

        {token &&
          <>
            <hr />
            <h6 className="subtitle"> Options </h6>
            <ul className="nav nav-pills flex-column mb-auto" >
              <li className="nav-item ">
                <Link className="nav-link text-white" to={'create-playlist'}> Create a new Playlist </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to={'import-song'}> Import a Music </Link>
              </li>
            </ul>
          </>
        }

        <hr />
        <h6 className="subtitle"> Account </h6>
        <ul className="nav nav-pills flex-column mb-auto" >
          {!token &&
            <>
              <li className="nav-item ">
                <Link className="nav-link text-white" to={'/login'}> Login </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link text-white" to={'/register'}> Register </Link>
              </li>
            </>
          }
          {token &&
            <>
              <li className="nav-item">
                <Link className="nav-link text-white" to={''}> Settings </Link>
              </li>

              <li className="nav-item ">
                <Link className="nav-link text-white" to={'/disconnect'}> Disconnect </Link>
              </li>
            </>
          }
        </ul>
      </div>

      <div className="main-content">
        <Outlet />
      </div>
    </main>
  );
}

export default App;
