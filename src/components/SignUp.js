import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import userProfile from './assets/pngwing.png'
import { useNavigate } from 'react-router-dom'






const SignUp = () => {

    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [dob, setDob] = useState('')
    const [password, setPassword] = useState('')


    
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', { name, email, dob, password })
            .then(res => console.log(res))
            .catch(err => console.log(err))
            navigate('/login')
    }

    return (


        <div className='bg-custom-background h-screen'>


            <div className='text-center pt-5'>

                <form action="" method='post' onSubmit={handleSubmit} className='text-center bg-secondary flex flex-col h-full p-10 w-2/5  m-auto justify-around rounded-md'>

                <h1 className='text-center text-2xl bg-submitbtn h-16 w-full font-serif rounded-md m-auto pt-4 font-semibold'>Sign In</h1>
                
                    <img src={userProfile} className=' h-32 w-32 m-auto my-5 ' alt="" />

                   
                    <input type="text" name="username" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} id="" className='border-none bg-btn-color px-5 h-11 w-3/4 m-auto rounded-lg text-white' />


                   
                    <input type="text" name="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} id="" className='border-none h-11 w-3/4 px-5 bg-btn-color m-auto rounded-lg my-4 text-white' />


                  
                    <input type='date' name="email" placeholder='Date of Birth' value={dob} onChange={(e) => setDob(e.target.value)} id="" className=' border-none h-11 px-5 w-3/4 bg-btn-color m-auto rounded-lg text-white' />


                   
                    <input type="password" name="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} id="" className=' border-none px-5 h-11 bg-btn-color w-3/4 m-auto my-4 rounded-lg text-white' />


                    <div className='my-2'>
                    <div className='flex flex-row w-3/4 justify-between m-auto text-submitbtncolor'>Already a member?  <p className='mx-2'>
                        <Link to={'/login'}><p className='font-semibold'>Login ⇾</p></Link></p></div>
                </div>


                    <button type="submit" className= 'mt-4 rounded-md h-12  w-3/4 m-auto bg-submitbtn text-black font-semibold text-lg font-serif' >Submit</button>

                </form>


             





            </div>
        </div>
    )
}

export default SignUp