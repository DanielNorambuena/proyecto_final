import React, { useContext} from 'react'
import { Container } from 'react-bootstrap'
import Header from '../Components/Header'
import Galeria from '../Components/Galeria.jsx'
import ContextoGlobal from '../Context/ContextoGlobal'

const UltPublics = () => {
  const { buscar, searcher } = useContext(ContextoGlobal);

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
            <select>
              <option value="Menor a mayor">Menor precio a mayor</option>
              <option value="Mayor a menor">Mayor precio a menor</option>
            </select>
          </div>

          <div>
            <input style={{ borderRadius: '14px', border: 'none', padding: '5px' }} type="search" placeholder='Buscar en la tienda' value={buscar} onChange={searcher}/>
            <button type="button" className="btn btn-light"><i className="fa-solid fa-magnifying-glass"></i></button>
          </div>

        </div>


        <Galeria>
 
          </Galeria>
      </Container >

    </>
  )
}

export default UltPublics