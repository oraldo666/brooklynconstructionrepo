import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/includes/NavbarComponent";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import WorkPage from "./pages/WorkPage";

import FooterComponent from "./components/includes/FooterComponent";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <main className="mainSection">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/services" element={<ServicesPage />}></Route>
            <Route path="/work" element={<WorkPage />}></Route>
          </Routes>
        </main>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
