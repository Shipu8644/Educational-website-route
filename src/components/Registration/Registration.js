import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import intializeAuthentication from '../../Firebase/firebase.initialize';
intializeAuthentication();

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Registration = () => {
    const auth = getAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [isLogIn, setIsLogIn] = useState('');
    const [error, setError] = useState('');

    //  Google Sign In
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    // Github Sign in
    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);

            })
            .catch(error => {
                console.log(error.message);
            })

    }

    //    passWord Sign up and In
    const namehandle = (e) => {
        // console.log(e.target.value);
        setName(e.target.value);
    }

    const emailHandle = (e) => {
        setEmail(e.target.value);
    }

    const passHandle = (e) => {
        setPass(e.target.value);
    }
    const toggleLogIn = (e) => {
        setIsLogIn(e.target.checked);
    }


    const handleSignUp = (e) => {
        e.preventDefault();
        console.log(password, email);

        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password must contain 2 uppercase letter');
            return;
        }

        isLogIn ? processLogin(email, password) : registerNewUser(email, password);
    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);

            })
    }
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }



    return (
        <div>
            <h1 className='text-center text-4xl mt-6 mb-10'> {!isLogIn ? "Please Sign Up Here" : "Log In"}</h1>

            <form onSubmit={handleSignUp} className="flex items-center justify-center">
                <div>
                    {/* Name section */}
                    {!isLogIn && <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                Full Name
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input onBlur={namehandle} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" placeholder="Your name" />
                        </div>
                    </div>}

                    {/* Email Section */}
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                Email
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input onBlur={emailHandle} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" placeholder="Your email" />
                        </div>
                    </div>

                    {/* Password Section */}
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                                Password
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input onBlur={passHandle} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************" />
                        </div>
                    </div>

                    {/* Error Section */}
                    <div className='text-center text-red-400 ml-10 mb-10'>
                        <p> {error}</p>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3"></div>
                        <label className="md:w-2/3 block text-gray-500 font-bold">
                            <input onChange={toggleLogIn} className="mr-2 leading-tight" type="checkbox" />
                            <span className="text-sm">
                                Already Registered?
                            </span>
                        </label>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                            <button onClick={handleGoogleSignIn} className="shadow bg-purple-500 
                            hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mr-10 " type="button">
                                Sign In With Goolge
                            </button>

                            <button onClick={handleGithubSignIn} className="shadow bg-purple-500 
                            hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mb-6" type="button">
                                Sign In With Github
                            </button>

                            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded ml-12" type="submit">
                                {isLogIn ? "Sign In With Email and Password" : "Sign Up With Email and Password"}
                            </button>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default Registration;