





import "./product_modal.css"
import React, { useEffect, useState } from 'react'

export const ProductModal = ({active , setActive}) => {

    const [data , setData] = useState([])
    const [count , setCount] = useState(1)

    useEffect(() => {
        fetch("http://localhost:1212/api/products")
        .then(res => res.json())
        .then(data => setData(data.categories))
        .catch(error => console.log(error))
    } , [])

    function handleSubmit (e)  {
        e.preventDefault();
        
    }


  return (
    <div id="modal__box" className= {active ? 'openModal' : 'modal'}>
        <button className="modal__x" onClick={() =>setActive()}>X</button>
        <h2 className="modal__title">Buyurtma qilish</h2>
        <form onSubmit={handleSubmit}>
            <input className="modal__input" type="text" placeholder="Ismingizni yozing"/>
            <input className="modal__input" type="tel" placeholder="Raqamingizni yozing"/>
            <label>
                <p className="modal__text">Mahsulotlarni toifasini tanlang</p>
                <select className="modal__option">
                    {
                        data.map(item => {
                            return  <option  value={item.category}>{item.category}</option>
                        })
                    }
                </select>
            </label>
                <p className="modal__text">Miqdorni tanlang</p>
            <div className="modal__btn_box">
                <button className="modal__btn btn1" onClick={() => count > 0 ? (setCount(count -1)) : setCount(0)}>-</button>
                <span className="modal__span">{count}</span>
                <button className="modal__btn btn2" key={count} onClick={() => setCount(count +1)}>+</button>
            </div>
            <button className="modal__btn3">Yuborish</button>
        </form>
    </div>
  )
}
