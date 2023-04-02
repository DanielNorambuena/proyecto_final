import React from 'react';
import Perfil from '../Components/Perfil';
import { Container } from 'react-bootstrap'

const Favoritos = () => {
  return (
    <>
      <Perfil></Perfil>
      <div>
        <div className='crear-publi'>
          <h1>Favoritos</h1>
          <hr></hr>
        </div>

        <Container className='d-flex'>
          <div className='imgIzquierda'>
            <img style={{ marginBottom: '1em', borderRadius: '14px' }} src='https://assets.adidas.com/images/w_600,f_auto,q_auto/7b85bada2e2d4329bdd4aa3100c072a6_9366/Zapatillas_Energyfalcon_Negro_EE9843_01_standard.jpg'></img>
            <img style={{ borderRadius: '14px' }} src='https://assets.adidas.com/images/w_600,f_auto,q_auto/7b85bada2e2d4329bdd4aa3100c072a6_9366/Zapatillas_Energyfalcon_Negro_EE9843_01_standard.jpg'></img>
          </div>

          <div className='imgFull'>
            <img style={{ borderRadius: '14px' }} src='https://assets.adidas.com/images/w_600,f_auto,q_auto/7b85bada2e2d4329bdd4aa3100c072a6_9366/Zapatillas_Energyfalcon_Negro_EE9843_01_standard.jpg'></img>
          </div>
          
        </Container>

      </div>
    </>
  )
}

export default Favoritos