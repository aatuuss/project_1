import "./App.css";
import "./assets/stylebaru.scss";
// import Card from './components/card'
// import Button from './components/Button'
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Grid from "./components/Grid";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Beranda from "./pages/beranda/Beranda";
import Profil from "./pages/Profil";
import Navbar from "./components/Navbar";
import Detail from "./pages/Detail";
import Error from "./pages/Error";
import Product from "./pages/product/Product";
import ProductDetail from "./pages/productdetail/ProductDetail";
import Negara from "./pages/negara/Negara";
import DetailNegara from "./pages/DetailNegara";
import ThemeContext from "./components/context/ThemeContext";

export default function App() {
  const [data, setData] = useState("hallo");
  const [resto, setResto] = useState();

  // const ambilData = async () => {
  //   const response = await fetch("https://dummyjson.com/products")
  //   const data = await response.json()
  //   setResto(data)
  // }

  const ambilDataAxios = async () => {
    const response = await axios.get(
      "https://restaurant-api.dicoding.dev/list"
    );
    const data = await response.data;
    setResto(data);
  };

  useEffect(() => {
    // ambilData()
    ambilDataAxios();
  }, []);

  console.log(resto);

  const theme = useState("light");

  return (
    <BrowserRouter>
    <ThemeContext.Provider value={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
        <Route path="/product" element={<Product />} />
        <Route path="/produk/:id" element={<ProductDetail />} />
        <Route path="/negara" element={<Negara />} />
        <Route path="/detailnegara/:id" element={<DetailNegara />} />
      </Routes>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}
