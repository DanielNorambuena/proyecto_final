import React, { useContext } from 'react';
import Perfil from '../Components/Perfil';
import ContextoGlobal from '../Context/ContextoGlobal';
import { Row } from 'react-bootstrap';


const MisPublicaciones = () => {

  const { lstProductos } = useContext(ContextoGlobal);


  return (
    <>
      <Perfil></Perfil>
      <div className='crear-publi'>
        <h1>Mis Publicaciones</h1>
        <hr></hr>
      </div>

      <section className="section-products">
        <div className="container">
          <Row>
            {
              lstProductos.map((producto) => {
                return (
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="single-product">
                      <div className="single-product">
                        <div className="part-1">
                          <ul>
                            <li><a href="#"><i className="fa-solid fa-pen-to-square"></i></a></li>
                            <li><a href="#"><i className="fa-solid fa-trash"></i></a></li>
                          </ul>

                          <img src={producto.img} style={{ width: '270px', height: '300px' }}></img>
                        </div>
                        <div className="part-2">
                          <p className="product-title"style={{ fontSize: '12px', width: '270px' }} >{producto.desc}</p>
                          <h3 className="product-title">{producto.nombre}</h3>
                          <h4 className="product-old-price">${producto.precioanterior.toLocaleString('es-CL')}</h4>
                          <h4 className="product-price">${producto.precio.toLocaleString('es-CL')}</h4>
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
    </>
  )
}

export default MisPublicaciones