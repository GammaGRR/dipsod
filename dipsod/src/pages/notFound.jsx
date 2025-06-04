import React from 'react';
import { Link } from 'react-router-dom';
import not from '../cache/img/NotFound.gif';
import InfoAddon from '../components/Info';

const NotFound = () => {
  return (
    <div>
      <div id = "Not__Found">
        <img src = {not} alt='404'/>
        <p>Перейдите на <Link to="/" id = "Colorage__Found">Главную страницу</Link></p>
      </div>
      <InfoAddon />
    </div>
  );
};

export default NotFound;