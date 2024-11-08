import { HomePage, ProductDetail, ProductsList } from "../pages";
import { Routes, Route } from "react-router-dom";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
};
