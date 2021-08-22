import React from "react";
import PropTypes from "prop-types";

import { NavLink, Link } from "react-router-dom";

import { Navbar, Nav, Form, Button } from "react-bootstrap";
import CustomModal from "../../atom/CustomModal";

import BrandIcon from "../../../assets/brand-icon.svg";

import "bootstrap/dist/css/bootstrap.min.css";

import styles from "./Topbar.module.css";

const Topbar = () => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="inherit" expand="lg" className={styles.topbar}>
        <Link to="/">
          <Navbar.Brand className={styles.navbarBrand}>
            <img src={BrandIcon} alt="brand icon" />
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={styles.navbarNav}>
            <NavLink
              exact
              to="/"
              className={`${styles.navLink} text-decoration-none`}
              activeClassName="active"
            >
              {" "}
              Beranda
            </NavLink>

            <NavLink
              exact
              to="/pendanaan"
              className={`${styles.navLink} text-decoration-none`}
              activeClassName="active"
            >
              {" "}
              Pendanaan
            </NavLink>

            <NavLink
              to="/kontak"
              className={`${styles.navLink} text-decoration-none`}
              activeClassName="active"
            >
              {" "}
              Kontak
            </NavLink>
          </Nav>

          <Form inline className={styles.formInline}>
            <Button variant="link" className={styles.btnNav} href="/">
              {" "}
              Masuk
            </Button>
            <Button
              variant="primary"
              className={styles.btnNav}
              onClick={handleShow}
            >
              {" "}
              Daftar
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <CustomModal handleClose={handleClose} show={show} type="register" />
    </>
  );
};

Topbar.propTypes = {
  show: PropTypes.bool,
  handleShow: PropTypes.func,
  handleClose: PropTypes.func,
};

export default Topbar;
