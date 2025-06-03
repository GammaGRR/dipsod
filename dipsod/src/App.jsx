import React, { useState, useEffect } from "react";
import "./style/index.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Service from "./pages/service";
import AboutUs from "./pages/aboutUs";
import Contact from "./pages/contact";
import Team from "./pages/team";
import Main from "./pages/main";
import NotFound from "./pages/notFound";
import Footer from "./components/Footer";
import InfoAddon from "./components/Info";
import Questens from "./pages/questensPage";
import Preloader from "./components/pre-loader";

// Создаем компонент для страниц с хедером, футером и содержанием
const LayoutWithHeader = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <InfoAddon />
    </>
  );
};

const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;


  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Все страницы с хедером */}
          <Route element={<LayoutWithHeader />}>
            <Route path="/" element={<Main />} />
            <Route path="/service" element={<Service />} />
            <Route path="/team" element={<Team />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/questens" element={<Questens />} />
          </Route>

          {/* Страницы без хедера */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
