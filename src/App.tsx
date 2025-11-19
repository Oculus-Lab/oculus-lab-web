import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import { Navbar } from "./components/layout";
import { CustomCursor } from "./components/common";
import { useLenis } from "./hooks";

export default function App() {
  useLenis();

  return (
    <BrowserRouter>
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}