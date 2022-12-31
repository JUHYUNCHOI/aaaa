import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPageContainer from "./pages/main/MainPageContainer";

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
