import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPageContainer from "./pages/main/MainPageContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPageContainer />} />
        <Route exact path="/page1" element={<div>Page1</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
