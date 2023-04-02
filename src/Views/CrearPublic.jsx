import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Perfil from '../Components/Perfil';

const CrearPublic = () => {
  return (
      <>
        <Perfil></Perfil>
        <div>
          <div className='crear-publi'>
            <h1>Crear Publicacion</h1>
            <hr></hr>
          </div>
          <form className='editForm'>
            <input type="text" name="name" placeholder='Nombre' />
            <div style={{ width: '50%' }}>
              <input type="text" name="price" placeholder='Precio $' />
              <button style={{ margin: '1em', borderRadius: '16px', paddingRight: '2em', paddingLeft: '2em' }} type="button" >Subir foto</button>
            </div>
            <textarea className='textarea' name="comentarios" rows="5" placeholder='Descripción'></textarea>
            <button style={{ margin: '1em', borderRadius: '16px', paddingRight: '3em', paddingLeft: '3em' }} type="button" 
        variant="outline-primary" class="btn btn-outline-primary">Subir</button>

          </form>
        </div>
      </>
  )

}

export default CrearPublic