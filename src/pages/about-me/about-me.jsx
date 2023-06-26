import AboutText from "../../components/about-text/about-text"
import ProfilePhoto from "../../components/profile-photo/profile-photo"
import ScrollSvg from "../../components/scroll-svg/scroll-svg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutMe() {
    return (
        /*ABOUT SECTION*/
        <>
        <section id="about">
            <Container>
                <AboutText />
                <ProfilePhoto />
                <ScrollSvg />
            </Container>
        </section>
        </>
    )
}

export default AboutMe;