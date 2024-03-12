// 3. Custom Hook för counter (3p)
// Skapa en custom hook, useCounter, som hanterar en räknare.
// Denna hook ska tillhandahålla två funktioner: en för att öka
// räknarens värde och en för att minska den. Skriv kod i App-komponenten
// nedanför som använder din custom hook och visar räknarens värde
// samt två knappar för att öka och minska värdet.

import { useState } from "react";

export function useCounter(initialCount = 0) {
  const [count, setCount] = useState(initialCount);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrament() {
    setCount(count - 1);
  }

  return {
    count,
    handleIncrement,
    handleDecrament,
  };
}

function App() {
  const { count, handleDecrament, handleIncrement } = useCounter(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Incrament</button>
      <button onClick={handleDecrament}>Decrament</button>
    </div>
  );
}

export default App;
