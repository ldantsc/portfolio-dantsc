import style from '../../styles/projects.module.css'

export default function ProjectsCard() {

    return (
        <div id="projects-card" className={style.card}>
            <div>
                <img src="https://via.placeholder.com/213x157" alt="" />
            </div>
            <div>
                <h3>Nome do projeto</h3>
                <p>Descrição</p>
            </div>
        </div>
    )
}