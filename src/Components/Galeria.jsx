import React from 'react'
import {NavLink} from 'react-router-dom'

const Galeria = () => {
  return (
    <>
    <section className="section-products">
    <div className="container">
      
      <div className="row">
        <div className="col-md-6 col-lg-4 col-xl-3">
          <div id="product-1" className="single-product">
            <div className="part-1">
            <span className="discount">15% off</span>
              <ul>
                <li><a href="#"><i className="fas fa-shopping-cart"></i></a></li>
                <li><a href="#"><i className="fas fa-heart"></i></a></li>
                <li><a href="/Descripcion"><i className="fas fa-plus"></i></a></li>
              </ul>
              <img src='https://falabella.scene7.com/is/image/Falabella/50207835_3?wid=1500&hei=1500&qlt=70' style={{width:'270px', height:'300px'}}></img>

            </div>
            <div className="part-2">
              <h3 className="product-title">Xti Zapatilla Urbana</h3>
              <h4 className="product-old-price">$79.990</h4>
              <h4 className="product-price">$49.990</h4>
            </div>
          </div>
        </div>
        
        <div className="col-md-6 col-lg-4 col-xl-3">
          <div id="product-1" className="single-product">
            <div className="part-1">
          
              <ul>
                <li><a href="#"><i className="fas fa-shopping-cart"></i></a></li>
                <li><a href="#"><i className="fas fa-heart"></i></a></li>
                <li><a href="/Descripcion"><i className="fas fa-plus"></i></a></li>
              </ul>
              <img src='https://coliseumstorecl.vtexassets.com/arquivos/ids/677593-800-auto?v=637818206338030000&width=800&height=auto&aspect=true' style={{width:'270px', height:'300px'}}></img>

            </div>
            <div className="part-2">
              <h3 className="product-title">Xti Zapatilla Urbana</h3>
              <h4 className="product-old-price">$79.990</h4>
              <h4 className="product-price">$49.990</h4>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4 col-xl-3">
          <div id="product-1" className="single-product">
            <div className="part-1">
            <span className="new">Nuevo</span>
              <ul>
                <li><a href="#"><i className="fas fa-shopping-cart"></i></a></li>
                <li><a href="#"><i className="fas fa-heart"></i></a></li>
                <li><a href="/Descripcion"><i className="fas fa-plus"></i></a></li>
              </ul>
              <img src='https://coliseumstorecl.vtexassets.com/arquivos/ids/677144/168816C_1.jpg?v=637811501661900000' id="imgrotate" style={{width:'270px', height:'300px'}}></img>

            </div>
            <div className="part-2">
              <h3 className="product-title">Xti Zapatilla Urbana</h3>
              <h4 className="product-old-price">$79.990</h4>
              <h4 className="product-price">$49.990</h4>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4 col-xl-3">
          <div id="product-1" className="single-product">
            <div className="part-1">
            
              <ul>
                <li><a href="#"><i className="fas fa-shopping-cart"></i></a></li>
                <li><a href="#"><i className="fas fa-heart"></i></a></li>
                <li><a href="/Descripcion"><i className="fas fa-plus"></i></a></li>
              </ul>
              <img src='https://falabella.scene7.com/is/image/Falabella/15774133_3?wid=1500&hei=1500&qlt=70' id="imgrotate" style={{width:'300px'}}></img>

            </div>
            <div className="part-2">
              <h3 className="product-title">Xti Zapatilla Urbana</h3>
              <h4 className="product-old-price">$79.990</h4>
              <h4 className="product-price">$49.990</h4>
            </div>
          </div>
        </div>
    
  
   
      </div>
    </div> 
    </section>
    </>
  )
}

export default Galeria