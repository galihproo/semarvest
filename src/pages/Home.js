import "./Home.css";

import Container from "react-bootstrap/Container";
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import WhyUs from '../components/WhyUs';
import CallToAction from "../components/CallToAction";
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Hero />

      <Container>
        <Feature />
        <WhyUs />
      </Container>

      <CallToAction />

      <Footer />
    </>
  )
}
