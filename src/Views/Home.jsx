import React from 'react'
import CarruselButtom from '../Components/CarruselButtom'
import Galeria from '../Components/Galeria'
import Header from '../Components/Header'
import Post from '../Components/Post'

const Home = () => {
  return (
    <div>
        <Header></Header>
        <Galeria></Galeria>
        <Post></Post>
        <CarruselButtom></CarruselButtom>
    </div>
  )
}

export default Home