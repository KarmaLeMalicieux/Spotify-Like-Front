import React, { useContext, useState } from 'react'
import { Context } from '../contexts/Contexte';
import { useNavigate } from 'react-router-dom';

function Login() {


  const navigate = useNavigate()
  const [userLogined, setuserLogined] = useState({
    email: "",
    password: "",
  })

  const { loginFunction } = useContext(Context)

  return (
    <div id='createPlaylistDiv' onSubmit={(e) => {
      e.preventDefault();
      loginFunction(userLogined)
      navigate("/")

    }}>
      <h1> Login </h1>

      <form>
        <div className="form-group">
          <label> Email </label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your email ..."
            onChange={(e) =>
              setuserLogined({ ...userLogined, email: e.target.value })
            } required />
        </div>
        <div className="form-group">
          <label> Password </label>
          <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Your Password here ..."
            onChange={(e) =>
              setuserLogined({ ...userLogined, password: e.target.value })
            } required />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>

      </form>

    </div>
  )
}

export default Login
