import React, { useContext, useState } from 'react'
import { Container } from 'react-bootstrap'
import Header from '../Components/Header'
import ContextoGlobal from '../Context/ContextoGlobal'
import Galeria from '../Components/Galeria.jsx'

const UltPublics = () => {
  const { buscar, searcher, zapatillas } = useContext(ContextoGlobal);
  const [value, setValue] = useState();

  const handleChange = (event) => {
    setValue(event.target.value);
    if (value === 'mayorA') {
      return zapatillas.sort((a, b) => b.precio - a.precio)
    } if (value === 'menorA') {
      return zapatillas.sort((a, b) => a.precio - b.precio)
    } else {
      return zapatillas;
    }
  };

  //zapatillas.sort((a, b) => a.precio - b.precio)
  //console.log(zapatillas);


  return (
    <>
      <Header></Header>
      <Container>
        <div className='estilo'>
          <h1 style={{ fontSize: '20pt', marginTop: '2em', textAlign: 'center' }}>Catálogo de productos</h1>
        </div>

        <div className='sort'>
          <div className='d-flex'>
            <p style={{ marginRight: '1em', marginLeft: '1em', marginBottom: 0 }}>Ordenar por:</p>

            <select value={value} onChange={handleChange}>
              <option value='default'>Seleccione</option>
              <option value='menorA'>Menor a mayor precio</option>
              <option value='mayorA'>Mayor a menor precio</option>
            </select>

          </div>

          <div>
            <input style={{ borderRadius: '14px', border: 'none', padding: '5px' }} type="search" placeholder='Buscar en la tienda' value={buscar} onChange={searcher} />
            <button type="button" className="btn btn-light"><i className="fa-solid fa-magnifying-glass"></i></button>
          </div>

        </div>
        <Galeria></Galeria>
      </Container >

    </>
  )
}

export default UltPublics