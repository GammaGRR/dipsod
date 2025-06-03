import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/service-categories/"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleNavigation = () => {
    navigate('/#consultation-section');
    if (window.location.pathname === '/') {
      const element = document.getElementById('consultation-section');
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="main-services">
      {categories.map((category) => (
        <div key={category.id} className="service-category">
          <div className="category-header">
            <div className="category-icon">{category.icon}</div>
            <h2>{category.title}</h2>
            <span className="category-emoji">{category.emoji}</span>
          </div>
          <ul className="service-list">
            {category.services.map((service) => (
              <li key={service.id}>{service.name}</li>
            ))}
          </ul>
          <button
            className="service-button"
            onClick={handleNavigation}
          >
            Подробнее
            <span className="arrow">→</span>
          </button>
        </div>
      ))}
    </section>
  );
};

export default Category;
