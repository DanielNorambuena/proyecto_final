import React, { useContext } from 'react';
import ContextoGlobal from '../Context/ContextoGlobal';
import { Row } from 'react-bootstrap';


const GaleriaFavoritos = () => {

  const { zapatillasLike, setZapatillasLike } = useContext(ContextoGlobal);


  const eliminarFavoritos = (id) => {
    const filteredFavoritos = zapatillasLike.filter(zapatillasLike => zapatillasLike.id !== id)
    setZapatillasLike(filteredFavoritos)
  }


  return (
    <section className="section-products">
      <div className="container">
        <Row>
          {
            zapatillasLike.map((p) => {
              return (
                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="single-product">
                    <div className="single-product">
                      <div className="part-1">
                        <ul>
                          <li>
                            <div className='caja-icono'>
                              <i className="fa-solid fa-trash" style={{ cursor: 'pointer' }} onClick={() => eliminarFavoritos(p.id)} ></i>
                            </div>
                          </li>
                        </ul>


                        <img alt={p.nombre} src={p.img} style={{ width: '270px', height: '300px' }}></img>
                      </div>
                      <div className="part-2">
                        <p className="product-title" style={{ fontSize: '12px', width: '270px' }} >{p.desc}</p>
                        <h3 className="product-title">{p.nombre}</h3>
                        <h4 className="product-old-price">${p.precioanterior.toLocaleString('es-CL')}</h4>
                        <h4 className="product-price">${p.precio.toLocaleString('es-CL')}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </Row>
      </div>
    </section>
  )
}

export default GaleriaFavoritos