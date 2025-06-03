import React from "react";
import Category from "../components/category";
import ChooseUs from "../components/chooseUs";
import OtherDirection from "../components/otherDirection";

const ServicesPage = () => {
  return (
    <div className="services-page">
      <Category />
      <ChooseUs />
      <OtherDirection />
    </div>
  );
};

export default ServicesPage;
