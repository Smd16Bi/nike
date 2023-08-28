import React from "react";
import { useLocation } from "react-router-dom";
import Loyaut from "./loyaut/Loyaut";
import { Banner } from "./components";
import { fetchData } from "./redux/slices/data";
import { useDispatch } from "react-redux";
import { fetchLocales } from "./redux/slices/localesSlice";


const App: React.FC = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const path = `https://64e0ba7c50713530432c9c03.mockapi.io/${pathname.includes("/uk") ? "Uk" : "En"}`;
  const lang = `${process.env.PUBLIC_URL}/locales/${pathname.includes("/uk") ? "uk" : "en"}.json`;


  React.useEffect(() => {
    getData(path);
    getLocales(lang)
  }, [pathname]);

  const getData = async (path: string) => {
    dispatch(
      //@ts-ignore
      fetchData(path)
    );
  };
  const getLocales = async (path: string) => {
    dispatch(
      //@ts-ignore
      fetchLocales(path)
    );
  };

  return (
    <Loyaut>
      <Banner />
    </Loyaut>
  );
};

export default App;
