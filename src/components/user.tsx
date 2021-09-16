import React, { useEffect, useState } from 'react'

interface UserData {
    name: string;
    age: number;
    gender: string;
    admin: boolean;
}

function User() {

  const [user,setUser] = useState<UserData | undefined>(undefined)

  // api mock - hard coding the data that can come from server

  const onChange = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
  }

  useEffect(() => {
    const fetchUser = () => {
        const userData = {
            name: "naaz",
            age: 20,
            gender: "female",
            admin: true
        }

    setUser(userData)
  }
  fetchUser()
  })

  return (
    <div>
        <h1>{user && user.name}</h1>
        <p>{user && user.age}</p>
        <button></button>
    </div>
  )
}

export default User
