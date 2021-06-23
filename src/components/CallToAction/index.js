import { Button } from "react-bootstrap";

import styles from './CallToAction.module.css';

const CallToAction = () => {
    return (
        <section className={styles.cta}>
            <h1 className={styles.ctaHeading}>Siap menerima perubahan?</h1>
            <Button variant="primary" className={styles.ctaButton}>Mulai Sekarang</Button>
        </section>
    )
}

export default CallToAction;