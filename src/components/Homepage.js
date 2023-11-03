import React from 'react'

import { Link } from 'react-router-dom'



const Homepage = () => {
    return (
        <>
            <div className='mt-10 h-screen'>
                <div className="navbar flex flex-row justify-around items-center">
                    <div>
                        <h1 className='text-4xl font-semibold font-serif cursor-pointer'>LOGO</h1>
                    </div>
                    <div className='flex flex-row w-60 justify-around items-center text-xl font-serif'>
                        <Link to="/signup" className='hover:text-yellow-500'>Sign up</Link>
                        <Link to="/login" className='hover:text-yellow-500'>Log in</Link>
                    </div>
                </div> {/*Navbar container ends here! */}



                <div className="content-container h-96 text-center font-serif flex flex-col justify-center ">
                    <div className='text-7xl text-bold '>
                        <h1>Authentication & </h1>
                        <h1> authorization</h1>
                    </div >
                    <div className=' float-right text-2xl mt-10'>
                        <p>- Raj Panchal</p>
                    </div>
                </div>



                <div className='w-full bg-yellow-200 h-52 items-center pt-10'>
                    <div className='w-3/4 text-center m-auto text-md font-serif '>
                        <p>
                            In the MERN stack, I developed user registration and login system, ensuring secure access to the application. Users can securely register by providing their email and creating a password, which is hashed and stored in the MongoDB database. Upon successful login, users receive a JSON Web Token (JWT) for authentication. JWTs are employed to securely confirm user identity and are required to access protected routes. These routes are safeguarded by middleware functions that validate the JWT in each request, preventing unauthorized access. This approach guarantees the security and privacy of user data and maintains the integrity of the application.
                        </p>
                    </div>
                </div>



            </div>
        </>
    )
}

export default Homepage