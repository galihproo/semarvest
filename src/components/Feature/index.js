import { Row, Col } from "react-bootstrap";

import styles from './Feature.module.css';

import FeatureBanner from '../../assets/feature-banner.png';
import FeatureIconFunding from '../../assets/ic-pendanaan.svg';
import FeatureIconTraining from '../../assets/ic-pelatihan.svg';
import FeatureIconTracking from '../../assets/ic-tracking.svg';

const Feature = () => {
    return (
        <section className={styles.featureSection}>
            <h2 className={styles.featureHeading}>Fitur kami</h2>
            <Row>
                <Col xs={12} lg={4}>
                    <img className={styles.featureBanner} src={FeatureBanner} alt="feature banner" />
                </Col>
                <Col xs={12} lg={8} className={styles.featureColRight}>
                    <Row className={styles.featureLists}>
                        <Col className={styles.featureItem}>
                            <div className={styles.featureIcon}>
                                <img src={FeatureIconFunding} alt="feature icon" />
                            </div>  
                            <div>
                                <h3>Pendanaan</h3>
                                <p>
                                    Fitur ini membantu mempertemukan pelaku usaha yang membutuhkan modal dengan investor
                                </p>
                            </div>
                        </Col>

                        <Col className={styles.featureItem}>
                            <div className={styles.featureIcon}>
                                <img src={FeatureIconTraining} alt="feature icon" />
                            </div>  
                            <div>
                                <h3>Pelatihan Bisnis</h3>
                                <p>
                                    Fitur untuk membimbing pelaku UMKM bagaimana cara mengelola dan mengembangkan bisnisnya dengan baik serta mengikuti perkembangan zaman
                                </p>
                            </div>
                        </Col>

                        <Col className={styles.featureItem}>
                            <div className={styles.featureIcon}>
                                <img src={FeatureIconTracking} alt="feature icon" />
                            </div>  
                            <div>
                                <h3>Tracking UMKM </h3>
                                <p>
                                    Fitur ini membantu pelaku usaha mengenalkan produknya melalui fitur tracking UMKM di lokal daerah
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section>
    )
}

export default Feature;