





import "./header.css"
import { HeaderTop } from '../../components/header/header_top'
import { HeaderMedium } from "../../components/header/header_medium"
import { HeaderBottom } from "../../components/header/header_bottom"
import React from 'react'

export const Header = () => {
  return (
    <div className='container header__container'>
        <HeaderTop/>
        <HeaderMedium/>
        <HeaderBottom/>
    </div>
  )
}
