import React, { useContext, useState } from 'react'
import Perfil from '../Components/Perfil';
import ContextoGlobal from '../Context/ContextoGlobal';
import { useNavigate } from 'react-router-dom';


const CrearPublic = () => {

  const { lstProductos, setLstProductos } = useContext(ContextoGlobal);

  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [precioanterior, setPrecioanterior] = useState('');
  const [img, setImg] = useState('');
  const [desc, setDesc] = useState('');

  const navigate = useNavigate();

  const publicarProducto = () => {
    setLstProductos([...lstProductos, { nombre: nombre, precio: precio, precioanterior: precioanterior, img: img, desc: desc }]);
    navigate('/MisPublicaciones');
  }


  return (
    <>
      <Perfil></Perfil>
      <div>
        <div className='crear-publi'>
          <h1>Crear Publicacion</h1>
          <hr></hr>
        </div>


        <form className='editForm'>
          <input type="text"
            name="name"
            placeholder='Nombre'
            onChange={(e) => setNombre(e.target.value)} />

          <div style={{ width: '50%' }}>
            <input type="text"
              name="price"
              placeholder='Precio $'
              onChange={(e) => setPrecio(e.target.value)} />

            <input type="text"
              name="price"
              placeholder='Precio Anterior $'
              onChange={(e) => setPrecioanterior(e.target.value)} />

            <input type="url"
              placeholder="Ingrese URL de la imagen"
              id="url"
              onChange={(e) => setImg(e.target.value)} />

          </div>
          <textarea className='textarea'
            name="comentarios" rows="5"
            placeholder='Descripción'
            onChange={(e) => setDesc(e.target.value)}></textarea>

          <button
            style={{ margin: '1em', borderRadius: '16px', paddingRight: '3em', paddingLeft: '3em' }}
            type="button"
            variant="outline-primary"
            class="btn btn-outline-primary"
            onClick={() => publicarProducto()}>Publicar</button>

        </form>
      </div>
    </>
  )

}

export default CrearPublic