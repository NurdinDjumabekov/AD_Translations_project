import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/hoc/Layout";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Layout />}></Route> */}
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

export default App;
