import { useState, useEffect } from "react";
import axios from 'axios';

import Container from "react-bootstrap/Container";
import Hero from '../components/molekul/Hero';
import FundingHorizontalView from '../components/molekul/FundingHorizontalView';
import Feature from '../components/molekul/Feature';
import WhyUs from '../components/molekul/WhyUs';
import Partners from '../components/molekul/Partners';
import CallToAction from "../components/molekul/CallToAction";
import Footer from '../components/molekul/Footer';

export default function Home() {
  const [show, setShow] = useState(false);
  const [userData, setUsers] = useState([]);

  useEffect(() => {
      
    axios.get('https://randomuser.me/api/?results=10')
    .then(res => {
      setUsers(res.data.results)
    })

  }, [])

  const handleClose = () => {
      setShow(false)
  };

  const handleShow = (e) => {
      e.preventDefault()
      setShow(true)
  };

  return (
    <>
      <Hero
        show={show}
        handleShow={handleShow}
        handleClose={handleClose}
      />

      <Container>
        <FundingHorizontalView />
        <Feature />
        <WhyUs />
        {userData.length > 0 && <Partners userData={userData} />}

      </Container>

      <CallToAction />

      <Footer />
    </>
  )
}
