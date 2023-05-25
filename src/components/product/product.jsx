







import "./product.css"

import React, { useEffect, useState } from 'react'

import { ProductModal } from "../modal/product_modal";

export const Product = ({props}) => {

    const {active , setActive} = props;
    console.log(active);

    const [categories , setCategories] = useState([]);
    const [products , setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:1212/api/products")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setCategories(data.categories)
            setProducts(data.products)
        })
        .catch(error => console.log(error))
    } , [])

    console.log(categories);
    console.log(products);

  return (
    <div className='container'>
        <div className='product__box'>
            <ul className='product__list'>
                {
                    products.map((item) => {
                        return <li className='product__item' key={item.id}>
                            <div>
                                <p className="product__lText">Yangi mahsulot</p>
                                <div className="product__img">
                                    <img src="./src/assets/matras.svg" alt={item.name} />
                                </div>
                            </div>
                            <div className="product__Rbox">
                                <h2 className="product__title">{item.name}</h2>
                                <ul className="product__list2">
                                    <li>
                                        <p className="product__yuklama">Yuklama</p>
                                        <p className="product__kg">{item.weight} <span className="product__span">kg</span></p>
                                    </li>
                                    <li>
                                        <p className="product__yuklama">Kafolat</p>
                                        <p className="product__kg">{item.warranty} <span className="product__span">yil</span></p>
                                    </li>
                                    <li>
                                        <p className="product__yuklama">O’lchami</p>
                                        <p className="product__kg">{item.size}</p>
                                    </li>
                                    <li>
                                        <p className="product__yuklama">Sig’imi</p>
                                        <p className="product__kg">{item.capacity}<span className="product__span">kishilik</span></p>
                                    </li>
                                </ul>
                                <p className="product__body">{item.body}</p>
                                <p className="product__body narxi2">Narxi</p>
                                <p className="product__kg">{item.new_cost}<span className="product__span">so’m</span></p>
                                <button className="product__btn" onClick={()=>setActive(!active)}>Buyurtma berish</button>
                            </div>
                        </li>
                    })
                }
            </ul>
                <ProductModal  active={active} setActive={setActive}/>
        </div>
    </div>
  )
}
