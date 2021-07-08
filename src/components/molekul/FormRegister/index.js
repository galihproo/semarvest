import { Row, Col, Form, Modal, Button, Spinner } from "react-bootstrap";

import PropTypes from 'prop-types';
import styles from './FormRegister.module.css';

import Banner from '../../atom/Banner';
import FormBanner from '../../../assets/form-banner.png';
import React from "react";

const FormRegister = ({ handleClose, show, formName, form, setForm, submit, loading }) => {

    return (
        <section className={styles.form}>
            <Row className={styles.formRow}>
                <Col xs={12} md={6} lg={6} className="pt-3 mt-4 mt-md-0">
                    <div className="mb-5">
                        <h1 className={styles.formHeading}>Daftar</h1>
                        <h6>Sebagai mitra {formName === 'daftar-umkm' ? "UMKM" : "Investor"}</h6>
                    </div>
                    <Form onSubmit={submit} name={formName}>
                        <Form.Group className={styles.formGroup} controlId="exampleForm.ControlInput1">
                            <Form.Label className={styles.formLabel}>Nama Lengkap *</Form.Label>
                            <Form.Control 
                                className={styles.formInput} 
                                type="text" 
                                onChange={e => setForm({...form, fullName: e.target.value})}
                                value={form.fullName}    
                                required
                                name="nama_lengkap"
                            />
                        </Form.Group>

                        <Row className="mb-5">
                            <Col xs={12} md={6} lg={6} className={styles.itemPendanaan}>
                                <Form.Group className={styles.formGroup} controlId="exampleForm.ControlInput2">
                                    <Form.Label className={styles.formLabel}>No handphone *</Form.Label>
                                    <Form.Control
                                        className={styles.formInput} 
                                        type="tel" 
                                        onChange={e => setForm({...form, phone: e.target.value})}
                                        value={form.phone}
                                        required
                                        name="nomor_hp"
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={6} lg={6} className={styles.itemPendanaan}>
                                <Form.Group className={styles.formGroup} controlId="exampleForm.ControlInput3">
                                    <Form.Label className={styles.formLabel}>Email *</Form.Label>
                                    <Form.Control
                                        className={styles.formInput} 
                                        type="email" 
                                        onChange={e => setForm({...form, email: e.target.value})}
                                        value={form.email}
                                        required
                                        name="email"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        {/* <Row>
                            <Col xs={12} md={6} lg={6} className={styles.itemPendanaan}>
                                <Form.Group className={styles.formGroup} controlId="exampleForm.ControlInput4">
                                    <Form.Label className={styles.formLabel}>Kata sandi *</Form.Label>
                                    <Form.Control
                                        className={styles.formInput} 
                                        type="password" 
                                        // onChange={}
                                        // value={}
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={6} lg={6} className={styles.itemPendanaan}>
                                <Form.Group className={styles.formGroup} controlId="exampleForm.ControlInput5">
                                    <Form.Label className={styles.formLabel}>Ulangi kata sandi *</Form.Label>
                                    <Form.Control
                                        className={styles.formInput} 
                                        type="password" 
                                        // onChange={}
                                        // value={}
                                    />
                                </Form.Group>
                            </Col>
                        </Row> */}

                        <Button 
                            className={styles.btnSubmit} 
                            variant="primary" 
                            type="submit"
                            disabled={loading}>
                            {loading ?
                                <Spinner animation="border" style={{width: '25px', height: '25px'}} variant="light" />
                                : "Daftar"
                            }
                        </Button>
                    </Form>
                </Col>

                <Banner 
                    src={FormBanner} 
                    alt="form contact banner"
                    xs="12"
                    md="6"
                    lg="5"
                />
            </Row>

            <Modal
                className={styles.modal}
                show={show} 
                onHide={handleClose} 
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header className={styles.modalHeader}>
                    <Modal.Title className={styles.modalTitle}>
                        Pesan terkirim!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={styles.modalBody}>
                    <p>
                        Woohoo, pesan anda telah terkirim, harap tunggu kabar dari kami ya!
                    </p>
                    <Button 
                        className={styles.modalButton}
                        variant="primary" 
                        onClick={handleClose}
                    >
                        Okay
                    </Button>
                </Modal.Body>
            </Modal>
        </section>
    )
}

FormRegister.propTypes = {
    handleSubmit: PropTypes.func,
    handleClose: PropTypes.func,
    show: PropTypes.bool 
}

export default FormRegister;