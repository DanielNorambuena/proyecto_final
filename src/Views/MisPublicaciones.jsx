import React from 'react';
import Perfil from '../Components/Perfil';
import { Row, Card, Container } from 'react-bootstrap';



const MisPublicaciones = () => {
  return (
    <>
      <Perfil></Perfil>
      <div className='crear-publi'>
        <h1>Mis Publicaciones</h1>
        <hr></hr>
      </div>


      <Container className='d-flex' style={{ justifyContent: 'center' }}>
        <Row md={3}>

          <Card style={{ width: '18rem', marginRight: '1em', }}>
            <Card.Img variant="top" className='publi-img' style={{ width: '90%', margin: '1em', borderRadius: '14px' }} src='https://ae01.alicdn.com/kf/S609b243f73564d4eb15377a58d1cff863/PMAWXS-Zapatillas-deportivas-transpirables-para-hombre-zapatos-blancos-ligeros-y-c-modos-para-caminar-zapatillas-de.jpg' />
            <Card.Body>
              <Card.Title className='let'><p style={{ fontSize: '15px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></Card.Title>
              <div>
                <hr />
              </div>
              <div style={{ textAlign: 'center' }}>
                <div>
                  <h4 style={{ marginTop: '1em' }}>$0.000</h4>
                </div>
                <div >
                  <button style={{ marginTop: '1em', borderRadius: '16px', paddingRight: '2em', paddingLeft: '2em' }} type="button"
                    class="btn btn-outline-dark">Editar publicacion</button>
                  <button style={{ marginTop: '1em', borderRadius: '16px', paddingRight: '2em', paddingLeft: '2em' }} type="button"
                    variant="outline-primary" class="btn btn-outline-danger">Eliminar publicacion</button>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem', marginRight: '1em', }}>
            <Card.Img variant="top" className='publi-img' style={{ width: '90%', margin: '1em', borderRadius: '14px' }} src='https://ae01.alicdn.com/kf/S609b243f73564d4eb15377a58d1cff863/PMAWXS-Zapatillas-deportivas-transpirables-para-hombre-zapatos-blancos-ligeros-y-c-modos-para-caminar-zapatillas-de.jpg' />
            <Card.Body>
              <Card.Title className='let'><p style={{ fontSize: '15px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></Card.Title>
              <div>
                <hr />
              </div>
              <div style={{ textAlign: 'center' }}>
                <div>
                  <h4 style={{ marginTop: '1em' }}>$0.000</h4>
                </div>
                <div >
                  <button style={{ marginTop: '1em', borderRadius: '16px', paddingRight: '2em', paddingLeft: '2em' }} type="button"
                    class="btn btn-outline-dark">Editar publicacion</button>
                  <button style={{ marginTop: '1em', borderRadius: '16px', paddingRight: '2em', paddingLeft: '2em' }} type="button"
                    variant="outline-primary" class="btn btn-outline-danger">Eliminar publicacion</button>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem', marginRight: '1em', }}>
            <Card.Img variant="top" className='publi-img' style={{ width: '90%', margin: '1em', borderRadius: '14px' }} src='https://ae01.alicdn.com/kf/S609b243f73564d4eb15377a58d1cff863/PMAWXS-Zapatillas-deportivas-transpirables-para-hombre-zapatos-blancos-ligeros-y-c-modos-para-caminar-zapatillas-de.jpg' />
            <Card.Body>
              <Card.Title className='let'><p style={{ fontSize: '15px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></Card.Title>
              <div>
                <hr />
              </div>
              <div style={{ textAlign: 'center' }}>
                <div>
                  <h4 style={{ marginTop: '1em' }}>$0.000</h4>
                </div>
                <div >
                  <button style={{ marginTop: '1em', borderRadius: '16px', paddingRight: '2em', paddingLeft: '2em' }} type="button"
                    class="btn btn-outline-dark">Editar publicacion</button>
                  <button style={{ marginTop: '1em', borderRadius: '16px', paddingRight: '2em', paddingLeft: '2em' }} type="button"
                    variant="outline-primary" class="btn btn-outline-danger">Eliminar publicacion</button>
                </div>
              </div>
            </Card.Body>
          </Card>


        </Row>
      </Container>








    </>
  )
}

export default MisPublicaciones