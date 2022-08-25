import React from "react";
import Slider from "../components/Slider";

import Acerca from "../components/Acerca";
import Promociones from "../components/Promociones";
import Cinta from "../components/Cinta";

const Home = () => {
  return (
    <div>
      <Slider />
      <Acerca />
      <Promociones />
      <Cinta />
    </div>
  );
};

export default Home;
