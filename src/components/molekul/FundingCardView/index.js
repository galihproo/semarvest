import { Row } from "react-bootstrap";

import styles from './FundingCardView.module.css';

import FundingCard from '../../atom/FundingCard';
import fundingData from "../../../assets/dummy/funding.data.json";

const Funding = () => {

    return (
        <section className={styles.container}>
            <Row xs={1} md={2} lg={3}>

                {fundingData.map((data, index) => (
                    <>
                        <FundingCard 
                            key={index}
                            id={data.id}
                            image={data.image}
                            location={data.location}
                            plafon={data.dana.target}
                            rate={data.rate}
                            remainingTime={data.remaining_time}
                            tenor={data.tenor}
                            name={data.name}
                        />
                    </>
                ))}
                
            </Row>
        </section>
    )
}

export default Funding;