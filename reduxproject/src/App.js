import {useSelector,useDispatch} from 'react-redux'
import './App.css';
import {actions} from './store/index';



function App() {
  const counter  = useSelector((state)=>state.counter);
  const dispatch = useDispatch();
  const Increment  = ()=>{
                          dispatch(actions.increment());
    }
  const Decrement  = ()=>{
    dispatch(actions.Decrement());
  }

 const addby = ()=>{
    dispatch(actions.AddBy(100));
    
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
