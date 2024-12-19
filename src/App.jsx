import { useState } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Homepage from "./pages/Homepage/Homepage";
import Header from "./component/header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <Header />
      <Homepage />

      {/* <Routes>
          <Route path="/" element={<Navigate to="/products" replace />} />
          <Route path="/products" element={<Products />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/products/:id" element={<Details />} />
          <Route path="/*" element={<Notfound />} />
          </Routes> */}
    </div>
  );
}

export default App;
