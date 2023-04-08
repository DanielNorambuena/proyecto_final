import React, { useContext, useEffect } from 'react';
import Perfil from '../Components/Perfil';
import ContextoGlobal from '../Context/ContextoGlobal';
import { Row } from 'react-bootstrap';


const MisPublicaciones = () => {

  const { lstProductos, setLstProductos } = useContext(ContextoGlobal);

  const cargarDatos = async () => {
    const res = await fetch('http://localhost:3000/zapatillas.json');
    const data = await res.json();

    setLstProductos([...data]);
  }

  useEffect(() => {
    cargarDatos();
  }, [])


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
                    <div  className="single-product">
                      <div  className="single-product">
                        <div className="part-1">
                          <ul>
                            <li><a href="#"><i class="fa-solid fa-pen-to-square"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-trash"></i></a></li>
                          </ul>

                          <img src={producto.img} style={{ width: '270px', height: '300px' }}></img>
                        </div>
                        <div className="part-2">
                          <h3 className="product-title">{producto.nombre}</h3>
                          <h4 className="product-old-price">${producto.precioanterior}</h4>
                          <h4 className="product-price">${producto.precio}</h4>
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