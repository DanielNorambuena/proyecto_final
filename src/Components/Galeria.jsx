import React from 'react'

const Galeria = () => {
  return (
    <>
      <section class="section-products">
        <div class="container">
          <div class="row justify-content-center text-center">
            <div class="col-md-8 col-lg-6">
              <div class="header">
                <h3>Featured Product</h3>
                <h2>Últimas publicaciones</h2>
              </div>
            </div>
          </div>
          <div class="row">
           
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div id="product-1" class="single-product">
                <div class="part-1">
                <span class="discount">15% off</span>
                <img src='https://falabella.scene7.com/is/image/Falabella/15774133_3?wid=1500&hei=1500&qlt=70' style={{width:'300px'}}></img>
                  <ul>
                    <li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
                    <li><a href="#"><i class="fas fa-heart"></i></a></li>
                    <li><a href="#"><i class="fas fa-plus"></i></a></li>
                  </ul>
                </div>
                <div class="part-2">
                  <h3 class="product-title">Xti Zapatilla Urbana</h3>
                  <h4 class="product-old-price">$79.990</h4>
                  <h4 class="product-price">$49.990</h4>
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