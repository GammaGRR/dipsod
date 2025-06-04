import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../cache/icon/LogoSodeystvie.svg";
import Telegram from "../cache/icon/TelegramIconFooter.svg";
import Whatsapp from "../cache/icon/WhatsappIconFooter.svg";
import Vk from "../cache/icon/VkIconFooter.svg";
import Ok from "../cache/icon/OkIconFooter.svg";
import SearchIcon from "../cache/icon/SearchIcon.svg";
import "../style/index.css";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const searchData = [
    {
      title: "Главная",
      description: "Добро пожаловать на наш сайт",
      path: "/",
      keywords: ["главная", "home", "начало", "первый", "первая", "judge", "main"]
    },
    {
      title: "Услуги",
      description: "Наши юридические услуги",
      path: "/service",
      keywords: ["услуги", "services", "помощь", "помогать", "help"]
    },
    {
      title: "Команда",
      description: "Наши юристы и специалисты",
      path: "/team",
      keywords: ["команда", "юристы", "специалисты", "lawyer", "lawyers", "specialists", "team"]
    },
    {
      title: "О нас",
      description: "Информация о нашей компании",
      path: "/aboutUs",
      keywords: ["о нас", "about", "компания", "о компании", "о себе", "история"]
    },
    {
      title: "Контакты",
      description: "Как с нами связаться",
      path: "/contact",
      keywords: ["контакты", "contacts", "связь", "tel", "phone", "звонок", "позвонить"]
    },
    {
      title: "Вопросы",
      description: "Задайть вопрос",
      path: "/questens",
      keywords: ["вопрос", "questions", "помощь", "помогать", "help"]
    }
  ];

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.length > 2) {
      const results = searchData.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.keywords.some(kw => kw.toLowerCase().includes(query.toLowerCase()))
      );
      setSearchResults(results);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  };

  const handleResultClick = (path) => {
    navigate(path);
    setSearchQuery("");
    setSearchResults([]);
    setShowResults(false);
  };

  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="logo-block">
          <div className="Logo-footer">
            <img src={Logo} alt="logo" className="footer-logo" />
            <p className="company-name">ООО "СОДЕЙСТВИЕ"</p>
          </div>
          <p className="slogan">Профессионализм - решение проблем</p>
          <div className="search-container">
            <div className="search-box">
              <input
                type="text"
                placeholder="Поиск по сайту"
                className="search-input"
                value={searchQuery}
                onChange={handleSearch}
                onFocus={() => searchQuery.length > 2 && setShowResults(true)}
              />
              <img src={SearchIcon} alt="search" className="search-icon" />
            </div>
            {showResults && searchResults.length > 0 && (
              <div className="search-results-overlay" onClick={() => setShowResults(false)}>
                <div className="search-results-container" onClick={(e) => e.stopPropagation()}>
                  {searchResults.map((result, index) => (
                    <div 
                      key={index} 
                      className="search-hit"
                      onClick={() => handleResultClick(result.path)}
                    >
                      <h4>{result.title}</h4>
                      <p>{result.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="footer-section">
        <div className="Footer__navigation">
          <h4 className="info__name">Навигация</h4>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Главная
          </Link>
          <Link
            to="/service"
            className={location.pathname === "/service" ? "active" : ""}>
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
      </div>
      <div className="footer-section">
        <div className="info__block">
          <div className="contact-info">
            <h4 className="info__name">Контакты</h4>
            <p className="contact-item">info@sod.ru</p>
            <p className="contact-item">Рязань 8-800-555-55-55</p>
            <p className="contact-item">Москва 8-800-555-55-55</p>
          </div>
          <h4 className="info__name">Мессенджеры</h4>
          <div className="messenger__icon">
            <a href="https://web.telegram.org/k/" aria-label="Telegram">
              <img src={Telegram} alt="telegram" />
            </a>
            <a href="https://www.whatsapp.com/?lang=ru_RU" aria-label="Whatsapp">
              <img src={Whatsapp} alt="whatsapp" />
            </a>
            <a href="https://vk.com/" aria-label="VK">
              <img src={Vk} alt="vk" />
            </a>
            <a href="https://ok.ru/" aria-label="Odnoklassniki">
              <img src={Ok} alt="ok" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;