import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios'


const UserListe = () => {
    const [liste, setListe] = useState()
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res=>setListe(res.data))
      
  
      
    }, [])
    return (
        <div>
        <ul>{liste && true ? liste.map(user => <li>{user.name}</li>) : <></> }</ul>
        </div>
    )
}

export default UserListe
