import PropTypes from 'prop-types';

import { NavLink, Link } from "react-router-dom";

import { Navbar, Nav, Form, Button, Modal } from "react-bootstrap";

import BrandIcon from '../../assets/brand-icon.svg';

import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './Topbar.module.css';

const Topbar = ({ show, handleShow, handleClose }) => {
    return (
        <>
            <Navbar 
                bg="inherit" 
                expand="lg" 
                className={styles.topbar}
            >
                <Link to="/">
                    <Navbar.Brand className={styles.navbarBrand}>
                        <img 
                            src={BrandIcon} 
                            alt="brand icon"
                        />
                    </Navbar.Brand>
                </Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={styles.navbarNav}>

                        <NavLink 
                            exact 
                            to="/" 
                            className="text-decoration-none" 
                            activeClassName="active"
                        >
                            <Nav.Link 
                                href="/" 
                                className={styles.navLink}
                            >   Beranda
                            </Nav.Link>
                        </NavLink>
                        
                        <NavLink 
                            to="/kontak" 
                            className="text-decoration-none" 
                            activeClassName="active"
                        >
                            <Nav.Link 
                                href="/kontak" 
                                className={styles.navLink}
                            >   Kontak
                            </Nav.Link>
                        </NavLink>

                    </Nav>

                    <Form inline className={styles.formInline}>
                        <Button 
                            variant="link" 
                            className={styles.btnNav}
                            onClick={handleShow}
                        >   Masuk
                        </Button>
                        <Button 
                            variant="primary" 
                            className={styles.btnNav}
                            onClick={handleShow}
                        >   Daftar
                        </Button>
                    </Form>

                </Navbar.Collapse>
            </Navbar>

            <Modal
                className={styles.modal}
                show={show} 
                onHide={handleClose}
                centered
            >
                <Modal.Body className={styles.modalBody}>
                    <Button 
                        className={styles.modalButton}
                        variant="primary" 
                    >
                        Daftar sebagai investor 
                    </Button>

                    <p>atau</p>

                    <Button 
                        className={styles.modalButton}
                        variant="outline-primary"
                    >
                        Daftar sebagai mitra UMKM 
                    </Button>

                    <p>
                        Sudah memiliki akun? 
                        <Link to="/login" className="btn-link font-bold">
                            Masuk
                        </Link>
                    </p>

                </Modal.Body>
            </Modal>
        </>
    )
}

Topbar.propTypes = {
    show: PropTypes.bool,
    handleShow: PropTypes.func,
    handleClose: PropTypes.func
}

export default Topbar