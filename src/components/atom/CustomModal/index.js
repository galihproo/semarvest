import React from "react";

import { Button, Image, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import IconClose from "../../../assets/ic-close.svg";
import CheckEmail from "../../../assets/check-email.png";

import styles from "./CustomModal.module.css";

const CustomModal = ({ show, handleClose, type }) => {
  const RenderBody = () => {
    if (type === "register") {
      return (
        <>
          <Button
            className={styles.modalButton}
            variant="primary"
            href="/daftar/investor"
          >
            Daftar sebagai investor
          </Button>

          <p className="m-0 mb-2">atau</p>

          <Button
            className={styles.modalButton}
            variant="outline-primary"
            href="/daftar/umkm"
          >
            Daftar sebagai mitra UMKM
          </Button>

          <p>
            Sudah memiliki akun?
            <Link to="/masuk" className="btn-link font-bold ml-1">
              Masuk
            </Link>
          </p>
        </>
      );
    } else if (type === "detail-pendanaan") {
      return (
        <>
          <h5 className="font-weight-bold">Check Email Anda</h5>
          <Image src={CheckEmail} />
          <p>Kami akan mengirimkan persetujuan pendanaan melalui Emai anda</p>
          <Button
            className={styles.modalButton}
            variant="primary"
            href="/daftar/investor"
          >
            Verfikasi Pendanaan
          </Button>
        </>
      );
    }
  };

  return (
    <Modal className={styles.modal} show={show} onHide={handleClose} centered>
      <Image
        onClick={handleClose}
        src={IconClose}
        className={styles.btnClose}
      />
      <Modal.Body className={styles.modalBody}>
        <RenderBody />
      </Modal.Body>
    </Modal>
  );
};

export default CustomModal;
