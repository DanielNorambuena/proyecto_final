import React from 'react'
import logoblanco from '../Img/logoblanco.png'

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#6678a0', height: '12rem' }} className='estilo'>
      <div className='d-flex justify-content-center'>
        <div>
        <div>
          <img alt="logo" src={logoblanco} style={{ width: '200px', marginTop: '2rem', marginBottom: '0.7rem' }} />
        </div>
        <div style={{color:'white', textAlign:'center', marginBottom:'10px'}}>
          <i class="fa-brands fa-facebook" style={{ marginRight: '20px' }}></i>
          <i class="fa-brands fa-instagram" style={{ marginRight: '20px' }} ></i>
          <i class="fa-solid fa-envelope"></i>
        </div>
        <div style={{ color: 'white' }}>2023 All rights reserved</div>
        </div>

        <div style={{marginTop: '2rem', marginLeft:'3em'}}>
          <div>
            <span style={{ color: 'white'}}>Suscribete a nuestro newsletter y recibe las mejores ofertas.</span>
          </div>
          <div style={{marginTop: '1rem'}}>
            <input type="text" class="form-control" placeholder="Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button style={{marginTop: '1rem'}} class="btn btn-light border-rad" type="button" id="button-addon2">Suscribete</button>
          </div>
        </div>



      </div>
    </div>
  )
}

export default Footer