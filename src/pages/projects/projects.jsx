import ScrollSvg from "../../components/scroll-svg/scroll-svg"
import CardP from "../../components/card/card"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Projects() {
    return (
        /*PROJECT SECTION*/
        <>
            <section id="projects">
                <Container>
                    <h2>Projetos</h2>
                </Container>
                <Container>
                    <Row>
                        <CardP />
                        <CardP />
                        <CardP />
                    </Row>
                    <Row>
                        <CardP />
                        <CardP />
                        <CardP />

                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Projects;