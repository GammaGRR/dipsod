import React from "react";

const ChooseUs = () => {
  return (
    <section className="service-benefits">
      <h2>Почему выбирают нас</h2>
      <div className="benefits-grid">
        <div className="benefit-card">
          <div className="benefit-number">8+</div>
          <h3>Лет успешной практики</h3>
          <p>Опыт решения сложных правовых задач</p>
        </div>
        <div className="benefit-card">
          <div className="benefit-number">360°</div>
          <h3>Полный цикл услуг</h3>
          <p>От консультации до исполнения решения</p>
        </div>
        <div className="benefit-card">
          <div className="benefit-number">95%</div>
          <h3>Успешных дел</h3>
          <p>Выигранных судебных процессов</p>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;