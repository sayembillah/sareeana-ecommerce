import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Homepage from "./Pages/Homepage";
import ProductPage from "./Pages/ProductPage";
import Shop from "./Pages/Shop";
import About from "./Pages/About";
import Faq from "./Pages/Faq";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Route>
    </Routes>
  );
}

export default App;
