import React from 'react';
import { Button, Container, Row, Card, } from 'react-bootstrap';
import Header from '../Components/Header';
import GaleriaComplementa from '../Components/GaleriaComplementa';

const Descripcion = () => {
  return (
    <>
    <Header></Header>
      <Container className='d-flex' >
        <div className='imgIzquierda'>
          <img style={{ marginBottom: '1em', borderRadius: '14px' }} src='https://assets.adidas.com/images/w_600,f_auto,q_auto/7b85bada2e2d4329bdd4aa3100c072a6_9366/Zapatillas_Energyfalcon_Negro_EE9843_01_standard.jpg'></img>
          <img style={{ borderRadius: '14px' }} src='https://assets.adidas.com/images/w_600,f_auto,q_auto/7b85bada2e2d4329bdd4aa3100c072a6_9366/Zapatillas_Energyfalcon_Negro_EE9843_01_standard.jpg'></img>
        </div>

        <div className='imgFull'>
          <img style={{ borderRadius: '14px' }} src='https://assets.adidas.com/images/w_600,f_auto,q_auto/7b85bada2e2d4329bdd4aa3100c072a6_9366/Zapatillas_Energyfalcon_Negro_EE9843_01_standard.jpg'></img>
        </div>

        <div className='textoDescripcion'>
          <h3>Zapatilla</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <h4 style={{ marginBottom: '1.5em' }}>Precio $9.990</h4>

          <div className='d-flex' style={{ height: '2.5em' }}>
            <button style={{ marginRight: '5px' }} type="button" class="btn btn-outline-dark">-</button>
            <p style={{ marginTop: '0.5em', marginLeft: '0.5em', marginRight: '0.5em' }}>5</p>
            <button style={{ marginRight: '50px' }} type="button" class="btn btn-outline-dark">+</button>
            <button style={{ marginRight: '15px', borderRadius: '16px' }} type="button" class="btn btn-outline-dark">Agregar al carrito</button>
            <button style={{ borderRadius: '16px' }} type="button" class="btn btn-outline-dark"><i class="fa-solid fa-heart"></i></button>
          </div>
        </div>
      </Container>


      <div className='contenedor-complementa'>
        <div className='crear-publi-complementa'>
          <h4 style={{ marginBottom: '10px' }}>Complementa tu compra</h4> 
        </div>

        <GaleriaComplementa></GaleriaComplementa>

      </div>

    </>
  )
}

export default Descripcion