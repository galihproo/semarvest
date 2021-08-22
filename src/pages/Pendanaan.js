import React from "react";
import Container from "react-bootstrap/Container";

import Topbar from "../components/molekul/Topbar";
import Footer from "../components/molekul/Footer";
import FundingCardView from "../components/molekul/FundingCardView";
import Search from "../components/atom/Search";

export default function Pendanaan() {
  return (
    <>
      <div style={{ backgroundColor: "#F3F4F5" }}>
        <Container>
          <Topbar />
          <Search />
          <FundingCardView />
        </Container>
      </div>
      <Footer />
    </>
  );
}
