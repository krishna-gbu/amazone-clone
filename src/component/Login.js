import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../style/Login.css'
import { auth } from '../firebase'


function Login() {
 const history = useHistory()
  const [email ,setEmail] = useState('')
  const [password ,setPassword] = useState('')

  // console.log(email)
  // console.log(password)
      ///login ///
    const signIn = (e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then((auth)=>{
          if(auth){
            history.push('/')
          } 
        }).catch((e)=>{
          alert(e)
        })  
    }
////register ///
    const register = (e)=>{
       e.preventDefault();
       auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
        // console.log(auth)
         if(auth){
            history.push('/')
         }
       }).catch((e)=>{
         alert(e)
       })
       setPassword('')
       setEmail('')
    }

    return (
    <div className="login">
     <Link to='/' > 
        <img className='login-logo'
          src='https://www.marketplace.org/wp-content/uploads/2019/07/ama2.png?resize=740%2C204'
          alt='' />
     </Link> 
     <div className='login_container'>
          <h1> Sign-In</h1>
          <form>
             <h5>E-mail</h5>
             <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} />

             <h5>Password</h5>
             <input type='password' value={password}  onChange={(e)=>setPassword(e.target.value)} />

             <button type='submit' onClick={signIn}>Sign In </button>
          </form>
         <p> By continuing, you agree to Amazon's Conditions of Use and Privacy Notice. 
           fake clone </p> 

          <button type='submit' className='login_registerButton' onClick={register}> Create your Amazon Account </button> 

     </div>
     
    </div>
  );
}

export default Login;
