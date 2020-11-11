import React, { useEffect, useState } from 'react'
import '../style/Orders.css'
import {db} from '../firebase'
import { useStatevalue } from './StateProvider';
import Order from './Order'

function Orders() {
    
    const [{user},]  = useStatevalue()
    const [orders, setOrder] = useState([]);
    

    useEffect(()=>{
        if(user){

            db.collection('users').doc(user?.uid).collection('orders')
            .orderBy('created','asc').onSnapshot((snapshot)=>{
               setOrder(snapshot.docs.map(doc =>({
                  id:doc.id,
                  data:doc.data()
               })))
            })
        }else{
            setOrder([])
        }
    },[user])

  console.log(orders)

    return (
        <div className='orders'>
           <h1> your orders </h1> 
           <div className='orders_order'>
              {
                  orders.map((order) =>{
                    return  <Order  order={order}/>
                  })
              }
           </div>
        </div>
    )
}

export default Orders;
