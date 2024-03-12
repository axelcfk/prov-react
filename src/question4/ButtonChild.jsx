import { useTheme } from "./ThemeContext";

export default function ButtonChild() {
  const { ToggleTheme } = useTheme();

  return (
    <div>
      <button onClick={ToggleTheme}>Change Theme</button>
    </div>
  );
}
