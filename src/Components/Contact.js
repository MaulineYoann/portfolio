import React, { useState, useRef } from 'react';
import '../styles/Contact.scss';
// import { send } from 'emailjs-com';
import * as emailjs from 'emailjs-com';
import Modal from './Modal';

const Contact = () => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleName = (e) => setName(e.target.value);
  const handleMail = (e) => setMail(e.target.value);
  const handleSubject = (e) => setSubject(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_yof2avg',
        'template_tn4tffp',
        e.target,
        'zpjhzWCiG5JCfzIPc'
      )
      .then((response) => {
        console.log('Succes !', response.status, response.text);
        setShowModal(true);
        setName('')
        setMail('')
        setSubject('')
        setMessage('')
      })
      .catch((err) => {
        console.log('failed...', err);
      });
  };
  return (
    <section className="Contact">
      <aside className="form">
        <h1>Contact</h1>
        <p>
          Un projet ? une mission ? N'hésitez pas à me contacter sur <pre/>
          <span>
            <a
              href="https://www.linkedin.com/in/yoann-mauline/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </span>{' '}
          ou via le formulaire ci-dessous. Je vous répondrai dans les plus
          brefs délais.
        </p>
        <form ref={form} onSubmit={sendEmail} className="contactForm">
          <input
            placeholder="Nom"
            type="text"
            name="from_name"
            required
            value={name}
            onChange={handleName}
          />

          <input
            placeholder="E-mail"
            type="email"
            name="reply_to"
            required
            value={mail}
            onChange={handleMail}
          />

          <input
            placeholder="Objet"
            type="text"
            name="subject"
            required
            value={subject}
            onChange={handleSubject}
          />

          <textarea
            placeholder="Votre texte ici ..."
            name="message"
            required
            value={message}
            onChange={handleMessage}
          ></textarea>

          <input type="submit" value="Envoyer" className="submit" />
        </form>
      </aside>
      {
        showModal && <Modal setShowModal={setShowModal}/>
      }
    </section>
  );
};

export default Contact;
