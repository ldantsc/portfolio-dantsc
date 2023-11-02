import { useState, useEffect } from 'react'
import style from '../../styles/projects.module.css'


export default function ProjectsCard(props) {

    return (
        <div className={style.card}>
            <div className='mb-1'>
                <img src={props.image} alt="imagem do projeto" />
            </div>
            <div className='px-6 grow'>
                <h3 className='mb-3'>{props.title.replaceAll('-', ' ').toUpperCase()}</h3>
                <p className='text-sm italic p-2'>{props.description}</p>
            </div>
            <div className='mb-6'>
                <a className={style.btn_url} href={props.url} target="_blank">Saiba Mais</a>
            </div>
        </div>
    )
}
