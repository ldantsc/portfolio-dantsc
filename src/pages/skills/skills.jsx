import ScrollSvg from "../../components/scroll-svg/scroll-svg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Skills() {
    return (
        /*SKILLS SECTION*/
        <>
        <section id="skills">
            <Container>
                <h2>TECNOLOGIAS</h2>
            </Container>
            <Container>
                <ScrollSvg />
            </Container>
        </section>
        </>
    )
}

export default Skills;