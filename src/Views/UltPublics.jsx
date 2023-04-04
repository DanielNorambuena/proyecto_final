import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../Components/Header'
import Galeria from '../Components/Galeria.jsx'

const UltPublics = () => {
  return (
    <>
      <Header></Header>
      <Container>
        <div>
          <h1 style={{ fontSize: '20pt', marginTop: '2em', textAlign: 'center' }}>Catálogo de productos</h1>
        </div>

        <div className='sort'>
          <div>
          <p style={{marginRight:'1em', marginLeft:'1em'}}>Ordenar por:</p>
          </div>
          <div>
          <select>
            <option value="Menor a mayor">Menor a mayor</option>
            <option value="Mayor a menor">Mayor a menor</option>
            <option selected value="Mas recientes primero">Mas recientes primero</option>
            <option value="Mas antiguos primero">Mas antiguos primero</option>
          </select>
          </div>
          
          <div>
            <input style={{ borderRadius: '14px', border: 'none', padding: '5px', marginLeft:'24em' }} type="text" name="email" placeholder='Buscar en la tienda' />
            <button type="button" class="btn btn-light"><i class="fa-solid fa-magnifying-glass"></i></button>
          </div>
        </div>
      

        <Galeria></Galeria>
      </Container >

    </>
  )
}

export default UltPublics