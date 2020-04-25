import React ,{Fragment} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {increment, decrement, bSignin, signin} from "../actions";
// import decrement from "../actions";
function App() {
  const counter = useSelector( state => state.counter)
  const isLogged = useSelector( state => state.isLogged)
  const button = useSelector( state => state.button)
  const dispatch = useDispatch()
  console.log(counter, isLogged);

  return (
    <div>
<h3>
  {counter}
  </h3>

       {isLogged ? <h3> important info</h3> : ""}

      
      <div>
      {/* <a href = "/auth/google">click here to signup</a> */}
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())} >-</button>

      <button onClick={()=>dispatch(signin())}>{isLogged ?"hide" : "show"}</button>

      </div>
</div>

  )
}

export default App;
