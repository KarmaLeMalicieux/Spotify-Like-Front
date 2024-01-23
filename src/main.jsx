import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./bootstrap.min.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ContextProvider } from "./contexts/Contexte.jsx";

import Playlist from "./pages/Playlist.jsx";
import Home from "./pages/Home.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import CreatePlaylist from "./pages/CreatePlaylist.jsx";
import AddSongToPlaylist from "./pages/AddSongToPlaylist.jsx";
import ImportSong from "./pages/ImportSong.jsx";
import Login from "./pages/Login.jsx";
import Disconnect from "./pages/Disconnect.jsx";
import Register from "./pages/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/import-song",
        element: <ImportSong />,
      },
      {
        path: "/playlist/:playlistId",
        element: <Playlist />,

      },
      {
        path: "/playlist/:playlistId/add-song-to-playlist",
        element: <AddSongToPlaylist />
      },
      {
        path: "/create-playlist",
        element: <CreatePlaylist />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/disconnect',
        element: <Disconnect />,
      }
    ]
  }]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
