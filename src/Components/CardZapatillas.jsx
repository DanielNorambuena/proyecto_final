import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import ContextoGlobal from '../Context/ContextoGlobal';


const CardZapatillas = ({ zapatilla }) => {

  const navigate = useNavigate();

  const { agregarZapatilla, agregarFavorito } = useContext(ContextoGlobal);

  const verDetalle = () => {
    navigate(`/descripcion/${zapatilla.id}`);
  };

  return (
    <>
      <section className="section-products">
        <div>
          <div id="product-1" className="single-product">
            <div className="part-1">
              <ul>
                <li>
                  <div className='caja-icono'>
                    <i className="fas fa-shopping-cart" style={{ cursor: 'pointer' }} onClick={() => agregarZapatilla(zapatilla)}></i>
                  </div>
                </li>
                <li>
                  <div className='caja-icono'>
                    <i className="fas fa-heart" style={{ cursor: 'pointer' }} onClick={() => agregarFavorito(zapatilla)}></i>
                  </div>
                </li>
                <li>
                  <div className='caja-icono'>
                    <i className="fas fa-plus" style={{ cursor: 'pointer' }} onClick={() => verDetalle()}></i>
                  </div>
                </li>
              </ul>
              <img
                alt={zapatilla.nombre}
                src={zapatilla.img}
                style={{ width: '260px' }}>
              </img>
            </div>
            <div className="part-2">
              <h3 className="product-title">{zapatilla.nombre}</h3>
              <h4 className="product-old-price">${zapatilla.precioanterior}</h4>
              <h4 className="product-price">${zapatilla.precio}</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CardZapatillas