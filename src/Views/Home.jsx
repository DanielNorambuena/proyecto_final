import React from 'react'
import Header from '../Components/Header'
import Galeria from '../Components/Galeria'
import banner from '../Img/banner.jpg'


const Home = () => {
  return (
    
    <>
      <Header></Header>
      <Galeria></Galeria>
      <section className='banner'>
      </section>

      <section className='blog mb-5'>
        <div>
          <img style={{ borderRadius: '14px', width: '400px', height: 'auto', margin: '3em' }} src='https://www.highsnobiety.com/static-assets/wp-content/uploads/2022/07/11114942/ezgif.com-gif-maker-62.gif'></img>
        </div>
        <div className='textoDescripcion' style={{width:'50%'}}>
          <h6>Blog</h6>
          <h3>Tendencias 2023</h3>
          <p>Las zapatillas se han convertido en un básico en nuestros estilismos diarios y en un fenómeno imparable que trajo consigo una forma más relajada y casual de entender la moda. Así pues, cada temporada surgen (o se recuperan) nuevos modelos que pasan a ser tendencias absolutas. Este 2023 estará marcado por el regreso de las zapatillas retro Adidas Samba, por la gran apuesta por diseños normcore como las Salomon y por la obsesión por sneakers que no paran de agotarse como las New Balance 550.</p>
        </div>
      </section>

      <section className='publicidad'>
      </section>
     

    </>
  )
}

export default Home