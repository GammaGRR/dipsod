import React from "react";
import Man from "../cache/img/Man.jpg";
import Woman from "../cache/img/Woman.jpg";
import WomanV2 from "../cache/img/Woman_v2.png";

const AboutUs = () => {
  return (
    <main className="about__section">
      <section className="about__intro">
        <h1 className="about__title">Главное о Нас</h1>
        <div className="about__content">
          <p className="about__text">
            Мы — современная юридическая организация, зарегистрированная 24
            апреля 2017 года в городе Михайлов. Наша миссия — предоставление
            высококачественных услуг в области права, нацеленных на
            удовлетворение потребностей клиентов и обеспечение их правовой
            безопасности.
          </p>
          <p className="about__text">
            Мы стремимся к постоянному развитию и совершенствованию, чтобы
            оставаться на передовой юридической практики и предлагать нашим
            клиентам актуальные и эффективные решения. Наши принципы работы —
            это юридическая компетентность, честность и внимание к деталям.
          </p>
          <p className="about__text">
            Мы уверены, что наше сотрудничество станет надежной основой для
            достижения ваших целей.
          </p>
        </div>
      </section>
      <article className="profile__card">
        <div className="profile-image__wrapper">
          <img
            src={Man}
            alt="Исаев Мурад Баласневич"
            className="profile__image"
          />
        </div>
        <div className="profile__content">
          <div className="profile__header">
            <h2 className="profile__name">Исаев Мурад Баласневич</h2>
            <p className="profile__position">Основатель ООО "СОДЕЙСТВИЕ"</p>
          </div>
          <div className="divider"></div>
          <div className="profile__description">
            <p className="profile__text">
              Наша миссия заключается в том, чтобы обеспечивать надежную
              правовую поддержку и защищать интересы наших клиентов. Мы
              понимаем, что вопросы права могут быть сложными и зачастую
              вызывают стресс. Поэтому мы стремимся сделать процесс максимально
              прозрачным и понятным.
            </p>
          </div>
        </div>
      </article>
      <article className="profile__card">
        <div className="profile-image__wrapper">
          <img
            src={Woman}
            alt="Исаева Анастасия Михайловна"
            className="profile__image"
          />
        </div>
        <div className="profile__content">
          <div className="profile__header">
            <h2 className="profile__name">Исаева Анастасия Михайловна</h2>
            <p className="profile__position">Основатель ООО "СОДЕЙСТВИЕ"</p>
          </div>
          <div className="divider"></div>
          <div className="profile__description">
            <p className="profile__text">
              Наша миссия заключается в том, чтобы обеспечивать надежную
              правовую поддержку и защищать интересы наших клиентов. Мы
              понимаем, что вопросы права могут быть сложными и зачастую
              вызывают стресс. Поэтому мы стремимся сделать процесс максимально
              прозрачным и понятным.
            </p>
          </div>
        </div>
      </article>
      <article className="profile__card">
        <div className="profile-image__wrapper">
          <img
            src={WomanV2}
            alt="Машинева Светлана Валерьевна"
            className="profile__image"
          />
        </div>
        <div className="profile__content">
          <div className="profile__header">
            <h2 className="profile__name">Машинева Светлана Валерьевна</h2>
            <p className="profile__position">Основатель ООО "СОДЕЙСТВИЕ"</p>
          </div>
          <div className="divider"></div>
          <div className="profile__description">
            <p className="profile__text">
              Наша миссия заключается в том, чтобы обеспечивать надежную
              правовую поддержку и защищать интересы наших клиентов. Мы
              понимаем, что вопросы права могут быть сложными и зачастую
              вызывают стресс. Поэтому мы стремимся сделать процесс максимально
              прозрачным и понятным.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
};

export default AboutUs;
