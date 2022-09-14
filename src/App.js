import { Route, Routes } from "react-router-dom";
import Home from "./container/homeContainer";
import PostDetails from "./container/postDetailsContainer";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/:pid" element={<PostDetails />} />
    </Routes>
  );
}

export default App;
