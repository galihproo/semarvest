import React from "react";

import Container from 'react-bootstrap/Container';

import Topbar from '../components/molekul/Topbar';
import FormRegister from '../components/molekul/FormRegister';
import Footer from '../components/molekul/Footer';

export default function Login() {

  const formName = "daftar-investor"

  const initialValueForm = {
    fullName: '',
    phone: '',
    email: '',
    // password: '',
    // retryPassword: '',
  }

  const [form, setForm] = React.useState(initialValueForm)

  return (
    <>
      <Container>
        
        <Topbar />
        <FormRegister formName={formName} form={form} setForm={setForm} />

      </Container>

      <Footer />
    </>
  )
}
