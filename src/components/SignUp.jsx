import React, { useState } from 'react'
import users from "./user"

function SignUp() {

  const [user, setUser] = useState(users);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Pwd, setPwd] = useState("");

  function submit(e) {
    e.preventDefault();

    const person = {
      name: Name,
      email: Email,
      pwd: Pwd
    }

    setUser([...user, person])
    console.log(user)

    setName("")
    setEmail("")
    setPwd("")
  }

  return (
    <div className='container m-5'>
      <form onSubmit={submit}>
        <div className="m-auto" style={{ width: "18rem" }}>

          <div className="mb-3" >
            <label
              htmlFor="exampleInputName" className="form-label">Name</label>
            <input
              type="text"
              value={Name}
              className="form-control" aria-describedby="emailHelp" onChange={(e) => { setName(e.target.value) }} />
          </div>

          <div className="mb-3" >
            <label
              htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input
              type="text"
              value={Email}
              className="form-control" aria-describedby="emailHelp" onChange={(e) => { setEmail(e.target.value) }} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div className="mb-3">
            <label
              htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input
              type="password"
              value={Pwd}
              className="form-control" onChange={(e) => { setPwd(e.target.value) }} />
          </div>

          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button
            type="submit"
            className="btn btn-primary">SignUp</button>
        </div>
      </form>
      {
        user.map((items) => {
          return (
            <h1>{items.name}</h1>
          )
        })
      }
    </div >
  )
}

export default SignUp