import Header from "../../components/header/header"
import Logo from "../../components/logo/logo"
import TextMain from "../../components/text-main/text-main"
import ScrollDownText from "../../components/scroll-text/scroll-text"
import ScrollInfo from "../../components/scroll-info/scroll-info"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Home() {
    return (
        /*HOME SECTION*/
        <>      
        <Header />
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
                <ScrollInfo />       
                </Col>
            </Row>   
        </Container>
        </>
    )
};

export default Home;