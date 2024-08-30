import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import HomeTwo from "./Components/Home/HomeTwo";
import ErrorPage from "./Components/Pages/404Page";
import ContactUs from "./Components/Pages/ContactUs";
import Imprint from "./Components/Pages/Imprint";

function App() {
  return (
    <BrowserRouter>
      <div className="font-gilroy font-medium text-gray text-lg leading-[27px]">
        <Routes>
          <Route path="/" element={<HomeTwo />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
