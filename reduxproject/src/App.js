import {useSelector,useDispatch} from 'react-redux'
import './App.css';



function App() {
  const counter  = useSelector((state)=>state.counter);
  const dispatch = useDispatch();
  const Increment  = ()=>{
                          dispatch({'type':'INC'});
    }
  const Decrement  = ()=>{
    dispatch({'type':'DEC'});
  }

 const addby = ()=>{
    dispatch({'type':'ADD' , payload : 200});
    
 }
  return (
    <div className="App">
      <h1>Counter app</h1>
      <h1>{counter}</h1>

      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={addby}>Add by 200</button>
    </div>
  );
}

export default App;
