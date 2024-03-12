import { useState } from "react";

export default function Panel({ children, title, collapsible }) {
  const [isCollapsible, setIsCollapsible] = useState(true);

  function setCollapsible() {
    setIsCollapsible(!isCollapsible);
  }

  console.log(isCollapsible);

  return (
    <div>
      <h1>{title}</h1>

      {isCollapsible ? <div> {children}</div> : null}
      {isCollapsible ? (
        <button onClick={setCollapsible}>Visa mindre</button>
      ) : (
        <button onClick={setCollapsible}>Visa mer</button>
      )}
    </div>
  );
}
