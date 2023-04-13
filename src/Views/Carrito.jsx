import React, { useContext } from 'react';
import ContextoGlobal from '../Context/ContextoGlobal';
import { NavLink } from 'react-router-dom';

const Carrito = () => {

  const { zapatillasPedidas, setZapatillasPedidas, total } = useContext(ContextoGlobal);


  const disminuirCantidad = (id) => {
    const idx = zapatillasPedidas.findIndex((p) => p.id === id);

    if (idx > -1) {
      if (zapatillasPedidas[idx].cant > 0) {
        zapatillasPedidas[idx].cant -= 1;
        if (zapatillasPedidas[idx].cant === 0) {
          zapatillasPedidas.splice(idx, 1);
        }
      }
      setZapatillasPedidas([...zapatillasPedidas]);
    }
  }

  const aumentarCantidad = (id) => {
    const idx = zapatillasPedidas.findIndex((p) => p.id === id);

    if (idx > -1) {
      zapatillasPedidas[idx].cant += 1;
      setZapatillasPedidas([...zapatillasPedidas]);
    }
  }


  return (
    <>
      <div className='cart-container'>
        <div className='cart-subcontainer'>
          <div >
            <div className='d-flex justify-content-between py-2 mb-4'>
              <div className='d-flex w-50 justify-content-between align-items-center'>
                <h6 className='mb-0 text-capitalize p-2'>Producto</h6>
              </div>
              <div className='d-flex w-50 justify-conten-between align-items-center'>
                <h6 className='mb-0 p-2 w-50'>Subtotal</h6>
                <strong className='w-50 text-center'>Cantidad</strong>
              </div>
            </div>

            {
              zapatillasPedidas.map((p) =>
                <>
                  <div key={p.id} className='d-flex justify-content-between my-4'>
                    <div className='d-flex w-50  align-items-center'>
                      <img
                        alt={p.nombre}
                        src={p.img}
                        width='50' />
                      <NavLink
                        style={{ textDecoration: 'none', paddingLeft: '25px', color: '#556485' }}
                        to={`/descripcion/${p.id}`}>{p.nombre}
                        </NavLink>
                    </div>
                    <div className='d-flex w-50 justify-content-between align-items-center'>
                      <h6 className='mb-0 p-2 w-50'>${p.precio * p.cant}</h6>
                      <div className='w-50 text-center'>
                        <button
                          style={{ margin: '1em', borderRadius: '16px', paddingRight: '1em', paddingLeft: '1em' }}
                          type="button"
                          variant="outline-primary"
                          className="btn btn-outline-primary"
                          onClick={() => disminuirCantidad(p.id)}> - </button>
                        <strong className='px-3' >{p.cant}</strong>
                        <button
                          style={{ margin: '1em', borderRadius: '16px', paddingRight: '1em', paddingLeft: '1em' }}
                          type="button"
                          variant="outline-primary"
                          className="btn btn-outline-primary"
                          onClick={() => aumentarCantidad(p.id)}> + </button>
                      </div>
                    </div>
                  </div>
                </>
              )
            }

            <hr />
            <div className='fs-5' >Total Pedido:<strong className='px-3'>$ {total.toLocaleString('es-CL')}</strong></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Carrito;