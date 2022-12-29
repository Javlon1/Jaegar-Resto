import React, { useContext, useState } from 'react'
import { Context } from '../../Context/Context'
import { data } from '../../Data/data'
import './Main.scss'

export default function Main() {
  const arrFilter = ['all']
  const [value, setValue] = useState([])
  data.forEach((e, i) => {
    if (!arrFilter.includes(e.type)) {
      arrFilter.push(e.type)
    }
  })

  const searchItem = (evn) => {
    const data2 = []
    data.map((item) => (
      item.title.toLowerCase().includes(evn.toLowerCase()) ? data2.push(item) : data2.push()
    ))
    setValue(data2)
  }

  const [fil, setFil] = useState(arrFilter[0])
  const { order, setOrder } = useContext(Context)

  return (
    <section className='main'>
      <div className="main__container">
        <div className="main__container__header">
          <span className='main__container__header__name'>
            <h1 className='main__container__header__name__title'>Jaegar Resto</h1>
            <p className='main__container__header__name__data'>Tuesday, 2 Feb 2021</p>
          </span>
          <div className='main__container__header__search'>
            <label htmlFor="search"><i className="bi bi-search"></i></label>
            <input onChange={(e) => searchItem(e.target.value)} id='search' type="text" placeholder='Search for food, coffe, etc..' />
          </div>
        </div>
        <div className="main__container__filter">
          {
            arrFilter?.map((e, i) => (
              <button onClick={() => setFil(e)} className={fil === e ? 'main__container__filter__item act' : 'main__container__filter__item'} key={i}>{e}</button>
            ))
          }
        </div>
        <div className='main__container__option'>
          <h2 className='main__container__option__title'>Choose Dishes</h2>
          <select className='main__container__option__select' name="" id="">
            <option value="Dine In">Dine In</option>
            <option value="To Go">To Go</option>
            <option value="Delivery">Delivery</option>
          </select>
        </div>
        <ul className="main__container__card">
          {
            value.length > 0 ? arrFilter[0] && value.map((e, i) => (
              <li onClick={() => {
                setOrder([...new Set([...order, e])]);
                e.number = e.number ? e.number + 1 : 1;
              }
              } key={i} className='main__container__card__item'>
                <img className='main__container__card__item__img' src={e.img} alt="" />
                <h2 className='main__container__card__item__title'>{e.title}</h2>
                <b className='main__container__card__item__price'>$ {e.price}</b>
                <p className='main__container__card__item__have'>{e.have} Bowls available</p>
              </li>
            ))
              :
              fil === arrFilter[0] ? data?.map((e, i) => (
                <li onClick={() => {
                  setOrder([...new Set([...order, e])]);
                  e.number = e.number ? e.number + 1 : 1;
                }
                } key={i} className='main__container__card__item'>
                  <img className='main__container__card__item__img' src={e.img} alt="" />
                  <h2 className='main__container__card__item__title'>{e.title}</h2>
                  <b className='main__container__card__item__price'>$ {e.price}</b>
                  <p className='main__container__card__item__have'>{e.have} Bowls available</p>
                </li>
              ))
                :
                data?.filter((j) => j.type === fil).map((e, i) => (
                  <li onClick={() => {
                    setOrder([...new Set([...order, e])]);
                    e.number = e.number ? e.number + 1 : 1;
                  }
                  } key={i} className='main__container__card__item'>
                    <img className='main__container__card__item__img' src={e.img} alt="" />
                    <h2 className='main__container__card__item__title'>{e.title}</h2>
                    <b className='main__container__card__item__price'>$ {e.price}</b>
                    <p className='main__container__card__item__have'>{e.have} Bowls available</p>
                  </li>
                ))
          }
        </ul>
      </div>
    </section>
  )
}
