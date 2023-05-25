






import { Header } from '../../layout/header/header'
import { Product } from '../../components/product/product'
import { Kategory } from '../../components/kategory/kategory'
import { Info } from '../../components/info/info'
import React, { useState } from 'react'

export const Home = () => {

  const [ active , setActive] = useState(false)

  return (
    <div>
        <Header/>
        <Info/>
        <Kategory/>
        <Product props={{active , setActive}}/>
    </div>
  )
}
