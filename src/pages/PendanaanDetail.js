import { useState } from "react";

import Container from 'react-bootstrap/Container';

import Topbar from '../components/molekul/Topbar';
import Footer from '../components/molekul/Footer';
import { useParams } from "react-router-dom";

export default function PendanaanDetail() {
  const { id } = useParams();

  return (
    <>
        <div style={{backgroundColor: "#F3F4F5"}}>
        <Container>
            
            <Topbar />

        </Container>

        </div>
        <Footer />
    </>
  )
}
