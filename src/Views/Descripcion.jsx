import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ContextoGlobal from '../Context/ContextoGlobal';
import { Container } from 'react-bootstrap';
import Header from '../Components/Header';
import GaleriaComplementa from '../Components/GaleriaComplementa';

const Descripcion = () => {
  const { id } = useParams();
  const { zapatillas, agregarZapatilla, agregarFavorito} = useContext(ContextoGlobal);

  const idZapatilla = zapatillas.findIndex((p) => p.id === id);
  const zapDetalle = zapatillas[idZapatilla];

  return (

    <>
      <Header></Header>
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
            <button
              style={{ marginRight: '15px', borderRadius: '16px' }}
              type="button"
              className="btn btn-outline-dark"
              onClick={() => agregarZapatilla(zapDetalle)}>Agregar al carrito</button>
            <button 
            style={{ borderRadius: '16px' }} 
            type="button" 
            className="btn btn-outline-dark"
            onClick={() => agregarFavorito(zapDetalle)}><i className="fa-solid fa-heart"></i></button>
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