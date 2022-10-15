
import "./App.css";
import Game from "./pages/Game";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Chat from "./pages/Chat";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Game/>}></Route>
            <Route path="/chat" element={<Chat/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
