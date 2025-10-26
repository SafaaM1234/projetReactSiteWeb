import React from "react";
import './Contact.css'
export default function Contact() {
      return (
    <section id="contact" className="contact-section">
      <h2>Contactez-nous</h2>
      <form className="contact-form">
         <input type="text" name="name" placeholder="Votre nom et prenom " required />
        <input type="email" name="email" placeholder="Votre email" required />
        <textarea name="message" placeholder="Votre message" required></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );

}