import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProductDetails from "./component/ProductDetails";
import LoginPage from "./component/layout/LoginPage";
import Product from "./component/layout/Product"; // إذا كان موجودًا في مجلد component

import Home from "./component/layout/Home"
import "./index.css";
import Profile from "./component/layout/Profile";
import Navbar from "./component/Navbar";
import ProtectedRoute from "./component/ProtectedRoute";
import Checkout from './component/Checkout';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route 
            path="/products" 
            element={
              <ProtectedRoute>
                <Product />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/product/:id" 
            element={
              <ProtectedRoute>
                <ProductDetails />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } 
          />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
