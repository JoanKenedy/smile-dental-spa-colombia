import React from "react";
import Slider from "../components/Slider";

import Acerca from "../components/Acerca";
import Promociones from "../components/Promociones";
import Cinta from "../components/Cinta";
import Opiniones from "../components/Opiniones";
import Aseguradoras from "../components/Aseguradoras";

const Home = () => {
  return (
    <div>
      <Slider />
      <Acerca />
      <Promociones />
      <Cinta />
      <Opiniones />
      <Aseguradoras />
    </div>
  );
};

export default Home;
