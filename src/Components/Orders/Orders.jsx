import React, { useState } from 'react'
import { Context } from '../../Context/Context'
import './Orders.scss'

export default function Orders() {
  const {order} = useState(Context)
  return (
    <section className='orders'>
      <div className="orders__container">
        <h2 className='orders__container__title'>Orders <span>#34562</span></h2>
        <ul className='orders__container__list'>
          <li className='orders__container__list__item'>
            <button>Dine In</button>
          </li>
          <li className='orders__container__list__item'>
            <button>To Go</button>
          </li>
          <li className='orders__container__list__item'>
            <button>Delivery</button>
          </li>
        </ul>
        <ul className='orders__container__list1'>
          <li className='orders__container__list1__item'>
            <p>Item</p>
          </li>
          <li className='orders__container__list1__item'>
            <p>Qty</p>
            <p>Price</p>
          </li>
        </ul>
        <ul className='orders__container__list2'>
          {
            order?.map((e,i)=>(
              <li key={i} className='orders__container__list2__item'>
                <div className="orders__container__list2__item__top">
                  <div className='orders__container__list2__item__top__left'>
                    <img className='orders__container__list2__item__top__left__img' src={e.img} alt="" />
                    <samp className='orders__container__list2__item__top__left__samp'>
                      <h2 className='orders__container__list2__item__top__left__samp__title'>{e.title}</h2>
                      <p className='orders__container__list2__item__top__left__samp__price'>$ {e.price}</p>
                    </samp>
                  </div>
                  <p className='orders__container__list2__item__top__right__have'>{e.number}</p>
                  <b className='orders__container__list2__item__top__right__price'>$ 4,58</b>
                </div>
                <div className="orders__container__list2__item__bottom">
                  <input type="text" placeholder='Please, just a little bit spicy only.'/>
                  <button><i className="bi bi-trash"></i></button>
                </div>
              </li>
            ))
          }
        </ul>
        <div className='orders__container__bottom'>
          <ul className='orders__container__bottom__list'>
            <li className='orders__container__bottom__list__item'>
              <ul className='orders__container__bottom__list__item__list'>
                <li className='orders__container__bottom__list__item__list__title'>Discount</li>
                <li className='orders__container__bottom__list__item__list__price'>$0</li>
              </ul>
            </li>
            <li className='orders__container__bottom__list__item'>
              <ul className='orders__container__bottom__list__item__list'>
                <li className='orders__container__bottom__list__item__list__title'>Sub total</li>
                <li className='orders__container__bottom__list__item__list__price'>$ 21,03</li>
              </ul>
            </li>
          </ul>
          <button className='orders__container__bottom__btn'>Continue to Payment</button>
        </div>
      </div>
    </section>
  )
}