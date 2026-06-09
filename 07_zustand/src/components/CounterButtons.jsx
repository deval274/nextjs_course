import { useCounterStore } from "../store/counterStore";

function CounterButtons() {
  const increase = useCounterStore((state) => state.increase);
  const decrease = useCounterStore((state) => state.decrease);
  const reset = useCounterStore((state) => state.reset);
  return (
    <div>
      <button type="button" onClick={increase}>
        +
      </button>
      <button type="button" onClick={decrease}>
        -
      </button>
      <button type="button" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default CounterButtons;
