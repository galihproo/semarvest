import PropTypes from 'prop-types';

import { Card } from "react-bootstrap";

import styles from './PartnerCard.module.css';

const TestimonialCard = ({ src, name, email, address }) => {
    return (
        <Card className={styles.cardPartner}>
            <Card.Header className={styles.cardHeader}>
                <Card.Img className={styles.cardImg} variant="top" src={src} />
            </Card.Header>
            <Card.Body className={styles.cardBody}>
                <Card.Title className={styles.cardTitle}>{name}</Card.Title>
                <Card.Text className={styles.cardText}>
                    {email}
                </Card.Text>
                <Card.Text className={styles.cardText}>
                    {address}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

TestimonialCard.propTypes = {
    src: PropTypes.string,
    name: PropTypes.string,
    address: PropTypes.string
}

export default TestimonialCard