import { useState } from "react";

export default function Panel({ children, title, collapsible }) {
  const [isCollapsible, setIsCollapsible] = useState(collapsible);

  function setCollapsible() {
    setIsCollapsible(!isCollapsible);
  }

  console.log(isCollapsible);

  return (
    <div>
      <h1>{title}</h1>

      {isCollapsible && title == "Panel 1" ? <div> {children}</div> : null}
      {isCollapsible && title == "Panel 1" ? (
        <button onClick={setCollapsible}>Visa mindre</button>
      ) : (
        <>
          <button onClick={setCollapsible}>Visa mer</button>
        </>
      )}
    </div>
  );
}
