


import "./kategory.css"
import React from 'react'

export const Kategory = () => {

    const nav = [
        {
            name:"Barchasi",
            path:"barchasi"
        },
        {
            name:"Model A+",
            path:"model A+"
        },
        {
            name:"Model B+",
            path:"model B+"
        },
        {
            name:"Model C",
            path:"model C"
        },
        {
            name:"Model C+",
            path:"model C+"
        },
        {
            name:"Model D",
            path:"model D"
        },
        {
            name:"Model Yevro",
            path:"model Yevro"
        },
        {
            name:"Yangi tovarlar",
            path:"yangi tovarlar"
        },
        {
            name:"Model A",
            path:"model A"
        },
    ]

  return (
    
    <div className=' container kategory__box'>
        <h1 className="kategory__title">Bizning mahsulotlar</h1>
        <ul className='kategory__list'>
            {
                nav.map((item , index) => {

                    return <li className="kategory__item" key={index}>
                        <a className="kategory__link" href="/">{item.name}</a>
                    </li>
                    
                })
            }
        </ul>
    </div>
  )
}
