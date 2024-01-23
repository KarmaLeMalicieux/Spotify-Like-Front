import React, { useContext } from 'react'
import { redirect, useNavigate } from 'react-router-dom'
import { Context } from '../contexts/Contexte'

function Disconnect() {

  const navigate = useNavigate()
  const { logoutFunction } = useContext(Context)

  return (
    <div id='error-page'>
      <h1 id='h1-div'>
        Are you sure you want to disconnect ?
      </h1>
      <div className="btn-group" role="group" aria-label="Basic outlined example" id='button-div'>
        <button type="button" className="btn btn-outline-primary" onClick={() => {
          logoutFunction()
          navigate("/")
        }
        }> Yes </button>
        <button type="button" className="btn btn-outline-primary" onClick={() => navigate("/")}> No </button>
      </div>
    </div>
  )
}

export default Disconnect
