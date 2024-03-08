import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import ButtonPageWithHook from "./pages/ButtonPageWithHook";
import Home from "./pages/Home";
import Button from "./pages/Button";
import ComponentArray from "./pages/ComponentArray";
import TodoPage from "./pages/TodoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/buttonhook" element={<ButtonPageWithHook />}></Route>
        <Route path="/button" element={<Button />}></Route>
        <Route path="/array" element={<ComponentArray />}></Route>
        <Route path="/todo" element={<TodoPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
