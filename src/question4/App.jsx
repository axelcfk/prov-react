// Context API för Temahantering (3p)
// Använd Context API för att skapa ett enkelt tema-byte-system.
// Skapa en ThemeContext som innehåller aktuellt tema (t.ex. "light" eller "dark").
// Använd en Provider från ThemeContext i App-komponenten nedanför.
// Skapa två barn-komponenter som använder temat.
// Skapa en tredje barn-komponent som innehåller en knapp som kan växla tema.
// Providern i App-komponenten ska omsluta de tre barn-komponenterna.

import ButtonChild from "./ButtonChild";
import Children1 from "./Children1";
import Children2 from "./Children1";
import { ThemeProvider } from "./ThemeContext";


function App() {
  return (
    <div className="dark:bg-slate-900 bg-slate-200">
      <ThemeProvider>
        <ButtonChild />
        <Children1 />
        <Children2 />
      </ThemeProvider>
    </div>
  );
}

export default App;
