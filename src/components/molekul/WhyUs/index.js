import { Row } from "react-bootstrap";

import styles from './WhyUs.module.css';

import IconFunding from '../../../assets/ic-modal.svg';
import IconManage from '../../../assets/ic-pengelolaan.svg';
import IconFinding from '../../../assets/ic-temukan.svg';
import IconLocation from '../../../assets/ic-location.svg';
import IconAccess from '../../../assets/ic-accessibility.svg';
import IconDevice from '../../../assets/ic-device.svg';

import WhyUsCard from '../../atom/WhyUsCard';

const WhyUs = () => {
    const cardData = [
        {
            icon: IconFunding,
            title: "Modal yang transparan"
        },
        {
            icon: IconManage,
            title: "Pengelolaan bisnis untuk membimbing UMKM"
        },
        {
            icon: IconFinding,
            title: "Menemukan UMKM disekitar anda"
        },
        {
            icon: IconLocation,
            title: "Dapat digunakan dimana saja"
        },
        {
            icon: IconAccess,
            title: "Mudah untuk diakses"
        },
        {
            icon: IconDevice,
            title: "Dapat digunakan di semua device"
        }
    ]

    return (
        <section className={styles.whyUs}>
            <h2 className={`${styles.whyUsHeading} text-center text-lg-left`}>Kenapa harus SemarVest?</h2>
            <Row xs={1} md={2} lg={3}>

                {cardData.map((data, index) => (
                    <WhyUsCard 
                        key={index}
                        cardClass={styles.whyUsCard}
                        cardImgClass={styles.cardImg}
                        cardImgVariant="top"
                        icon={data.icon}
                        cardTitleClass={styles.cardTitle}
                        title={data.title}
                    />
                ))}
                
            </Row>
        </section>
    )
}

export default WhyUs;