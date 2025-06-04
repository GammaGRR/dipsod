import React, { useState, useEffect } from "react";
import "./style/index.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";
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

const WrapperWithLoading = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return loading ? <Preloader /> : children;
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <WrapperWithLoading>
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
        </WrapperWithLoading>
      </BrowserRouter>
    </div>
  );
};

export default App;
