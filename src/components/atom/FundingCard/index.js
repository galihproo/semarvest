import PropTypes from "prop-types";

import { Card, Button, Col, Row, ProgressBar } from "react-bootstrap";
import star from "../../../assets/star-group.png";
import iconMap from "../../../assets/ic-map.svg";

import styles from "./FundingCard.module.css";

const FundingCard = ({
  name,
  rate,
  location,
  image,
  plafon,
  tenor,
  remainingTime,
  id,
}) => {
  return (
    <Col>
      <Card className={styles.cardPartner}>
        <Card.Header className={styles.cardHeader}>
          <Button variant="primary" className={styles.label}>
            Dibuka
          </Button>
          <Card.Img className={styles.cardImg} variant="top" src={image} />
        </Card.Header>
        <Card.Body className={styles.cardBody}>
          <div className={styles.padding}>
            <Card.Title className={styles.cardTitle}>{name}</Card.Title>
            <span className={styles.wrapper}>
              <img src={star} className={styles.star} alt="star" />
              <p className={styles.numRate}>{rate}</p>
            </span>
            <span className={styles.wrapper}>
              <img src={iconMap} className={styles.iconMap} alt="icon-map" />
              <Card.Text className={styles.locationText}>{location}</Card.Text>
            </span>
          </div>
          <div className={styles.line} />
          <div className={styles.padding}>
            <Row>
              <Col sm={6} md={6}>
                <h6 className={styles.subTitle}>Plafon</h6>
                <p className={styles.value}>{plafon}</p>
              </Col>
              <Col sm={6} md={6}>
                <h6 className={styles.subTitle}>Tenor</h6>
                <p className={styles.value}>{tenor} Minggu</p>
              </Col>
            </Row>
            <ProgressBar now={80} label="24/30" />
            <div className={styles.note}>Sisa waktu {remainingTime} hari</div>
          </div>
          <div className={styles.line} />
          <div className={styles.padding}>
            <div className={styles.center}>
              <Button
                variant="primary"
                href={"/pendanaan/detail/" + id}
                className={styles.btn}
              >
                Lihat Pendanaan
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

FundingCard.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  address: PropTypes.string,
};

export default FundingCard;
