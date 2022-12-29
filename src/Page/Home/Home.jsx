import React from 'react'
import Header from '../../Components/Header/Header'
import Main from '../../Components/Main/Main'
import Orders from '../../Components/Orders/Orders'
import './Home.scss'

export default function Home() {
  return (
    <div className='home'>
      <div className="home__container">
        <Header/>
        <Main/>
        <Orders/>
      </div>
    </div>
  )
}
