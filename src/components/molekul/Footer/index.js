import { Link } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';

import styles from './Footer.module.css';

import BrandIcon from '../../../assets/brand-icon.svg';
import IconCall from '../../../assets/ic-call.svg';
import IconMail from '../../../assets/ic-mail.svg';
import IconInstagram from '../../../assets/ic-instagram.svg';
import IconFacebook from '../../../assets/ic-facebook.svg';
import IconYoutube from '../../../assets/ic-youtube.svg';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <Row>
                    <Col xs={12} md={7} lg={7}>
                        <div className={styles.footerLeft}>
                            <Link to="/">
                                <img src={BrandIcon} alt="brand icon" />
                            </Link>
                            <p>
                                SemarVest bertekad membantu UMKM meningkatkan taraf ekonominya sekaligus investor dapat mencapai tujuan investasinya.
                            </p>                                     
                        </div>
                    </Col>
                    
                    <Col xs={12} sm={6} md={5} lg={3} className={styles.footerLinksCol}>
                        <h5>Kontak kami</h5>
                        <Link to="/">
                            <p>
                                <img src={IconCall} alt="icon call" />
                                +621234567891
                            </p>
                        </Link>
                        <Link to="/">
                            <p>
                                <img src={IconMail} alt="icon mail" />
                                hay@semarvest.com
                            </p>
                        </Link>
                    </Col>

                    <Col xs={12} sm={6} md={6} lg={2} className={styles.footerLinksCol}>
                        <h5>Social Media</h5>
                        <Link to="/">
                            <p>
                                <img src={IconInstagram} alt="icon instagram" />
                                Instagram
                            </p>
                        </Link>
                        <Link to="/">
                            <p>
                                <img src={IconFacebook} alt="icon facebook" />
                                Facebook
                            </p>
                        </Link>
                        <Link to="/">
                            <p>
                                <img src={IconYoutube} alt="icon youtube" />
                                Youtube
                            </p>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;