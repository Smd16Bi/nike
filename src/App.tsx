import React from "react";
import { useLocation } from "react-router-dom";
import { localesUk } from "./locales/uk";
import { localesEn } from "./locales/en";

const App: React.FC = () => {
  const { pathname } = useLocation();
  const locales = pathname.includes("/uk") ? localesUk : localesEn;
  const nav = locales.general.nav

  

  return (
    <div>
    </div>
  );
};

export default App;
