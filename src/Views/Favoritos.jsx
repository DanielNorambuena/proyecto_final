import React from 'react';
import Perfil from '../Components/Perfil';
import GaleriaFavoritos from '../Components/GaleriaFavoritos';

const Favoritos = () => {
  return (
    <>
      <Perfil></Perfil>
      <div>
        <div className='crear-publi'>
          <h1>Favoritos</h1>
          <hr></hr>
        </div>

       <GaleriaFavoritos></GaleriaFavoritos>

      </div>
    </>
  )
}

export default Favoritos