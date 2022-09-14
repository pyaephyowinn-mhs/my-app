import "./App.css";
import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
import HomeContainer from "./container/homeContainer";
import PostDetail from "./pages/PostDetail";

function App() {
  return (
    <Routes>
      {/* <Route index element={<Home />} /> */}
      <Route index element={<HomeContainer />} />
      <Route path="/:pid" element={<PostDetail />} />
    </Routes>
  );
}

export default App;
