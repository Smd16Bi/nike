import React from "react";
import style from "./index.module.scss";
import { useSelector } from "react-redux";
import { selectData } from "../../redux/slices/data";

const arrImages = [
  "img_0_0_0 (no bg).png",
  "img_0_0_1 (no bg).png",
  "img_0_0_2 (no bg).png",
  "img_0_0_3 (no bg).png",
  "img_0_0_4 (no bg).png",
  "img_0_0_5 (no bg).png",
  "img_0_0_6 (no bg).png",
  "img_0_0_7 (no bg).png",
  "img_0_0_8 (no bg).png",
  "img_0_0_9 (no bg).png",
  "img_0_0_10 (no bg).png",
  "img_0_0_11 (no bg).png",
  "img_0_0_12 (no bg).png",
  "img_0_0_13 (no bg).png",
  "img_0_0_14 (no bg).png",
  "img_0_0_15 (no bg).png",
  "img_0_0_16 (no bg).png",
  "img_0_0_17 (no bg).png",
  "img_0_0_18 (no bg).png",
  "img_0_0_19 (no bg).png",
  "img_0_0_20 (no bg).png",
  "img_0_0_21 (no bg).png",
  "img_0_0_22 (no bg).png",
  "img_0_0_23 (no bg).png",
  "img_0_0_24 (no bg).png",
  "img_0_0_25 (no bg).png",
  "img_0_0_26 (no bg).png",
  "img_0_0_27 (no bg).png",
  "img_0_0_28 (no bg).png",
  "img_0_0_29 (no bg).png",
  "img_0_0_30 (no bg).png",
  "img_0_0_31 (no bg).png",
  "img_0_0_32 (no bg).png",
  "img_0_0_33 (no bg).png",
  "img_0_0_34 (no bg).png",
  "img_0_0_35 (no bg).png",
  "img_0_0_36 (no bg).png",
  "img_0_0_37 (no bg).png",
  "img_0_0_38 (no bg).png",
  "img_0_0_39 (no bg).png",
];

const Banner: React.FC = () => {
  const { items } = useSelector(selectData);

  const imgRef = React.useRef(null);
  const [index, setIndex] = React.useState(0);

  const handelerImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const currentValue = Number(target.value);
    setIndex(currentValue);
  };

  if (items.length === 0) return <></>;
  return (
    <div className={style.banner}>
      <div className={`${style.container} page-width`}>
        <div className={style.image_wrapper}>
          <div className={style.image}>
            <img ref={imgRef} src={`${process.env.PUBLIC_URL}/image/${arrImages[index]}`} alt="360" loading="lazy" />
          </div>
          <div className={style.box}>
            <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_34_998)">
                <path
                  d="M20 12.0026C10.8 12.0026 3.33334 15.736 3.33334 20.336C3.33334 24.0693 8.23334 27.2193 15 28.286V33.6693L21.6667 27.0026L15 20.336V24.886C9.75001 23.9526 6.66668 21.7193 6.66668 20.336C6.66668 18.5693 11.7333 15.336 20 15.336C28.2667 15.336 33.3333 18.5693 33.3333 20.336C33.3333 21.5526 30.9 23.486 26.6667 24.5526V27.9693C32.55 26.686 36.6667 23.7526 36.6667 20.336C36.6667 15.736 29.2 12.0026 20 12.0026Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_34_998">
                  <rect width="40" height="40" fill="white" transform="translate(0 0.335968)" />
                </clipPath>
              </defs>
            </svg>

            <input type="range" onChange={handelerImage} min={0} max={arrImages.length - 1} step={1} value={index} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
