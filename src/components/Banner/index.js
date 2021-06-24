import PropTypes from 'prop-types';

import { Col } from "react-bootstrap";

import styles from './Banner.module.css';

const Banner = ({ src, alt, xs, sm, md, lg }) => {
    return (
        <Col xs={xs} sm={sm} md={md} lg={lg}>
            <img 
                src={src} 
                className={styles.banner}
                alt={alt}
            />
        </Col>
    )
}

Banner.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    xs: PropTypes.string,
    sm: PropTypes.string,
    md: PropTypes.string,
    lg: PropTypes.string
}

export default Banner;