import PropTypes from 'prop-types';

import { Button, Col, FormControl, InputGroup } from "react-bootstrap";
import IconSearch from "../../../assets/ic-search.svg";

import styles from './Search.module.css';

const Search = ({ xs, sm, md, lg }) => {
    return (
        <Col xs={xs} sm={sm} md={md} lg={lg} className={styles.container}>
            <InputGroup className={styles.inputContainer}>
                <FormControl
                placeholder="Cari Pendanaan"
                aria-label="Cari Pendanaan"
                aria-describedby="basic-addon2"
                className={styles.inputSearch}
                />
                <InputGroup.Append>
                    <Button variant="light" className={styles.icon}>
                        <img src={IconSearch} alt="" />
                    </Button>
                </InputGroup.Append>
            </InputGroup>
        </Col>
    )
}

Search.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    xs: PropTypes.string,
    sm: PropTypes.string,
    md: PropTypes.string,
    lg: PropTypes.string
}

export default Search;