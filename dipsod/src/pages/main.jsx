import React from "react";
import Stages from "../components/stepsWorks";
import InfoBlocks from "../components/InfoBlocks";
import FormUrHelp from "../components/formUrHelp";
import FAQSection from "../components/FAQSection";

const Home = () => {
  return (
    <main>
      <InfoBlocks />
      <Stages />
      <FAQSection />
      <FormUrHelp />
    </main>
  );
};

export default Home;
