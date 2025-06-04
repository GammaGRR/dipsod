import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const navigate = useNavigate();

  const faqItems = [
    {
      question: 'Как быстро я получу ответ на свой запрос?',
      answer: 'Наши юристы отвечают на первичные обращения в течение 1 рабочего дня. Для срочных вопросов доступна услуга экстренной консультации.'
    },
    {
      question: 'Какие гарантии вы предоставляете?',
      answer: 'Мы гарантируем полную конфиденциальность, профессиональный подход и соблюдение сроков, прописанных в договоре.'
    },
    {
      question: 'Возможно ли дистанционное сотрудничество?',
      answer: 'Да, мы оказываем полный спектр услуг онлайн: консультации по видеосвязи, электронный документооборот и цифровая подпись.'
    },
    {
      question: 'Как формируется стоимость услуг?',
      answer: 'Цена зависит от сложности дела, требуемых специалистов и сроков выполнения. Точная стоимость фиксируется в договоре после анализа документов.'
    }
  ];

  const handleNavigation = () => {
    navigate('/questens#consultation-section');
    if (window.location.pathname === '/questens') {
      const element = document.getElementById('consultation-section');
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="faq-section">
      <div className="faq-header">
        <h2>Частые вопросы</h2>
        <p>Ответы на самые популярные запросы наших клиентов</p>
      </div>

      <div className="faq-container">
        {faqItems.map((item, index) => (
          <div 
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <div className="faq-question">
              <h3>{item.question}</h3>
              <div className="accordion-icon">
                <div className="vertical-line"></div>
                <div className={`horizontal-line ${activeIndex === index ? 'active' : ''}`}></div>
              </div>
            </div>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="faq-cta">
        <p>Не нашли ответа? Задайте вопрос лично</p>
        <button className="cta-button" onClick={handleNavigation} >
          Задать вопрос юристу
        </button>
      </div>
    </section>
  );
};

export default FAQSection;