import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import logo from '../../assets/logo.svg';
import heroes from '../../assets/heroes.png';

import './styles.css';

export default function Logon({ history }) {
  const [id, setId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert('Erro no login, tente novamente');
    }
  };
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logo} alt="Be The Hero" />

        <form onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>

          <input
            placeholder="Seu ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button className="button" type="submit">
            Entrar
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroes} alt="Heroes" />
    </div>
  );
}
