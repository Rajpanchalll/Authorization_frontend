import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import userProfile from './assets/pngwing.png'





const Login = () => {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  axios.defaults.withCredentials = true


  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/login', { email, password })
    
      .then(res => {
        if (res.data.status === 'success') {
          if (res.data.role === 'admin') {
            navigate('/admin')
          }
          else{
            navigate('/table')
          }
        }
        else{
          navigate('/table')
        }
      })
     
    
      .catch(err => console.log(err))
  }
  return (


    <div className='bg-custom-background h-screen flex flex-row'>

      <form action="" method='post' onSubmit={handleSubmit} className='text-center bg-secondary flex flex-col h-4/5 w-2/5 m-auto rounded-md '>

      <h1 className='text-center text-2xl bg-submitbtn h-16 w-4/5 font-serif rounded-md m-auto pt-4 font-semibold'>Log in</h1>


      <img src={userProfile} className=' h-32 w-32 m-auto my-5 ' alt="" />

{/*        
        <input type="text" name="lg-email" value={email} onChange={(e) => setEmail(e.target.value)} id="" className=' border border-black h-14' /> */}


        <input type="text" name="lg-email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} id="" className='border-none h-12 w-3/5 px-5 bg-btn-color m-auto rounded-lg my-4 text-white' />

       
        {/* <input type="password" name="lg-password" value={password} onChange={(e) => setPassword(e.target.value)} id="" className=' border border-black h-14' /> */}



         
        <input type="password" name="lg-password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} id="" className=' border-none px-5 h-12 bg-btn-color w-3/5 m-auto my-4 rounded-lg text-white' />


        <button type="submit" className= 'mt-4 rounded-md h-12  w-3/5 m-auto bg-submitbtn text-black font-semibold text-lg font-serif' >Submit</button>

      </form>







    </div>

  )
}

export default Login