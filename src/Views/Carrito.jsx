import React from 'react'
import { Container } from 'react-bootstrap'


const Carrito = () => {
  return (
    <>
      <Container>
        <div>
          <h1 style={{ fontSize: '20pt', marginTop: '2em', textAlign: 'center' }}>Carrito de compras</h1>
        </div>

        <div className='d-flex justify-content-space-evenly align-items-center'>
          <div><p className='mx-5'>Artículo</p></div>
          <div><p className='mx-5' >Precio</p></div>
          <div><p className='mx-5'>Cantidad</p></div>
          <div><p className='mx-5'>Total</p></div>
        </div>

        <div className='d-flex justify-content-space-evenly p-4'>
          <div className='d-flex'>
            <img src='https://falabella.scene7.com/is/image/Falabella/50207835_3?wid=1500&hei=1500&qlt=70' style={{ width: '100px', height: '100px', marginRight:'20px'}}></img>
          <p style={{width:'30%'}}>Zapatilla Deportiva Mujer</p>
          </div>
          <div><p className='mx-5' >$50.000</p></div>
          <div><p className='mx-5'>1</p></div>
          <div><p className='mx-5'>$50.000</p></div>
        </div>


      </Container >
    </>
  )
}

export default Carrito;