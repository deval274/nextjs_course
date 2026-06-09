// import { useCounterStore } from "../store/counterStore";
import CounterValue from "./CounterValue";
import CounterButtons from "./CounterButtons";

function Counter() {
  //   const { count, increase, decrease, reset } = useCounterStore();
  return (
    <div>
      {/* <h1>Count: {count}</h1>
      <button type="button" onClick={decrease}>
        -
      </button>
      <button type="button" onClick={increase}>
        +
      </button>
      <button type="button" onClick={reset}>
        Reset
      </button> */}
      <CounterValue />
      <CounterButtons />
    </div>
  );
}

export default Counter;
