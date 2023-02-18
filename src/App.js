import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPageContainer from "./pages/main/MainPageContainer";
import Page1 from "./pages/page1/Page1";
import Page2 from "./pages/page2/Page2";
import Page3 from "./pages/page3/Page3";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPageContainer />} />
        <Route exact path="/page1" element={<Page1 />} />
        <Route exact path="/page2" element={<Page2 />} />
        <Route exact path="/page3" element={<Page3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
