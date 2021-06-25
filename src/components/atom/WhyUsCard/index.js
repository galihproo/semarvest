import PropTypes from 'prop-types';

import { Col, Card } from 'react-bootstrap';

const WhyUsCard = ({ cardClass, cardImgClass, cardImgVariant, icon, cardTitleClass, title }) => {
    return (
        <Col>
            <Card className={cardClass}>
                <Card.Img variant={cardImgVariant} className={cardImgClass} src={icon} />
                <Card.Title className={cardTitleClass}>
                    {title}
                </Card.Title>
            </Card>
        </Col>
    )
}

WhyUsCard.propTypes = {
    cardClass: PropTypes.string,
    cardImgClass: PropTypes.string,
    cardImgVariant: PropTypes.string,
    icon: PropTypes.string,
    cardTitleClass: PropTypes.string,
    title: PropTypes.string
}

export default WhyUsCard