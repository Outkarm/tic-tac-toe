import Board from "./components/Board";
import "./App.css";

function App() {
  const btns = [null, null, null, null, null, null, null, null, null];
  return (
    <div className="app">
      <Board bord={btns} />
    </div>
  );
}

export default App;
