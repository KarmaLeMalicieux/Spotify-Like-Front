import axios from "axios";
import { createContext, useState } from "react";

export const Context = createContext()
export const ContextProvider = ({ children }) => {

  const [token, setToken] = useState(localStorage.getItem("token"))

  const logoutFunction = () => {
    localStorage.clear()
    setToken(localStorage.getItem("token"))
  }

  const loginFunction = async (userLogined) => {
    const response = await axios.post("http://localhost:1234/auth/login", userLogined)

    if (response.data.token) {
      localStorage.setItem('token', response.data.token)
      setToken(response.data.token)
      console.log('[SERVEUR] 👍 ', response.data.message)
    }
    else {
      console.log('[SERVEUR] 👎 ', response.data.message)
    }
  }

  const registerUser = async (user) => {
    const response = await axios.post("http://localhost:1234/auth/register", user)

    if (response.data.token) {
      localStorage.setItem('token', response.data.token)
      setToken(response.data.token)
      console.log('[SERVEUR] 👍 ', response.data.message)
    }
    else {
      console.log('[SERVEUR] 👎 ', response.data.message)
    }
  }

  return (

    <Context.Provider value={{ logoutFunction, loginFunction, token, registerUser }}>
      {children}
    </Context.Provider>
  );

}