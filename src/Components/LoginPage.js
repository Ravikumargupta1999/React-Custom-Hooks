import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";
import '../../src/index.css'

export default function Login() {
  // const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {email,setEmail}= useLocalStorage();

  // useEffect(() =>{
  //   let email = localStorage.getItem("email");

  //   if(email){
  //     setEmail(email);
  //   }
  // },[]);


  // useEffect(() =>{
  //   localStorage.setItem("email",email);
  // },[email]);

  


 
  return (
    <>
      <h1>Login to the Portal!</h1>
      <input placeholder="Enter Email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input placeholder="Enter Password"
             type="password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button> Login </button>
      <br />
    </>
  )
}