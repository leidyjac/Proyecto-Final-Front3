import React from 'react'
import Card from '../Components/Card'
import { useState, useEffect } from 'react'
import axios from 'axios'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
     
  const[dentistList, setDentistList] = useState([])

  useEffect(() => {

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then (res => {
       setDentistList(res.data)

    })
    
  }, [])
  

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {dentistList.map((dentist) => (
           <Card 
           key ={dentist.id} 
           dentist = {dentist}
           id = {dentist.id}
           />

        ))}
        
      </div>
    </main>
  )
}

export default Home