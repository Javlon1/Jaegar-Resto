import React from 'react'
import './Login.scss'
import {useNavigate} from 'react-router-dom'

const data =[
  {
    id:1,
    name:'javlon',
    password:4562,
  },
  {
    id:2,
    name:'a',
    password:1
  }
]

export default function Login() {
  data.includes()
  const navigate = useNavigate()

  const loginHandler=(evn)=>{
    evn.preventDevault()
    const userName = evn.target.elements.name.value
    const userPassword = evn.target.elements.password.value

    for (let i = 0; i < data.length; i++) {
      if (data[i].name === userName && data[i].password === parseInt(userPassword)) {
        window.sessionStorage.setItem('token', 'rtqwqyuygdgyguyldaljkhannusgoey6sghhuqu7uu')
        break
      }else{
        window.sessionStorage.setItem('token', 'ERROR')
      }
    }

    if (window.sessionStorage.getItem('token') === 'rtqwqyuygdgyguyldaljkhannusgoey6sghhuqu7uu') {
      navigate('/home')
    }

  }
  return (
    <section className='login'>
        <div className="login__container">
            <h2>welcome to <span>Jaegar Resto</span> </h2>
            <form onSubmit={loginHandler} className='login__container__form' action="#">
                <input className='login__container__form__input' name='name' type="text" placeholder='Enter Your Name'/>
                <input className='login__container__form__input' name='password' type="password" placeholder='Enter Your Password'/>
                <button className='login__container__form__btn' type='submit'>Sign-In</button>
            </form>
        </div>
    </section>
  )
}
