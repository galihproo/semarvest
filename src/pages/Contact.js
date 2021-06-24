import { useState } from "react";

import Container from 'react-bootstrap/Container';

import Topbar from '../components/Topbar';
import FormContact from '../components/FormContact';
import Footer from '../components/Footer';

export default function Contact() {
  const [show, setShow] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const [subjectValue, setSubjectValue] = useState('');
  const [messageValue, setMessageValue] = useState('');

  const handleClose = () => {
      setEmailValue('')
      setSubjectValue('')
      setMessageValue('')
      setShow(false)
  };

  const handleSubmit = (e) => {
      e.preventDefault()
      setShow(true)
  };

  return (
    <>
      <Container>
        
        <Topbar />
        <FormContact 
          handleSubmit={handleSubmit} 
          handleClose={handleClose}
          onEmailChange={(e) => setEmailValue(e.target.value)}
          onSubjectChange={(e) => setSubjectValue(e.target.value)}
          onMessageChange={(e) => setMessageValue(e.target.value)}
          emailValue={emailValue}
          subjectValue={subjectValue}
          messageValue={messageValue}
          show={show}
        />

      </Container>

      <Footer />
    </>
  )
}
