import { Row, Col, Form, Modal, Button } from "react-bootstrap";

import PropTypes from 'prop-types';
import styles from './FormContact.module.css';

import Banner from '../../atom/Banner';
import FormBanner from '../../../assets/form-banner.png';

const FormContact = ({ handleSubmit, handleClose, onEmailChange, onSubjectChange, onMessageChange, emailValue, subjectValue, messageValue, show }) => {

    return (
        <section className={styles.form}>
            <Row className={styles.formRow}>
                <Col xs={12} md={6} lg={6} className="pt-3 mt-4 mt-md-0">
                    <h1 className={styles.formHeading}>Kontak kami</h1>
                    <Form>
                        <Form.Group className={styles.formGroup} controlId="exampleForm.ControlInput1">
                            <Form.Label className={styles.formLabel}>Email</Form.Label>
                            <Form.Control
                                className={styles.formInput} 
                                type="email" 
                                onChange={onEmailChange}
                                value={emailValue}
                            />
                        </Form.Group>

                        <Form.Group className={styles.formGroup} controlId="exampleForm.ControlInput2">
                            <Form.Label className={styles.formLabel}>Subject</Form.Label>
                            <Form.Control 
                                className={styles.formInput} 
                                type="text" 
                                onChange={onSubjectChange}
                                value={subjectValue}    
                            />
                        </Form.Group>

                        <Form.Group className={styles.formGroup} controlId="exampleForm.ControlTextarea1">
                            <Form.Label className={styles.formLabel}>Pesan</Form.Label>
                            <Form.Control 
                                className={styles.formInput} 
                                as="textarea" 
                                rows={3}
                                onChange={onMessageChange}
                                value={messageValue}  
                            />
                        </Form.Group>

                        <Button 
                            className={styles.btnSubmit} 
                            onClick={handleSubmit} 
                            variant="primary" 
                            type="submit">
                            Kirim
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

FormContact.propTypes = {
    handleSubmit: PropTypes.func,
    handleClose: PropTypes.func,
    onEmailChange: PropTypes.func,
    onSubjectChange: PropTypes.func,
    onMessageChange: PropTypes.func,
    emailValue: PropTypes.string,
    subjectValue: PropTypes.string,
    messageValue: PropTypes.string,
    show: PropTypes.bool 
}

export default FormContact;