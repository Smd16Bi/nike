import React from "react";
import { useLocation } from "react-router-dom";
import { localesUk } from "./locales/uk";
import { localesEn } from "./locales/en";
import Loyaut from "./loyaut/Loyaut";
import { Banner } from "./components";
import { fetchData } from "./redux/slices/data";
import { useDispatch } from "react-redux";

const App: React.FC = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const locales = pathname.includes("/uk") ? localesUk : localesEn;
  const path = `https://64e0ba7c50713530432c9c03.mockapi.io/${pathname.includes("/uk") ? "Uk" : "En"}`;

  React.useEffect(() => {
    getData(path);
  }, [pathname]);

  const getData = async (path: string) => {
    dispatch(
      //@ts-ignore
      fetchData(path)
    );
  };

  return (
    <Loyaut>
      <Banner />
    </Loyaut>
  );
};

export default App;
