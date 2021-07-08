import { Link } from 'react-router-dom';

import { Container, Row, Col, Image, ProgressBar, Card, Button, Form } from 'react-bootstrap';
import fundingData from "../../../assets/dummy/funding.data.json";
import iconMap from "../../../assets/ic-map.svg";

import styles from './PendanaanDetail.module.css';
import CustomModal from '../../atom/CustomModal';
import React from 'react';

const PendanaanDetailContent = ({id}) => {
    const [show, setShow] = React.useState(false);
    const index = id - 1;

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <Container>
            <Row className={styles.top}>
                <Col xs={12} md={3} lg={3}>
                    <Image style={{borderRadius: "10px"}} src={fundingData[index].image} alt="" fluid /> 
                    <h3 className={styles.name}>{fundingData[index].name}</h3>
                    <span className={styles.wrapper}>
                        <img src={iconMap} className={styles.iconMap} />
                        <h6 className={styles.locationText}>
                            {fundingData[index].location}
                        </h6>
                    </span>
                </Col>
                
                <Col xs={12} sm={5} md={5} lg={5}>
                    <span className={styles.wrapperCenter}>
                        <h6>Rp. {fundingData[index].dana.terkumpul}</h6>
                        <h6 className={styles.subTitle}>dari Rp. {fundingData[index].dana.target}</h6>
                    </span>
                    <ProgressBar now={80} className={styles.progress} />
                    <h6 className={`${styles.subTitle2} ${styles.marginBottom}`}>Status: <span className={styles.warnaBiru}>Dibuka</span></h6>
                    <Row>
                        <Col xs={12} md={4} lg={4} className={styles.itemPendanaan}>
                            <h6 className={`${styles.subTitle2} ${styles.subTitle}`}>Proyek Dibuka</h6>
                            <h6>23 Juli 2021</h6>
                        </Col>
                        <Col xs={12} md={4} lg={4} className={styles.itemPendanaan}>
                            <h6 className={`${styles.subTitle2} ${styles.subTitle}`}>Proyek Berjalan</h6>
                            <h6>23 Juli 2021</h6>
                        </Col>
                        <Col xs={12} md={4} lg={4} className={styles.itemPendanaan}>
                            <h6 className={`${styles.subTitle2} ${styles.subTitle}`}>Proyek Ditutup</h6>
                            <h6>1 Mei 2020</h6>
                        </Col>
                        <Col xs={12} md={4} lg={4} className={styles.itemPendanaan}>
                            <h6 className={`${styles.subTitle2} ${styles.subTitle}`}>Tenor</h6>
                            <h6>6 bulan</h6>
                        </Col>
                        <Col xs={12} md={4} lg={4} className={styles.itemPendanaan}>
                            <h6 className={`${styles.subTitle2} ${styles.subTitle}`}>Bagi hasil</h6>
                            <h6>12% / tahun</h6>
                        </Col>
                        <Col xs={12} md={4} lg={4} className={styles.itemPendanaan}>
                            <h6 className={`${styles.subTitle2} ${styles.subTitle}`}>Proyek Ditutup</h6>
                            <h6>Rp. 100.000</h6>
                        </Col>
                        <Col xs={12} md={4} lg={4} className={styles.itemPendanaan}>
                            <h6 className={`${styles.subTitle2} ${styles.subTitle}`}>Tersisa</h6>
                            <h6>30 slot</h6>
                        </Col>
                        <Col xs={12} md={4} lg={4} className={styles.itemPendanaan}>
                            <h6 className={`${styles.subTitle2} ${styles.subTitle}`}>Terdanai</h6>
                            <h6>70 slot</h6>
                        </Col>
                        <Col xs={12} md={4} lg={4} className={styles.itemPendanaan}>
                            <h6 className={`${styles.subTitle2} ${styles.subTitle}`}>Total slot</h6>
                            <h6>100 slot</h6>
                        </Col>
                    </Row>
                </Col>

                <Col xs={12} sm={4} md={4} lg={4} >
                    <Card className={styles.cardSetPendanaan}>
                        <Card.Body>
                            <h5 className={styles.cardTitle}>Mulai Pendanaan</h5>
                            <div className={styles.inputGroupCard}>
                                <h6 className={`${styles.subTitle2} ${styles.subTitle3}`}>Jumlah Slot Disalurkan</h6>
                                <Form className={styles.selectInputCardWrapper}>
                                    <Form.Group controlId="exampleForm.SelectCustom" className={styles.selectInputCard}>
                                        <Form.Control as="select" custom>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <h6>Rp. 100.000</h6>
                                </Form>
                            </div>
                            <div className={styles.inputGroupCard}>
                                <h6 className={`${styles.subTitle2} ${styles.subTitle3}`}>Total Pengembalian Hingga</h6>
                                <Button className={styles.btnDisable} variant="outline-secondary">Rp. 102.040</Button>
                                <div className={styles.note}>
                                    12% Keuntungan
                                </div>
                            </div>
                            <Button variant="primary" className={styles.btn} onClick={handleShow} style={{borderRadius: "8px"}}>Salurkan Pendanaan</Button>
                            <Button variant="outline-primary" href="#" className={styles.btn}>Lihat Rincian Pendanaan</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className={styles.bottom}>
                <Col xs={12} md={8} lg={8}>
                    <h3 className={styles.name}>Deskripsi</h3>
                    <p style={{lineHeight: '34px', marginTop: '20px'}}>
                    Menggunakan hijab merupakan sebuah kewajiban bagi muslimah. Indonesia merupakan salah satu negara dengan penduduk muslim terbanyak di dunia. Hijab masa kini juga memiliki varian warna dan model yang lebih bervariatif serta harganya yang relatif murah. Usaha ini dimulai pada tahun 2018. Pada awalnya, usaha ini fokus pada penjualan online di berbagai marketplace. Namun seiring berkembangnya zaman, banyak kompetitor baru yang juga berjualan hijab. Persaingan harga yang ketat pada marketplace menjadikan usaha ini kerap turun dan naik. <br /> <br />
    
                    Untuk permodalan pelaku usaha menggunakan uang pribadi (gaji dan tabungan), lalu keuntungan dari penjualan digunakan untuk mengembangkan bisnisnya. Namun hal ini kurang efektif karena keuntungan yang naik-turun menyebabkan pelaku usaha kesulitan mengembangkan produknya. Persaingan dengan kompetitor baru mengharuskan pelaku usaha terus berinovasi dengan model dan warna hijabnya sehingga tidak kalah saing. <br /> <br />
    
                    Pemasaran produk mereka melalui sosial media seperti Instagram dan status Whatsapp, dan di marketplace seperti Shopee, Lazada dan Tokopedia. Lalu pelaku usaha juga membuka toko offline di rumahnya. <br /> <br />
    
                    </p>
                </Col>
            </Row>
            <CustomModal handleClose={handleClose} show={show} type='detail-pendanaan' />
        </Container>
    )
}

export default PendanaanDetailContent;