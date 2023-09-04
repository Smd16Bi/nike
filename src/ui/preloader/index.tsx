import React from "react";
import style from "./index.module.scss";
import { useSelector } from "react-redux";
import { selectData } from "../../redux/slices/data";
import { selectlocales } from "../../redux/slices/localesSlice";

const Preloader: React.FC = () => {
  const successStatus = "success";
  const statusData = useSelector(selectData).status;
  const statusLocales = useSelector(selectlocales).status;
  let classLoading = "";
  if (statusData === successStatus && statusLocales === successStatus) {
    classLoading = style.loaded;
  }

  return (
    <div className={`${style.loading_area} ${classLoading}`}>
      <div className={style.loader}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Preloader;
