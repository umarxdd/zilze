import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import Policies from "./pages/Policies";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ScrollToTop from "./utils/ScrollToTop";
import Product from "./features/products/Product";
import SearchedProducts from "./features/products/SearchedProducts";
import RecentlyViewedProducts from "./features/products/RecentlyViewedProducts";
import Category from "./features/categories/Category";
import Skeleton from "./components/Skeleton";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/categories/:slug" element={<Category />} />
            <Route path="/products/:slug" element={<Product />} />
            <Route path="/search" element={<SearchedProducts />} />
            <Route
              path="/viewedProducts"
              element={<RecentlyViewedProducts />}
            />
          </Route>
          <Route path="/skeleton" element={<Skeleton size={20} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
