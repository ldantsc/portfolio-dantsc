'use client'

import { useEffect } from 'react'
import style from "../../styles/tecnologies.module.css"

/* AAA QUE FELICIDADE DE TER FEITO A LÓGICA DESSE FOR FUNCIONAR !!!!! */
function InsertIcons(icons) {
    useEffect(() => {
        const arr = icons
        const div = document.querySelector("#container-card-icons")     
        for(let i = 0; i < arr.length; i++) {
            const elementImg = document.createElement("img")
            elementImg.setAttribute('src', arr[i])
            elementImg.setAttribute('type', 'image/svg')
            elementImg.setAttribute('alt', 'tech icon')
            div.appendChild(elementImg)
        }
    })
}

export default function TecnologiesCard(props) {
    return (
        <div id="card" className={style.card}>
            <div>
                <h3>{props.title}</h3>
            </div>
            <div id="container-card-icons">
                {InsertIcons(props.icons)}
            </div>
            <div></div>
        </div>
    )
}
