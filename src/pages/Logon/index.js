import React from 'react';

import { FiLogIn } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import heroes from '../../assets/heroes.png';

import './styles.css';

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logo} alt="Be The Hero" />

        <form>
          <h1>Faça seu login</h1>

          <input placeholder="Seu ID" />
          <button className="button" type="submit">
            Entrar
          </button>

          <a href="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </a>
        </form>
      </section>
      <img src={heroes} alt="Heroes" />
    </div>
  );
}
