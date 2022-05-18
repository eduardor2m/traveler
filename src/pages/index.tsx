import { useState } from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const [salary, setSalary] = useState(0);

  function handleCalcSalary() {
    console.log('Salário Calculado');
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>Digite o seu salário: </p>
        <input
          title="salary"
          placeholder="Salário Bruto"
          type="number"
          onChange={(e) => setSalary(Number(e.target.value))}
        />

        <button onClick={() => handleCalcSalary()}>
          Calcular Salário Liquido
        </button>

        <p>{salary}</p>
      </main>
    </div>
  );
};

export default Home;
