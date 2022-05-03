import React, {useState} from "react";
import "../components/Header.css";
import {MenuItems} from './MenuItems'

export default function Dropdown() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)


    return (
    <>
        <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
            {MenuItems.map((item, index) => {
                return(
                    <li key={index}>
                        <a href={item.path} className={item.cName} onClick={() => setClick(!click)}>
                            {item.title}
                        </a>
                    </li>
                )            
            })}
        </ul>

    </>
  )
}