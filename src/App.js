import {useSelector, useDispatch} from 'react-redux'

function App() {
const counter = useSelector((state) => state.counter)
const dispatch = useDispatch();
const increment = () => {
   dispatch({type:'INC'}) 
}

const decrement = () => {
  dispatch({type:'DEC'})
}

const addBy = () => {
  dispatch({type: 'ADD',payload:10})
}

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{ counter }</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={addBy}>Add Value +10</button>
    </div>
  );
}

export default App;
