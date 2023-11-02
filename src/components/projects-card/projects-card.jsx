import { useState, useEffect } from 'react'
import style from '../../styles/projects.module.css'


export default function ProjectsCard(props) {

    return (
        <div id="projects-card" className={style.card}>
            <div>
                <img src="https://via.placeholder.com/213x157" alt="" />
            </div>
            <div>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <a href={props.url} target="_blank">Saiba Mais</a>
            </div>
        </div>
    )
}
