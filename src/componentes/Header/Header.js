import React, { useState } from 'react';
import logo from '../../assets/barbearia-logo.png';
import lua from '../../assets/moon.png';
import sol from '../../assets/sun.png';
import styles from '../../componentes/Header/Header.module.css';

export const Header = () => {
  const [botao, setBotao] = useState('Dark');
  const [img, setImg] = useState(lua);
  const [classe, setClasse] = useState(styles.claro);
  const background = document.querySelector('button');

  const body = document.querySelector('body');

  const handleClick = () => {
    if (botao === 'Dark') {
      setBotao('Light');
      setImg(sol);
      setClasse(styles.dark);
      background.style.backgroundColor = '#252323';
      background.style.color = '#fff';
      body.style.backgroundColor = '#252323';
      body.style.color = '#fff';
    } else {
      setImg(lua);
      setBotao('Dark');
      setClasse(styles.claro);
      background.style.backgroundColor = '#fff';
      body.style.backgroundColor = '#fff';
      background.style.color = '#252323';
      body.style.color = '#000';
    }
  };
  return (
    <section>
      <header className={classe}>
        <nav className={styles.navBar}>
          <img className={styles.logo} src={logo} alt="" />

          <button onClick={handleClick} className={styles.tema}>
            <img className={styles.lua} src={img} alt="lua" /> {botao}
          </button>
        </nav>
      </header>
    </section>
  );
};
