import  { useState, useMemo } from 'react';

// Función de cálculo costosa
const calcularValorCostoso = (numero) => {
  console.log('Calculando valor costoso...');
  let valor = 0;
  for (let i = 0; i < 100; i++) {
   valor += numero;
  }
  return valor;
};

const App1 = () => {
  const [contador, setContador] = useState(0);
  const [numero, setNumero] = useState(5);

  // Memorizar el valor calculado - solo cambia si numero del useState cambia.
  const valorMemorizado = useMemo(() => calcularValorCostoso(numero), [numero]);

  return (
    <div>
      <button onClick={() => setContador(contador + 1)}>Incrementar Contador</button>
      <p>Contador: {contador}</p>
      <button onClick={() => setNumero(numero + 1)}>Incrementar Número</button>
      <p>Número: {numero}</p>
      <p>Valor Costoso Memorizado: {valorMemorizado}</p>
    </div>
  );
};

export default App1;
