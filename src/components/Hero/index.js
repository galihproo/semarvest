import Container from "react-bootstrap/Container";
import { Row, Col, Button } from "react-bootstrap";

import Topbar from '../Topbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Hero.module.css';

import HeroBanner from '../../assets/hero-banner.png';
// import HeroBannerWave from '../../assets/hero-banner-wave.png';

const Hero = () => {
    return (
        <div className={styles.heroWrapper}>
            <Container>
                <Topbar />
                <Row xs={1} lg={2} className={styles.heroRow}>
                    <Col className={styles.heroLeft}>
                        <h1 className={styles.heroHeading}>
                            Dapatkan modal, pemasaran, dan pelatihan bisnis. 
                        </h1>
                        <p className={styles.heroParagraph}>
                            Platform permodalan untuk Usaha Mikro Kecil dan Menengah Indonesia
                        </p>
                        <Button variant="primary" className={styles.btnHero}>Mulai Sekarang</Button>
                    </Col>
                    <Col>
                        <img src={HeroBanner} className={styles.heroBanner} alt="hero banner" />
                    </Col>
                    {/* <img src={HeroBannerWave} className={styles.heroBannerWave} alt="hero banner" /> */}
                </Row>
            </Container>                                                     
        </div>
    )
}

export default Hero;