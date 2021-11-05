import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "./state";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { withdrawMony, depositeMoney, bankrupt } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const amount = useSelector((state: State.State) => state.bank);

  return (
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={() => depositeMoney(100)}>deposite</button>
      <button onClick={() => withdrawMony(500)}>withdraw</button>
      <button onClick={() => bankrupt()}>bankrupt</button>
    </div>
  );
}

export default App;
