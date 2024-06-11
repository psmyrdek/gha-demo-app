import {useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {decrease, increase} from "./utils/counterTransformer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Counter: {count}</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => increase(count))}>
          ⬆ Increase
        </button>
      </div>
      <div className='card'>
        <button onClick={() => setCount((count) => decrease(count))}>
          ⬇ Decrease
        </button>
      </div>
    </>
  );
}

export default App;
