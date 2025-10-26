import React from "react";
import './Join.css'
export default function Join() {
      return (
    <section id="join" className="join-section">
      <h2>Rejoignez-nous !</h2>
      <form className="join-form">
        <input type="text" name="Lastname" placeholder="Votre nom" required />
        <input type="text" name="Firstname" placeholder="Votre prenom" required />
        <input type="text" name="filiere" placeholder="Votre filière" required />
        <input type="text" name="niveau" placeholder="Votre niveau d'étude" required />
        <input type="tel" name="phone" placeholder="Votre numéro de téléphone" required />
        <input type="email" name="email" placeholder="Votre email" required />
        <label className="messageDeRejoite">Pourquoi voulez-vous rejoindre notre club </label><textarea name="message" placeholder="Votre message"></textarea>
        <div className="form-buttons">
        <button type="submit">Envoyer</button>
         
        <button type="reset">Annuler</button>
        </div>
      </form>
    </section>
  );

}