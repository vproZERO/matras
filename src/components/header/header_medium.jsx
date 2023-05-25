




import React from 'react'

export const HeaderMedium = () => {
  


  return (
    <div className='headermedium__box'>
        <div className='headermedium__img'>
            <img src="./src/assets/logo.svg" alt=""/>
        </div>
        <div className='headermedium__icon'>
            <div className='headermedium__icon'>
                <img src="./src/assets/tel-icon.svg" alt=""/>
            </div>
            <p className='headermedium__tel'>+998 90 123 45 67</p>
            <button  className="headermedium__btn" >Buyurtma berish</button>
        </div>
        
    </div>
  )
}
