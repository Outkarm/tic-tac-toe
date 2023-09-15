import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Game from "./components/Game";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" Component={Welcome} />
          <Route path="/game" Component={Game} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
