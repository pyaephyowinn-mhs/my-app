import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import PostDetail from "./routes/PostDetail";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/:pid" element={<PostDetail />} />
    </Routes>
  );
}

export default App;
