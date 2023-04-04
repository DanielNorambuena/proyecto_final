import React from 'react';
import { NavLink } from 'react-router-dom';

const Carrito = () => {
  return (
    <>
      <div className='cart-container'>
        <div className='cart-subcontainer'>
          <h3>Detalles del pedido:</h3>
          <div >
            
            <div className='cart'>
              <img src='https://falabella.scene7.com/is/image/Falabella/15774133_3?wid=1500&hei=1500&qlt=70' alt="zapatillas"></img>
              <NavLink style={{ textDecoration: 'none' }}>Zapatilla Urbana</NavLink>
              <p>$9.990</p>

              <p>$9.990</p>
              <button > + </button>
              <p>5</p>
              <button > - </button>
            </div>
            <hr />
          </div>


          <h3> Total: $9.990</h3>

        </div>
      </div>
    </>


  )
}

export default Carrito