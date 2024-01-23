import React, { useContext, useState } from 'react'
import { Context } from '../contexts/Contexte';
import { useNavigate } from 'react-router-dom';

function Register() {

  const navigate = useNavigate()
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  })

  const { registerUser, loginFunction } = useContext(Context)
  return (
    <div id='createPlaylistDiv' onSubmit={async (e) => {
      e.preventDefault();
      await registerUser(newUser)
      console.log(newUser)
      navigate("/")

    }}>
      <form>
        <div className="form-group">
          <label> Name </label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your name ..."
            onChange={(e) =>
              setNewUser({ ...newUser, name: e.target.value })
            } required />
        </div>
        <div className="form-group">
          <label> Email </label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your email ..."
            onChange={(e) =>
              setNewUser({ ...newUser, email: e.target.value })
            } required />
        </div>
        <div className="form-group">
          <label> Password </label>
          <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Your Password here ..."
            onChange={(e) =>
              setNewUser({ ...newUser, password: e.target.value })
            } required />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>

    </div>
  )
}

export default Register
