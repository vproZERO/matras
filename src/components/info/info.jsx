



import React from 'react'
import "./info.css"
export const Info = () => {
  return (
    <div className='container info__container'>
        <ul className='info__list'>
            <li className='info__item'>
                <h2 className='info__title'>7</h2>
                <p className='info__text'>yillik tajriba</p>
            </li>
            <li className='info__item'>
                <h2 className='info__title'>10k+</h2>
                <p className='info__text'>mamnun mijozlar</p>
            </li>
            <li className='info__item'>
                <h2 className='info__title'>10</h2>
                <p className='info__text'>yillik kafolat</p>
            </li>
            <li className='info__item'>
                <h2 className='info__title'>3</h2>
                <p className='info__text'>kunda yetkazish</p>
            </li>
        </ul>
    </div>
  )
}
