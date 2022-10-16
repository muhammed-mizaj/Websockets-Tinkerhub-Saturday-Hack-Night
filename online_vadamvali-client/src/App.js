
import "./App.css";
import Game from "./pages/Game";
import { Route, BrowserRouter, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Game/>}></Route>
            
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
