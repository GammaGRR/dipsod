import React from 'react';

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: '⚖️',
      title: 'Профессионализм',
      text: 'Команда опытных юристов с подтверждённой экспертизой'
    },
    {
      icon: '🔒',
      title: 'Конфиденциальность',
      text: 'Полная защита персональных данных и коммерческой тайны'
    },
    {
      icon: '💼',
      title: 'Опыт работы',
      text: 'Более 15 лет успешной практики в различных отраслях права'
    },
    {
      icon: '🎯',
      title: 'Индивидуальный подход',
      text: 'Персональный юрист для каждого клиента и точечное решение задач'
    }
]
  return (
    <section className="advantages-section">
      <h2 className="section-title">ООО СОДЕЙСТВИЕ - Ваш надёжный партнёр</h2>
      <div className="advantages-grid">
        {advantages.map((advantage, index) => (
          <div key={index} className="advantage-card">
            <div className="advantage-icon">{advantage.icon}</div>
            <h3 className="advantage-title">{advantage.title}</h3>
            <p className="advantage-text">{advantage.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdvantagesSection;