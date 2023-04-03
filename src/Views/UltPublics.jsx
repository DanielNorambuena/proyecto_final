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
          <h1 style={{ fontSize: '20pt', marginTop: '2em', textAlign:'center' }}>Catálogo de productos</h1>
        </div>
        <Galeria></Galeria>
      </Container >

    </>
  )
}

export default UltPublics