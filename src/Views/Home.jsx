import React from 'react'
import CarruselButtom from '../Components/CarruselButtom'
import Header from '../Components/Header'
import Post from '../Components/Post';
import Galeria from '../Components/Galeria';


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