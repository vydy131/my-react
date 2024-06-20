import "./Button.css";

export function Button({ children }) {
  function handleClick() {
    console.log(`click at ${children}`);
  }

  function handleMouseEnter() {
    // console.log(`mouse at ${children}`)
  }

  return (
    <button
      className="button"
      onClick={handleClick}
      // onMouseEnter={() => {console.log(`mouse at ${children}`)}}
    >
      {children}
    </button>
  );
}
