import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MainAddon from "./addons/mainAddons";
import TeamAddon from "./addons/teamAddon";
import AboutUsAddon from "./addons/aboutUsAddon";
import ServicesAddon from "./addons/serviceAddon";
import ContactAddon from "./addons/contactAddon";
import QuestensAddon from "./addons/questensAddon";
import defaultBg from "../cache/img/MainBackground.jpg";
import teamBg from "../cache/img/law.jpg";
import aboutBg from "../cache/img/arc.jpg";
import contactBg from "../cache/img/ContactBg.jpg";
import serviceBg from "../cache/img/Teambackground.jpg";
import Logo from "../cache/icon/LogoSodeystvie.svg";
import whatsUp from "../cache/icon/WhatsappIcon.svg";
import Telegram from "../cache/icon/TelegramIcon.svg";

const pageConfig = {
  "/": {
    title: 'ООО "СОДЕЙСТВИЕ"',
    bgImage: defaultBg,
    navType: "main",
    AddonComponent: MainAddon,
  },
  "/service": {
    title: "Наши услуги",
    bgImage: serviceBg,
    navType: "services",
    AddonComponent: ServicesAddon,
  },
  "/team": {
    title: "Наши специалисты",
    bgImage: teamBg,
    navType: "team",
    AddonComponent: TeamAddon,
  },
  "/aboutUs": {
    title: "О Нас",
    bgImage: aboutBg,
    navType: "us",
    AddonComponent: AboutUsAddon,
  },
  "/contact": {
    title: "Контакты",
    bgImage: contactBg,
    navType: "contact",
    AddonComponent: ContactAddon,
  },
  "/questens":{
    title: "Задать вопрос",
    bgImage: contactBg,
    navType: "questens",
    AddonComponent: QuestensAddon,
  },
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const location = useLocation();
  const [headerData, setHeaderData] = useState(pageConfig["/"]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  useEffect(() => {
    const config = {
      ...pageConfig["/"],
      ...pageConfig[location.pathname],
    };
    setHeaderData(config);
    document.title = config.title;
  }, [location.pathname]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const CurrentAddon = headerData.AddonComponent;

  return (
    <header
      className="main-header"
      style={{ backgroundImage: `url(${headerData.bgImage})` }}
    >
      <div className="wrapper__logo">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          <div className="logo">
            <img src={Logo} alt="logo" />
            <p>ООО "СОДЕЙСТВИЕ"</p>
          </div>
        </Link>
        <div className="number">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Сменить тему"
            data-theme={theme}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          <a href="https://web.whatsapp.com/">
            <img src={whatsUp} alt="What's Up" />
          </a>
          <a href="https://web.telegram.org/k/">
            <img src={Telegram} alt="Telegram" />
          </a>
          <p>8-800-555-55-55</p>
        </div>
      </div>
      <nav className={isMenuOpen ? "active" : ""}>
        <div className="navigation">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Главная
          </Link>
          <Link
            to="/service"
            className={location.pathname === "/service" ? "active" : ""}
          >
            Услуги
          </Link>
          <Link
            to="/team"
            className={location.pathname === "/team" ? "active" : ""}
          >
            Команда юристов
          </Link>
          <Link
            to="/aboutUs"
            className={location.pathname === "/aboutUs" ? "active" : ""}
          >
            О Нас
          </Link>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >
            Контакты
          </Link>
        </div>
        <button
          className={`mobile-menu-btn ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {CurrentAddon && <CurrentAddon />}
    </header>
  );
};

export default Header;
