import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import ContextoGlobal from '../Context/ContextoGlobal.jsx';
import CardZapatillas from './CardZapatillas.jsx';
import { Row, Col } from 'react-bootstrap'

const Galeria = () => {
  const { zapatillas } = useContext(ContextoGlobal);

  return (
    <>
      <Row className='mx-3 mb-5'>
        {
          zapatillas.map((zapatilla) => {
            return <Col><CardZapatillas zapatilla={zapatilla}></CardZapatillas></Col>
          })
        }
      </Row>
    </>
  )
}

export default Galeria