import React, { useContext } from 'react';
import ContextoGlobal from '../Context/ContextoGlobal';

const Carrito = () => {

  const { zapatillasPedidas, totalPedido } = useContext(ContextoGlobal);



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
                        src={p.img}
                        width='50' />
                      <h6 className='mb-0 text-capitalize px-5'>{p.nombre}</h6>
                    </div>
                    <div className='d-flex w-50 justify-content-between align-items-center'>
                      <h6 className='mb-0 p-2 w-50'>${p.precio}</h6>
                      <div className='w-50 text-center'>
                        <button style={{ margin: '1em', borderRadius: '16px', paddingRight: '1em', paddingLeft: '1em' }} type="button"
                          variant="outline-primary" class="btn btn-outline-primary" > - </button>
                        <strong className='px-3' >{p.cant}</strong>
                        <button style={{ margin: '1em', borderRadius: '16px', paddingRight: '1em', paddingLeft: '1em' }} type="button"
                          variant="outline-primary" class="btn btn-outline-primary" > + </button>
                      </div>
                    </div>
                  </div>
                </>
              )
            }






            <hr />
            <div className='fs-5' >Total Pedido:<strong className='px-3'>{totalPedido}</strong></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Carrito;