import React from "react";

import Container from 'react-bootstrap/Container';

import Topbar from '../components/molekul/Topbar';
import FormRegister from '../components/molekul/FormRegister';
import Footer from '../components/molekul/Footer';

export default function RegisterInvestor() {

  const formName = "daftar-investor"

  const initialValueForm = {
    fullName: '',
    phone: '',
    email: '',
    // password: '',
    // retryPassword: '',
  }

  const [form, setForm] = React.useState(initialValueForm)
  const [loading, setLoading] = React.useState(false)

  const submit = (e) => {
      e.preventDefault()
      setLoading(true)

      const scriptURL = 'https://script.google.com/macros/s/AKfycbzhXeLrknPhktpBEULo0yU8XtsmRboFtCSYKDc3UQuEGPMnk5O5ykfnM69K8UJcix_K/exec';
      const formBody = document.forms[formName]

      fetch(scriptURL, { method: 'POST', body: new FormData(formBody)})
      .then(response => {
        console.log('Success!', response);
        setForm(initialValueForm);
      })
      .catch(error => console.error('Error!', error.message))
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
      <Container>
        
        <Topbar />
        <FormRegister formName={formName} form={form} setForm={setForm} submit={submit} loading={loading} />

      </Container>

      <Footer />
    </>
  )
}
