import Header from "../../components/header/header"
import Logo from "../../components/logo/logo"
import TextMain from "../../components/text-main/text-main"
import ScrollDownText from "../../components/scroll-text/scroll-text"
import ScrollSvg from "../../components/scroll-svg/scroll-svg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Home() {
    return (
        /*HOME SECTION*/
        <>      
        <Header />
        <section id="home">
        <Container>
            <Row>
                <Col><Logo /></Col>
                <Col><TextMain /></Col>
            </Row>                       
        </Container>
        <Container>
            <Row>
                <Col>
                <ScrollDownText />
                <ScrollSvg />       
                </Col>
            </Row>   
        </Container>
        </section>
        </>
    )
};

export default Home;