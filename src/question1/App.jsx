// 1. Lista med useState (3p)
// Skapa en komponent som visar en lista med hobbies.
// Användaren ska kunna lägga till en ny hobby via ett
// inputfält och en "Lägg till"-knapp. Varje hobby i listan
// ska ha en "Ta bort"-knapp som tar bort hobbyn från listan.
// Använd useState för att hantera listan.

import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [hobbies, setHobbies] = useState([]);

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  function handleAdd() {
    setHobbies([...hobbies, input]);
    setInput("");
  }

  function handleDelete(index) {
    const filteredHobbies = hobbies.filter((_, i) => i !== index);
    setHobbies(filteredHobbies);
  }

  return (
    <div className="flex flex-col">
      <input value={input} type="text" onChange={handleInputChange} />
      <button onClick={handleAdd}>Add</button>
      {hobbies.map((hobby, index) => (
        <ul>
          <li key={index}>{hobby}</li>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </ul>
      ))}
    </div>
  );
}
