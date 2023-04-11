import React, { useContext } from 'react'
import ContextoGlobal from '../Context/ContextoGlobal.jsx';
import CardZapatillas from './CardZapatillas.jsx';
import { Row, Col } from 'react-bootstrap'

const GaleriaComplementa = () => {
    const { zapatillas } = useContext(ContextoGlobal);
    return (
        <>
        <section className="section-products">
          <div className="container">
            <Row className='mx-5'>
              {
                zapatillas.slice(0,4).map((zapatilla) => {
                  return <Col key={zapatilla.id}><CardZapatillas zapatilla={zapatilla}></CardZapatillas></Col>
                })
              }
            </Row>
          </div>
        </section>
      </>
    )
}

export default GaleriaComplementa