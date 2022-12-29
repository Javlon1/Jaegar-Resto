import React, { useState } from 'react'
import './Header.scss'
import Logo from '../../Assets/Img/Logo.svg'
import { Link } from 'react-router-dom'

export default function Header() {
  const [nav, setNav] = useState(0)
  return (
    <header className='header'>
        <nav className='header__nav'>
            <Link id='0' onClick={(e)=> setNav(e.target.parentNode.id)} to='/home'>
              <img id='0' className='header__nav__img' src={Logo} alt=""/>
            </Link>
            <ul className='header__nav__list'>
              <li id='0' onClick={(e)=> setNav(e.target.parentNode.id)} className={nav === 0? 'header__nav__list__item active' : 'header__nav__list__item' }>
                <Link id='0' to="/home">
                  <i className="bi bi-house"></i>
                </Link>
              </li>
              <li id='1' onClick={(e)=> setNav(e.target.parentNode.id)} className={nav === 1? 'header__nav__list__item active' : 'header__nav__list__item' }>
                <Link id='1' to="/home">
                  <i className="bi bi-gear-wide"></i>
                </Link>
              </li>
              <li id='2' onClick={(e)=> setNav(e.target.parentNode.id)} className={nav === 2? 'header__nav__list__item active' : 'header__nav__list__item' }>
                <Link id='2' to="/home">
                  <i className="bi bi-gear-wide-connected"></i>
                </Link>
              </li>
              <li id='3' onClick={(e)=> setNav(e.target.parentNode.id)} className={nav === 3? 'header__nav__list__item active' : 'header__nav__list__item' }>
              <Link id='3' to="/home">
                <i className="bi bi-envelope"></i>
              </Link>
              </li>
              <li id='4' onClick={(e)=> setNav(e.target.parentNode.id)} className={nav === 4? 'header__nav__list__item active' : 'header__nav__list__item' }>
                <Link id='4' to="/home">
                  <i className="bi bi-bell"></i>
                </Link>
              </li>
              <li id='5' onClick={(e)=> setNav(e.target.parentNode.id)} className={nav === 5? 'header__nav__list__item active' : 'header__nav__list__item' }>
                <Link id='5' to="/home">
                  <i className="bi bi-gear"></i>
                </Link>
              </li>
            </ul>
            <button onClick={()=> window.sessionStorage.setItem('token', 'ERROR')} className='header__nav__btn'>
              <Link to='/'>
                <i className="bi bi-box-arrow-right"></i>
              </Link>
            </button>
        </nav>
    </header>
  )
}

