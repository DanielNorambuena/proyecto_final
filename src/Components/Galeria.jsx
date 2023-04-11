import React, { Suspense, useContext } from 'react'
import ContextoGlobal from '../Context/ContextoGlobal.jsx';
import CardZapatillas from './CardZapatillas.jsx';
import { Row, Col } from 'react-bootstrap'

const Galeria = () => {
<<<<<<< HEAD
  
  const { resultado } = useContext(ContextoGlobal);
=======

  const { zapatillas } = useContext(ContextoGlobal);
>>>>>>> 327dce29d316158418d97c582c743524a119728f

  return (
    <>
      <section className="section-products">
        <div className="container">
<<<<<<< HEAD
          <Row className='mx-5'>
            {
              resultado.map((zapatilla) => {
                return <Col key={zapatilla.id}><CardZapatillas zapatilla={zapatilla}></CardZapatillas></Col>
              })
            }
          </Row>
=======
          <Suspense fallback={<div>Loading...</div>}>
            <Row className='mx-5'>
              {
                zapatillas.map((zapatilla) => {
                  return <Col key={zapatilla.id}><CardZapatillas zapatilla={zapatilla}></CardZapatillas></Col>
                })
              }
            </Row>
          </Suspense>
>>>>>>> 327dce29d316158418d97c582c743524a119728f
        </div>
      </section>
    </>
  )
}

export default Galeria