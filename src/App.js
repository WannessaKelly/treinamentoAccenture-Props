import ComponentePai from './Components/ComponentePai';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <h1>Olá {props.name}</h1>
      <strong>{props.primeira}</strong>
      <ComponentePai
      terceira={"Essa prosps será renderizada no ComponentePai.js"}
      quarta={props.segunda}/>
    </div>
  );
}

export default App;
