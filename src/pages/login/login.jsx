


import React, { useRef } from 'react'
import { json } from 'react-router-dom';

export const Login = ({setToken}) => {

    const useName = useRef('');
    const usePassword = useRef('');
    function onSubmit (e) {
        e.preventDefault();
        fetch('http://localhost:1212/admin/login' , {
            method:'POST',
            headers:{'Content-Type' : 'application/json'},
            body: JSON.stringify({
                useName : useName.current.value,
                usePassword : usePassword.current.value
            })
        }).then(res => res.json()).then(data => setToken(data.token))
    }

  return (
    <div className='container'>
        <form onSubmit={onSubmit}>
            <div>
                <input ref={useName} className='login__input' type="text" placeholder='Login' />
                <input ref={usePassword} className='login__input' type="password" placeholder='Parol' />
                <button>Kirish</button>
            </div>
        </form>
    </div>
  )
}
