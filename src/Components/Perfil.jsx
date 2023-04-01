import React from 'react';

const Perfil = () => {
    return (
        <div className='caja'>
            <div className='perfil-contenedor'>
                <img className='imgRedonda' src='https://lapi.com.mx/web/image/product.product/33844/image_1024/Paquete%20Perfil%20Mujer%20MID%20%28M%C3%A9rida%20Altabrisa%29?unique=8a485fd'></img>
                <div>
                    <h3>Hola: Myriam</h3>
                    <p>Editar Perfil</p>
                </div>
            </div>
            <div className='editForm3'>
                <input type="button" value="Crear publicacion" />
                <input type="button" value="Favoritos" />
                <input type="button" value="Mis Plublicaciones" />
            </div>
        </div>
    )
}

export default Perfil