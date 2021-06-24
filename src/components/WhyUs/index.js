import { Row, Col,Card } from "react-bootstrap";

import styles from './WhyUs.module.css';

import IconFunding from '../../assets/ic-modal.svg';
import IconManage from '../../assets/ic-pengelolaan.svg';
import IconFinding from '../../assets/ic-temukan.svg';
import IconLocation from '../../assets/ic-location.svg';
import IconAccess from '../../assets/ic-accessibility.svg';
import IconDevice from '../../assets/ic-device.svg';

const WhyUs = () => {
    return (
        <section className={styles.whyUs}>
            <h2 className={`${styles.whyUsHeading} text-center text-lg-left`}>Kenapa harus SemarVest?</h2>
            <Row xs={1} md={2} lg={3}>
                <Col>
                    <Card className={styles.whyUsCard}>
                        <Card.Img variant="top" className={styles.cardImg} src={IconFunding} />
                        <Card.Title className={styles.cardTitle}>
                            Modal yang transparan
                        </Card.Title>
                    </Card>
                </Col>

                <Col>
                    <Card className={styles.whyUsCard}>
                        <Card.Img variant="top" className={styles.cardImg} src={IconManage} />
                        <Card.Title className={styles.cardTitle}>
                            Pengelolaan bisnis untuk membimbing UMKM
                        </Card.Title>
                    </Card>
                </Col>

                <Col>
                    <Card className={styles.whyUsCard}>
                        <Card.Img variant="top" className={styles.cardImg} src={IconFinding} />
                        <Card.Title className={styles.cardTitle}>
                            Menemukan UMKM disekitar anda
                        </Card.Title>
                    </Card>
                </Col>

                <Col>
                    <Card className={styles.whyUsCard}>
                        <Card.Img variant="top" className={styles.cardImg} src={IconLocation} />
                        <Card.Title className={styles.cardTitle}>
                            Dapat digunakan dimana saja
                        </Card.Title>
                    </Card>
                </Col>

                <Col>
                    <Card className={styles.whyUsCard}>
                        <Card.Img variant="top" className={styles.cardImg} src={IconAccess} />
                        <Card.Title className={styles.cardTitle}>
                            Mudah untuk diakses
                        </Card.Title>
                    </Card>
                </Col>

                <Col>
                    <Card className={styles.whyUsCard}>
                        <Card.Img variant="top" className={styles.cardImg} src={IconDevice} />
                        <Card.Title className={styles.cardTitle}>
                            Dapat digunakan di semua device
                        </Card.Title>
                    </Card>
                </Col>
            </Row>
        </section>
    )
}

export default WhyUs;