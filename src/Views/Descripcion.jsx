import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ContextoGlobal from '../Context/ContextoGlobal';
import { Container } from 'react-bootstrap';
import Header from '../Components/Header';
import GaleriaComplementa from '../Components/GaleriaComplementa';

const Descripcion = () => {
  const { id } = useParams();
  const { zapatillas } = useContext(ContextoGlobal);

  const idZapatilla = zapatillas.findIndex((p) => p.id === id);
  const zapDetalle = zapatillas[idZapatilla];

  return (

    <>
    
      <Container className='d-flex' >
        <div className='imgIzquierda'>
          <img style={{ marginBottom: '1em', borderRadius: '14px' }} src={zapDetalle?.imgsec}></img>
          <img style={{ borderRadius: '14px' }} src={zapDetalle?.imgter}></img>
        </div>

        <div className='imgFull'>
          <img style={{ borderRadius: '14px' }} src={zapDetalle?.img}></img>
        </div>

        <div className='textoDescripcion'>
          <h3>{zapDetalle?.nombre}</h3>
          <p>{zapDetalle?.desc}</p>
          <h4 style={{ marginBottom: '1.5em' }}>${zapDetalle?.precio}</h4>

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