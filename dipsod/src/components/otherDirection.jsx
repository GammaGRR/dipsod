import React from "react";

const OtherDirection = () => {
  return (
    <section className="additional-services">
      <h2>Специализированные направления</h2>
      <div className="additional-grid">
        <div className="additional-card">
          <h3>Налоговое право</h3>
          <p>Оптимизация налоговой нагрузки, споры с ФНС</p>
        </div>
        <div className="additional-card">
          <h3>Интеллектуальная собственность</h3>
          <p>Защита авторских прав, патентование</p>
        </div>
        <div className="additional-card">
          <h3>Антимонопольное право</h3>
          <p>Сопровождение проверок ФАС</p>
        </div>
      </div>
    </section>
  );
};

export default OtherDirection;
