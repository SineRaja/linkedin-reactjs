import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import './Login.css'
import { auth } from './firebase';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilepic, setProfilepic] = useState('');
    const dispatch = useDispatch();


    const register = () => {
            if (!name) {
                return alert("Please Enter Full Name")
            }

            auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
                userAuth.user.updateProfile({
                displayName: name,
                photoUrl: profilepic,
            })
            .then(()=> {
              dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilepic,
              }))
            })
            }).catch(error => alert(error.message));
    };

    const logintoApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
          dispatch(login({
            email:userAuth.user.email,
            uid:userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl:userAuth.user.photoUrl,

          }))
        }).catch(error=>alert(error))
    };

  return (
    <div className='login'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1200px-LinkedIn_Logo.svg.png'
         alt=''/>

         <form>
            <input value={name} 
                onChange={e => setName(e.target.value)} type='text' placeholder='Full Name {required if registering}'/>

            <input value={profilepic} onChange={e => setProfilepic(e.target.value)} placeholder='Profile pic URL {optional}' type='text'/>

            <input value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' type='text'/>
         
            <input value={password} onChange={e => setPassword(e.target.value)} placeholder='password' type='password' />
         
            <button type='submit' onClick={logintoApp}>Sign in</button>
         </form>

         <p>Not a member? <span className='login_register' onClick={register}>Register Now</span></p>
    </div>
  )
}

export default Login
