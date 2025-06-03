import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Questens = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:8000/api/consultation-message/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) throw new Error("Ошибка отправки");

      console.log("Данные успешно сохранены");
      setFormData({ name: "", phone: "", message: "" }); // Сброс формы
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };

  const formatPhoneNumber = (value) => {
    const numbers = value.replace(/\D/g, "");
    let trimmed = numbers.slice(0, 11);
    if (trimmed.length > 0 && !trimmed.startsWith("7")) {
      trimmed = "7" + trimmed.slice(1);
    }
    let formatted = "+7";
    if (trimmed.length > 1) {
      formatted += ` (${trimmed.slice(1, 4)}`;
    }
    if (trimmed.length >= 5) {
      formatted += `) ${trimmed.slice(4, 7)}`;
    }
    if (trimmed.length >= 8) {
      formatted += `-${trimmed.slice(7, 9)}`;
    }
    if (trimmed.length >= 10) {
      formatted += `${trimmed.slice(9, 11)}`;
    }

    return formatted;
  };

  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#consultation-section") {
      const element = document.getElementById("consultation-section");
      element?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [location.hash]);

  const handleMessageChange = (e) => {
    const inputValue = e.target.value;
    const forbiddenCharacters = /[@#$%^&*_+={}[\]\\|;:'",<>/]/g;

    if (forbiddenCharacters.test(inputValue)) {
      const cleanValue = inputValue.replace(forbiddenCharacters, "");
      setFormData((prev) => ({ ...prev, message: cleanValue }));
    } else {
      setFormData((prev) => ({ ...prev, message: inputValue }));
    }
  };

  const handleNameChange = (e) => {
    const inputValue = e.target.value;
    const cleanValue = inputValue.replace(/[^a-zA-Zа-яА-ЯёЁ\s-]/g, '');
    setFormData((prev) => ({ ...prev, name: cleanValue }));
  };

  return (
    <section className="consultation-section" id="consultation-section">
      <div className="legal-grid-bg">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="grid-item" />
        ))}
      </div>
      <div className="consultation-container">
        <div className="form-header">
          <h2>Задайте свой вопрос профессионалу</h2>
          <p className="form-subtitle">
            Заполните форму заявки, чтобы получить первую бесплатную
            консультацию по Вашей ситуации
          </p>
          <div className="divider-line" />
        </div>
        <form onSubmit={handleSubmit} className="consultation-form">
          <div className="form-step">
            <span className="step-number">1</span>
            <div className="form-group">
              <label>Ваше ФИО</label>
              <input
                type="text"
                required
                placeholder="Иванов Иван Иванович"
                value={formData.name}
                onChange={handleNameChange}
              />
            </div>
          </div>
          <div className="form-step">
            <span className="step-number">2</span>
            <div className="form-group">
              <label>Номер телефона</label>
              <input
                type="tel"
                required
                placeholder="+7 (999) 999-9999"
                value={formData.phone}
                pattern="\+7\s\(\d{3}\)\s\d{3}-\d{2}\d{2}"
                onChange={(e) => {
                  const formatted = formatPhoneNumber(e.target.value);
                  setFormData({ ...formData, phone: formatted });
                }}
              />
            </div>
          </div>
          <div className="form-step">
            <span className="step-number">3</span>
            <div className="form-group">
              <label>Ваше сообщение</label>
              <textarea
                required
                placeholder="Мне нужна консультация..."
                value={formData.message}
                onChange={handleMessageChange}
              />
            </div>
          </div>
          <button type="submit" className="submit-btn">
            Получить консультацию
          </button>
          <p className="form-notice">
            Нажимая кнопку, вы даете согласие на обработку персональных данных
          </p>
        </form>
        <div className="company-info">
          <h3>ООО "СОДЕЙСТВИЕ"</h3>
          <p>Юридическая компания</p>
        </div>
      </div>
    </section>
  );
};

export default Questens;
