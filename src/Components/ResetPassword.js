import { useState } from "react";

export default function Reset() {
  const [email, setEmail] = useState("");

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