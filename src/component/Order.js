import moment from 'moment'
import React from 'react'
import CurrencyFormat from 'react-currency-format'
import CheckoutProduct from './CheckoutProduct'


function Order({order}) {
       
    return (
        <div className='order'>
           <p>  { moment.unix(order.data.created).format("MMMM Do YYYY, h:mm")} </p> 
           <p className='order_id'> <small>  {order.id} </small> </p>
           {
            order.data.basket?.map((item,i)=>(
              <div key={i}>
                   <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  rating={item.rating}
                  price={item.price}
                  hiddenbutton
               />
              </div>
            ))}

            <CurrencyFormat 
                    renderText ={(value)=>(
                    <>
                        <h3>
                            Total : <strong>{`${value}`}</strong>
                        </h3>
                    </>
                    )}
                    decimalScale = {2}
                    value={order.data.amount / 100}
                    displayType={'text'}
                    thousandSeparator ={true}
                    prefix={"$"}
                />
     </div>
    )
}

export default Order
