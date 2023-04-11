import React from 'react'
import { useNavigate } from 'react-router-dom'


const CardZapatillas = ({ zapatilla }) => {

  const navigate = useNavigate();
  
  const verDetalle = () => {
    navigate(`/descripcion/${zapatilla.id}`);
  }

  return (
    <>
      <section className="section-products">
        <div>
          <div id="product-1" className="single-product">
            <div className="part-1">
              <ul>
                <li><a href="#"><i className="fas fa-shopping-cart"></i></a></li>
                <li><a href="#"><i className="fas fa-heart"></i></a></li>
                <li><i className="fas fa-plus" onClick={() => verDetalle()}></i></li>
              </ul>
              <img src={zapatilla.img} style={{ width: '260px' }}></img>
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