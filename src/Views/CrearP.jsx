import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const CrearP = () => {
  return (
    <>
      <h1 style={{ fontSize: '18pt', marginTop: '2em', marginBottom: '1em', textAlign: 'left', marginLeft: '3em' }}>Crear publicación</h1>
      <hr style={{ width: '40%', marginLeft: '4em' }}></hr>
      
      <form className='editForm'>
        <input type="text" name="name" placeholder='Nombre' />
        <div style={{ width: '50%' }}>
          <input type="text" name="price" placeholder='Precio $' />
          <button style={{ margin: '1em', borderRadius: '16px', paddingRight: '2em', paddingLeft: '2em' }} type="button" class="btn btn-outline-dark">Subir foto</button>
        </div>


        <FloatingLabel style={{ width: '50%', marginTop:'1em' }} controlId="floatingTextarea2" label="Descripción del producto">
          <Form.Control
            as="textarea"
          />
        </FloatingLabel>

        <button style={{ margin: '1em', borderRadius: '16px', paddingRight: '3em', paddingLeft: '3em' }} type="button" class="btn btn-outline-dark">Publicar</button>

      </form>
    </>
  )

}

export default CrearP