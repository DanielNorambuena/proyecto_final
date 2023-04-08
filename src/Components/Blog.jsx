import React from 'react'

const Blog = () => {
    return (
        <>
            <section className='blog'>
                <div>
                    <img style={{ borderRadius: '14px', width: '300px', height: 'auto', margin: '3em' }} src='https://images.contentstack.io/v3/assets/blt928898215b35efe2/blt09f011bd45bca9ef/629e6c658eeef945727656b6/huincha-sc-02.jpg?qlt=80&wid=220&hei=220&scl=2.3&align=0,0'></img>
                </div>
                <div className='textoDescripcion' style={{ width: '50%' }}>
                    <h6>Blog</h6>
                    <h3>Tendencias 2023</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <button style={{ marginRight: '15px', borderRadius: '16px' }} type="button" class="btn btn-outline-dark">Ver más</button>

                </div>
            </section>
            <section className='publicidad'>
            </section>
        </>
    )
}

export default Blog