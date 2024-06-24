import { observer } from "mobx-react-lite";
import { counterStore } from "./counter.store";

const App = observer(() => {
  const { count, incr, decr, double } = counterStore;
  return (
    <div className="App">
      <h1>{count}</h1>
      <h2>{double}</h2>
      <button onClick={incr}>+</button>
      <button onClick={decr}>-</button>
    </div>
  );
});

export default App;
