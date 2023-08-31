import React from "react";
import style from "./modal.module.scss";
import { useSelector } from "react-redux";
import { selectlocales } from "../../redux/slices/localesSlice";



type ModalProps = {
  isVisible: boolean;
  setVisible: (i: any) => void;
  id: number;
  name: string;
  description: string;
  price: number;
  color?: string;
  color_name?: string;
  size: string;
  material: string;
  style?: string;
};

const Modal: React.FC<ModalProps> = ({ isVisible, setVisible,name,description,color,size,material }) => {
  const { locales } = useSelector(selectlocales);
  return (
    <div
      onClick={() => setVisible(!isVisible)}
      className={isVisible ? `${style.modal} ${style.active}` : `${style.modal}`}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={style.wrapper}
      >
        <h3 className={style.name}>{name}</h3>
        <p className={style.description}>{description}</p>
        <p className={style.color}><span>{locales.banner.avalible_color}</span>: {color}</p>
        <p className={style.size}><span>{locales.banner.avalible_size}</span>: {size}</p>
        <p className={style.material}><span>{locales.banner.material}</span>: {material}</p>
      </div>
    </div>
  );
};

export default Modal;
