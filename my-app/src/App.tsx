import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import ButtonPageWithHook from "./pages/ButtonPageWithHook";
import Home from "./pages/Home";
import Button from "./pages/Button";
import ComponentArray from "./pages/ComponentArray";
import TodoPage from "./pages/TodoPage";
import FetchPage from "./pages/Fetch";
import LiftedState from "./pages/LiftedState";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/buttonhook" element={<ButtonPageWithHook />}></Route>
        <Route path="/button" element={<Button />}></Route>
        <Route path="/array" element={<ComponentArray />}></Route>
        <Route path="/todo" element={<TodoPage />}></Route>
        <Route path="/fetch" element={<FetchPage />}></Route>
        <Route path="/lifted" element={<LiftedState />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
