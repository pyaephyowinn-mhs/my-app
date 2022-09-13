import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/:pid" element={<PostDetail />} />
    </Routes>
  );
}

export default App;
