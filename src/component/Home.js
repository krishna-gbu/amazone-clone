import React from 'react'
import '../style/Home.css'
import Product from './Product'

function Home() {
    
    // const price = 8
    
    return (
        <div className='home'> 
          <img className='home_image' src='banner.png' alt=''/>

         
          {/* //   product id ,title ,price ,rating ,image */}
          <div className='home_row'>
          <Product  
           id="1"
           title='the lean startup: how constant innovation creates' 
           price={11.96}
           rating={5}
           image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
           />
          <Product  
           id="2"
           title='the lean startup: how constant innovation creates' 
           price={11.96}
           rating={5}
           image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
           />
          </div>


          <div className='home_row'>
          <Product  
           id="3"
           title='the lean startup: how constant innovation creates' 
           price={11.96}
           rating={5}
           image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
           />
          <Product  
           id="4"
           title='the lean startup: how constant innovation creates' 
           price={11.96}
           rating={5}
           image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
           />
          <Product  
           id="5"
           title='the lean startup: how constant innovation creates' 
           price={11.96}
           rating={5}
           image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
           />
          </div>
          <div className='home_row'>
          <Product  
           id="6"
           title='the lean startup: how constant innovation creates' 
           price={11.96}
           rating={5}
           image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
           />
          </div>
        </div>
    )
}

export default Home
 