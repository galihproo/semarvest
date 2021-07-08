import PropTypes from 'prop-types';

import Slider from "react-slick";

import PrevArrow from '../../../assets/arrow-left.svg';
import NextArrow from '../../../assets/arrow-right.svg';

import FundingCard from '../../atom/FundingCard';
import fundingData from "../../../assets/dummy/funding.data.json";

import styles from './FundingHorizontalView.module.css';

const FundingHorizontalView = () => {

    function SlickNextArrow({ onClick }) {
        return (
            <img
                src={NextArrow}
                style={{ width: "60px", height: "60px", position: "absolute", top: "30%", right: "-60px", zIndex: "99", cursor: "pointer" }}
                onClick={onClick}
                alt="next icon"
            />
        );
    }
      
    function SlickPrevArrow({ onClick }) {
        return (
            <img
                src={PrevArrow}
                style={{ width: "60px", height: "60px", position: "absolute", top: "30%", left: "-60px", zIndex: "99", cursor: "pointer" }}
                onClick={onClick}
                alt="prev icon"
            />
        );
    }

    function SlickNextArrowMobile({ onClick }) {
        return (
            <img
                src={NextArrow}
                style={{ width: "50px", height: "50px", position: "absolute", top: "40%", right: "0", zIndex: "99", cursor: "pointer" }}
                onClick={onClick}
                alt="next icon"
            />
        );
    }
      
    function SlickPrevArrowMobile({ onClick }) {
        return (
            <img
                src={PrevArrow}
                style={{ width: "50px", height: "50px", position: "absolute", top: "40%", left: "0", zIndex: "99", cursor: "pointer" }}
                onClick={onClick}
                alt="prev icon"
            />
        );
    }

    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SlickNextArrow />,
        prevArrow: <SlickPrevArrow />,
        responsive: [
            {
              breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                nextArrow: <SlickNextArrowMobile />,
                prevArrow: <SlickPrevArrowMobile />,
              }
            }
        ]
    };

    const owlItem = fundingData.map((data, index) => (
        <FundingCard 
            key={index}
            id={data.id}
            image={data.image}
            location={data.location}
            name={data.name}
            plafon={data.dana.target}
            rate={data.rate}
            remainingTime={data.remaining_time}
            tenor={data.tenor}
        />
    ))

    return (
        <section className="mt-5">
            <h2 className={`${styles.partnerHeading} text-center text-lg-left`}>Mulai Pendanaan</h2>
            <Slider {...settings}>
                {owlItem}
            </Slider>
        </section>
    )
}

FundingHorizontalView.propTypes = {
    testimonialsData: PropTypes.array
}

export default FundingHorizontalView