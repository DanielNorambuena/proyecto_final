import React, { Suspense, useContext } from 'react'
import ContextoGlobal from '../Context/ContextoGlobal.jsx';
import CardZapatillas from './CardZapatillas.jsx';
import { Row, Col } from 'react-bootstrap'

const Galeria = () => {

  const { zapatillas } = useContext(ContextoGlobal);

  return (
    <>
      <section className="section-products">
        <div className="container">
          <Suspense fallback={<div>Loading...</div>}>
            <Row className='mx-5'>
              {
                zapatillas.map((zapatilla) => {
                  return <Col key={zapatilla.id}><CardZapatillas zapatilla={zapatilla}></CardZapatillas></Col>
                })
              }
            </Row>
          </Suspense>
        </div>
      </section>
    </>
  )
}

export default Galeria