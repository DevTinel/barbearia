import React from 'react';
import styles from '../Home/Home.module.css';

export const Home = () => {
  return (
    <section>
      <div className={styles.homeContainer}>
        <h1>Bem-vindo a Barber Shop</h1>
        <span>
          Nossa barbearia sempre oferece profissionais de qualidade e estamos
          prontos para lidar com suas maiores expectativas.
        </span>
        <p>
          Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma
          equipe premiada que demonstrou o talento de mestres barbeiros em
          vários concursos de estilo. Deixe nosso barbeiro ser seu estilista
          pessoal e você nunca ficará desapontado.
        </p>
        <blockquote className={styles.citacao}>S.Kelly</blockquote>
      </div>
    </section>
  );
};
