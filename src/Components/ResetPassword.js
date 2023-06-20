// import { useEffect, useState } from "react";

import useLocalStorage from "./useLocalStorage"

export default function Reset() {
  // const [email, setEmail] = useState("");

  // useEffect(() =>{
  //   let email = localStorage.getItem("email");

  //   if(email){
  //     setEmail(email);
  //   }
  // },[]);


  // useEffect(() =>{
  //   localStorage.setItem("email",email);
  // },[email])


  const {email,setEmail} = useLocalStorage();

  return (
    <>
      <h1>Reset Password for</h1>

      <input  placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <button> Continue </button>
      <br />
    </>
  )
}