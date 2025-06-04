import React, { useState, useEffect } from "react";
import axios from "axios";

const Team = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/staff/employees/")
      .then((response) => {
        setEmployees(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка загрузки данных</div>;

  return (
    <main>
      <section className="team">
        <div className="team__inner">
          <h2 className="team__title">Наша команда</h2>
          <div className="team__grid">
            {employees.map((employee, index) => (
              <article key={index} className="member-card">
                <div
                  className="member-card__photo-wrap"
                  style={
                    employee.this_url
                      ? {
                          backgroundImage: `url(${employee.this_url})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }
                      : {}
                  }
                >
                  <div className="member-card__photo-container">
                    <img
                      src={employee.photo_url}
                      alt={employee.name}
                      className="member-card__photo"
                    />
                  </div>
                </div>
                <div className="member-card__info">
                  <h3 className="member-card__name">{employee.name}</h3>
                  <p className="member-card__position">{employee.position}</p>
                  <div className="member-card__divider"></div>
                  <p className="member-card__position">{employee.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Team;
