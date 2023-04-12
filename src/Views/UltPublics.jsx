import React, { useContext, useState, useEffect } from 'react'
import { Container, Col, Card } from 'react-bootstrap'
import Header from '../Components/Header'
import ContextoGlobal from '../Context/ContextoGlobal'
import GaleriaFiltrada from '../Components/GaleriaFiltrada.jsx'


const UltPublics = () => {
  const { buscar, searcher, zapatillas } = useContext(ContextoGlobal);

  zapatillas.sort((a,b) => a.precio - b.precio)
  console.log(zapatillas);

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
            <select >
              <option value="default">Seleccione</option>
              <option value="menorA">Menor precio a mayor</option>
              <option value="mayorA">Mayor precio a menor</option>
            </select>

          </div>

          <div>
            <input style={{ borderRadius: '14px', border: 'none', padding: '5px' }} type="search" placeholder='Buscar en la tienda' value={buscar} onChange={searcher} />
            <button type="button" className="btn btn-light"><i className="fa-solid fa-magnifying-glass"></i></button>
          </div>

        </div>
        <GaleriaFiltrada></GaleriaFiltrada>
      </Container >

    </>
  )
}

export default UltPublics