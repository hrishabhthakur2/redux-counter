import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './features/counter/counterSlice'; // Adjust the path as needed

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch(); // Corrected variable name

  function handleIncrementClick() {
    dispatch(increment());
  }

  function handleDecrementClick() {
    dispatch(decrement());
  }

  return (
    <div className="container">
      <button onClick={handleIncrementClick}> + </button>
      <p>Count: {count}</p> {/* Ensure count is displayed */}
      <button onClick={handleDecrementClick}> - </button>
    </div>
  );
}

export default App;
