import React from "react";
import style from "./index.module.scss";
import { useSelector } from "react-redux";
import { selectData } from "../../redux/slices/data";
import { selectlocales } from "../../redux/slices/localesSlice";
import gsap from "gsap";
import { TextPlugin } from "gsap/all";
gsap.registerPlugin(TextPlugin);

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

interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  color?: string;
  color_name?: string;
  size: string;
  material: string;
  style?: string;
}

let item: Item = {
  id: 0,
  name: "",
  description: "",
  price: 0,
  color: "",
  color_name: "",
  size: "",
  material: "",
  style: "",
};

const Banner: React.FC = () => {
  const { items } = useSelector(selectData);
  const { locales } = useSelector(selectlocales);
  const imgRef = React.useRef(null);
  const bannerRef = React.useRef<HTMLDivElement>(null);
  const textRef = React.useRef<HTMLHeadingElement>(null);
  const priceRef = React.useRef<HTMLSpanElement>(null);
  const [index, setIndex] = React.useState(0);
  const [anim, setAnim] = React.useState(false);

  const handelerImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const currentValue = Number(target.value);
    setIndex(currentValue);
  };

  React.useEffect(() => {
    const animationTargetCurrent = textRef.current;
    const scrollTriggerCurrent = bannerRef.current;
    const priceTargetCurrent = priceRef.current;
    if (!anim) {
      setAnim(true);
    }
    if (priceTargetCurrent && animationTargetCurrent && scrollTriggerCurrent && anim) {
      let ctx = gsap.context(() => {
        gsap.from(textRef.current, { duration: 2, text: "" });
        gsap.from(priceTargetCurrent, { y: 50, opacity: 0, delay: 1, direction: 1, });
      }, bannerRef);

      return () => ctx.revert();
    }
  }, [items]);

  if (items.length === 0) return <></>;

  item = items[0];
  return (
    <div className={style.banner} ref={bannerRef}>
      <div className={`${style.container} page-width`}>
        <div className={style.image_wrapper}>
          <div className={style.image}>
            <img ref={imgRef} src={`${process.env.PUBLIC_URL}/image/${arrImages[index]}`} alt="360" loading="lazy" />
          </div>
          <div className={style.box}>
            <input
              className="box"
              type="range"
              onChange={handelerImage}
              min={0}
              max={arrImages.length - 1}
              step={1}
              value={index}
            />
          </div>
        </div>
        <div className={style.text_wrapper}>
          <h1 ref={textRef} className={`${style.title} text`}>
            {item.name}
          </h1>
          <div className={style.content}>
            <span ref={priceRef} className={style.price}>
              {locales.banner.currency} {item.price}
            </span>
            <div className={style.size}>
              <span>{locales.banner.size}</span>
              <select name="" id="">
                {item.size.split(",").map((el) => {
                  return (
                    <option key={el} value={el}>
                      {el}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className={style.add}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18 5.99998H16C16 3.78998 14.21 1.99998 12 1.99998C9.79 1.99998 8 3.78998 8 5.99998H6C4.9 5.99998 4 6.89998 4 7.99998V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V7.99998C20 6.89998 19.1 5.99998 18 5.99998ZM12 3.99998C13.1 3.99998 14 4.89998 14 5.99998H10C10 4.89998 10.9 3.99998 12 3.99998ZM18 20H6V7.99998H8V9.99998C8 10.55 8.45 11 9 11C9.55 11 10 10.55 10 9.99998V7.99998H14V9.99998C14 10.55 14.45 11 15 11C15.55 11 16 10.55 16 9.99998V7.99998H18V20Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className={style.more}>
            <span>{locales.banner.more}</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.8183 8.53941C16.7129 8.46053 16.5929 8.40325 16.4653 8.37084L9.57548 6.78019C9.447 6.75053 9.31394 6.74647 9.18389 6.76823C9.05384 6.78999 8.92934 6.83716 8.81752 6.90703C8.59168 7.04815 8.43116 7.2732 8.37125 7.53268C8.34159 7.66116 8.33752 7.79422 8.35929 7.92427C8.38105 8.05432 8.42822 8.17881 8.49809 8.29064C8.63921 8.51647 8.86426 8.677 9.12374 8.73691L13.6657 9.77825L7.22905 13.8003C7.00413 13.9409 6.84426 14.165 6.78459 14.4234C6.72493 14.6819 6.77037 14.9534 6.91092 15.1783C7.05146 15.4032 7.27559 15.5631 7.53401 15.6228C7.79243 15.6824 8.06397 15.637 8.28888 15.4964L14.7256 11.4743L13.6704 16.0132C13.6402 16.1417 13.6357 16.2749 13.6573 16.4051C13.6788 16.5354 13.7259 16.6601 13.7958 16.772C13.8658 16.884 13.9572 16.981 14.0649 17.0574C14.1725 17.1338 14.2942 17.1882 14.4229 17.2174C14.5514 17.2476 14.6847 17.2521 14.8149 17.2306C14.9451 17.209 15.0698 17.162 15.1818 17.092C15.2937 17.022 15.3907 16.9306 15.4672 16.823C15.5436 16.7154 15.598 16.5936 15.6272 16.4649L17.2178 9.57507C17.2446 9.44617 17.2457 9.31325 17.221 9.18393C17.1768 8.92446 17.0321 8.69288 16.8183 8.53941Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
