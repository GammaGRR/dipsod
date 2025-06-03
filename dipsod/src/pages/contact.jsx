import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:8000/api/service-requests/",
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
      setFormData({ name: "", phone: "", service: "" }); // Сброс формы
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

  const handleNameChange = (e) => {
    const inputValue = e.target.value;
    const cleanValue = inputValue.replace(/[^a-zA-Zа-яА-ЯёЁ\s-]/g, '');
    setFormData((prev) => ({ ...prev, name: cleanValue }));
  };

  return (
    <main className="contact">
      <div className="contacts">
        <div className="contacts__item">
          <div className="contacts__icon">📍</div>
          <h4 className="contacts__title">Адрес</h4>
          <p className="contacts__text">
            391710, Рязанская область, м. р-н Михайловский, г. п. Михайловское,
            г. Михайлов, пл. Ленина, д. 11
            <br />
            пн-вс: 09:00 - 20:00
          </p>
        </div>
        <div className="contacts__item">
          <div className="contacts__icon">✉️</div>
          <h4 className="contacts__title">Почта</h4>
          <p className="contacts__text">support@mail.ru</p>
        </div>
        <div className="contacts__item">
          <div className="contacts__icon">📞</div>
          <h4 className="contacts__title">Телефон</h4>
          <p className="contacts__text">+7-920-983-00-00</p>
        </div>
      </div>
      <div className="consultation">
        <h2 className="consultation__title">
          Не можете понять какая услуга нужна именно вам?
        </h2>
        <p className="consultation__text">
          Оставьте заявку на консультацию и наши юристы подскажут вам, как проще
          всего решить вашу проблему.
        </p>
      </div>
      <div className="form-section">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
          <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleNameChange}
              placeholder="Введите ФИО*"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={(e) => {
                const formatted = formatPhoneNumber(e.target.value);
                setFormData({ ...formData, phone: formatted });
              }}
              placeholder="Введите ваш телефон*"
              required
            />
          </div>
          <div className="form-group">
            <select
              required
              id="select__group"
              name="service"
              value={formData.service}
              onChange={(e) =>
                setFormData({ ...formData, service: e.target.value })
              }
            >
              <option value="">Выберите услугу*</option>
              <option value="consultation">Консультация</option>
              должны совпадать с SERVICE_CHOICES в модели Django
              <option value="family_law">Семейное право</option>
              <option value="housing_disputes">Жилищные споры</option>
              <option value="labor_disputes">Трудовые споры</option>
            </select>
          </div>
          <button id="contact__button" type="submit">
            Отправить заявку
          </button>
        </form>
      </div>
      <div className="map">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac508a2a3ff9cf24ab0fd288b5437a0b9d7cc971f56501c853b157fc847ea0c83&amp;source=constructor"
          width="100%"
          height="400"
          title="ООО Содействие"
          frameborder="0"
        ></iframe>
      </div>
    </main>
  );
};

export default Contact;
