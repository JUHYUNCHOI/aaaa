import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPageContainer from "./pages/main/MainPageContainer";
import "./index.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPageContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
