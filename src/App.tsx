import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import { Navbar } from "./components/layout";
import { CustomCursor, LoadingScreen } from "./components/common";
import { LoadingProvider } from "./context/LoadingContext";
import { useLenis } from "./hooks";

export default function App() {
  useLenis();

  return (
    <LoadingProvider>
      <BrowserRouter>
        <LoadingScreen />
        <CustomCursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </LoadingProvider>
  );
}