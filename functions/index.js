const functions = require('firebase-functions');
const express  = require('express')
const cors = require('cors')
const stripe = require('stripe')
('sk_test_51Hkq8JGIts7EMOBSmRmf8LiEBjq0GyoDIZlyYDQijZRQ50xBTlbk5vP9uKja1ilCBj7c1RoAWorSna17naNal2IM00lQSBINP6');


//API
const app = express()

//App middleware
app.use(cors({origin:true}))
// app.use(express.json())


//App route
app.get('/',(req,res)=>{
    res.status(200)
    res.send('<h1> loving and fucking gay </h1>')
})

app.post('/payments/create', async (req,res)=>{
     const total = req.query.total;
     console.log('payment request recive boom >>>>' , total)

     const paymentIntent = await stripe.paymentIntents.create({
        amount:Math.floor(total),
        currency:"inr",
      });
     
     //ok -created
      res.status(200).send({
          clientSecret:paymentIntent.client_secret
      })
})

// app.post('/love/fucking' , async(req , res)=>{ 
//         const name= req.query.name;
//         const age= req.query.age;
//         console.log(name +" dfdjfdf "+ age )
// })

//listen 
exports.api = functions.https.onRequest(app)

// http://localhost:5001/clone-1b968/us-central1/api
