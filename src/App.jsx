import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Homepage from "./Pages/Homepage";
import ProductPage from "./Pages/ProductPage";
import Shop from "./Pages/Shop";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Route>
    </Routes>
  );
}

export default App;
