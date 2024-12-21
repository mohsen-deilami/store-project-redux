import { useState } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Homepage from "./pages/Homepage/Homepage";
import Header from "./component/header/Header";
import Details from "./pages/details/Details";
import Notfound from "./pages/notfound/Notfound";
import Checkout from "./pages/checkout/Checkout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <Header />
     <Routes>
          <Route path="/" element={<Navigate to="/homepage" replace />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/checkout" element={<Checkout />} /> 
          <Route path="/products/:id" element={<Details />}/>
           <Route path="/*" element={<Notfound />} /> 
          </Routes> 
    </div>
  );
}

export default App;
