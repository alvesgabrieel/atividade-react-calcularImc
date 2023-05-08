import { useState } from "react";

import styles from "../styles/Forms.module.css";

const Forms = () => {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [indiceIMC, setindiceIMC] = useState(0);

  const pesoAtual = (e) => {
    setPeso(e.target.value);
  };

  const alturaAtual = (e) => {
    setAltura(e.target.value / 100);
  };

  const calcularIMC = () => {
    setindiceIMC(peso / (altura * altura));
  };

  const resultadoFinal = () => {
    if (indiceIMC < 18.5) {
      return (
        <div>
          <p>Seu IMC é: {indiceIMC.toFixed(2)}</p>
          <p>
            Classificação:<span className={styles.yellow}>MAGREZA</span>
          </p>
        </div>
      );
    } else if (indiceIMC >= 18.5 && indiceIMC <= 24.9) {
      console.log(indiceIMC);
      return (
        <div>
          <p>Seu IMC é: {indiceIMC.toFixed(2)}</p>
          <p>
            Classificação:<span className={styles.green}>NORMAL</span>
          </p>
        </div>
      );
    } else if (indiceIMC >= 25 && indiceIMC <= 29.9) {
      return (
        <div>
          <p>Seu IMC é: {indiceIMC.toFixed(2)}</p>
          <p>
            Classificação:<span className={styles.blue}>SOBREPESO</span>
          </p>
        </div>
      );
    } else if (indiceIMC >= 30 && indiceIMC <= 39.9) {
      return (
        <div>
          <p>Seu IMC é: {indiceIMC.toFixed(2)}</p>
          <p>
            Classificação:<span className={styles.orange}>OBESIDADE</span>
          </p>
        </div>
      );
    } else if (indiceIMC > 40) {
      return (
        <div>
          <p>Seu IMC é: {indiceIMC.toFixed(2)}</p>
          <p>
            Classificação:<span className={styles.red}>OBESIDADE GRAVE</span>
          </p>
        </div>
      );
    }
  };

  return (
    <div className="container">
      <h1 className={styles.titulo}>Calcule seu Indice de Massa Corporal:</h1>
      <div className={styles.peso}>
        <h3 className={styles.subtitulos}>Peso(em KG):{peso}KG</h3>
        <input className={styles.input} type="number" onChange={pesoAtual} />
      </div>
      <div className={styles.altura}>
        <h3 className={styles.subtitulos}>Altura(em CM):{altura}m</h3>
        <input className={styles.input} type="number" onChange={alturaAtual} />
      </div>
      <button className={styles.btn} onClick={calcularIMC}>
        Calcular IMC
      </button>
      {indiceIMC !== 0 && (
        <div className={styles.resultado}>{resultadoFinal()}</div>
      )}
    </div>
  );
};

export default Forms;
