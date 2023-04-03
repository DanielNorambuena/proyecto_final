import React from 'react'
import Header from '../Components/Header'
import Galeria from '../Components/Galeria'

const Home = () => {
  return (
    <>
      <Header></Header>

      <div className='text-center mt-5' >
        <h6>Novedades</h6>
        <h2>Últimas publicaciones</h2>
      </div>

      <Galeria></Galeria>


    </>
  )
}

export default Home