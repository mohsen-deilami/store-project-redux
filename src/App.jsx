import { useState } from 'react'
import { Navigate, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.container}>
      react
    {/* <Routes>
          <Route path="/" element={<Navigate to="/products" replace />} />
          <Route path="/products" element={<Products />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/products/:id" element={<Details />} />
          <Route path="/*" element={<Notfound />} />
        </Routes> */}
    </div>
  )
}

export default App
