import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import BrandIcon from '../../assets/brand-icon.svg';

import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './Topbar.module.css';

const Topbar = () => {
    return (
        <Navbar bg="inherit" expand="lg" className={styles.topbar}>
            <Link to="/">
                <Navbar.Brand className={styles.navbarBrand}>
                    <img src={BrandIcon} alt="brand icon" />
                </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className={styles.navbarNav}>
                    <Link to="/">
                        <Nav.Link href="/" className={styles.navLink} activeClassName="active">Beranda</Nav.Link>
                    </Link>
                    <Link to="/tentang">
                        <Nav.Link href="/tentang" className={styles.navLink} activeClassName="active">Tentang</Nav.Link>
                    </Link>
                    <Link to="/fitur">
                        <Nav.Link hrefr="/fitur" className={styles.navLink} activeClassName="active">Fitur</Nav.Link>
                    </Link>
                    <Link to="/kontak">
                        <Nav.Link href="/kontak" className={styles.navLink} activeClassName="active">Kontak</Nav.Link>
                    </Link>
                </Nav>
                <Form inline className={styles.formInline}>
                    <Button variant="link" className={styles.btnNav}>Masuk</Button>
                    <Button variant="primary" className={styles.btnNav}>Daftar</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Topbar