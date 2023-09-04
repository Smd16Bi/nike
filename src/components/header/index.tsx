import React from "react";
import style from "../header/index.module.scss";
import Logo from "../../assets/media/Logo.png";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeCart, selectCart } from "../../redux/slices/cart";

const Header: React.FC = () => {
  const dispath = useDispatch();
  const cart = useSelector(selectCart);

  const [active, setActive] = React.useState("EN");
  const { pathname } = useLocation();
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const currentLanguage = pathname.includes("/uk") ? "UK" : "EN";
    setActive((prev) => currentLanguage);
  }, []);

  const openCart = () => {
    if(cart.openCart === open) {
      setOpen(!open);
    }
    dispath(closeCart(open));
  };

  return (
    <header className={style.header}>
      <div className={`page-width ${style.container}`}>
        <div className={style.selector}>
          <a className={`${style.language} ${active === "EN" ? style.active : ""}`} href="/">
            EN
          </a>
          <span>|</span>
          <a className={`${style.language} ${active === "UK" ? style.active : ""}`} href="/uk">
            UK
          </a>
        </div>
        <div className={style.logo}>
          <img src={Logo} alt="Logo" loading="lazy" />
        </div>
        <div onClick={openCart} className={style.cart}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18 6H16C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6H6C4.9 6 4 6.9 4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8C20 6.9 19.1 6 18 6ZM12 4C13.1 4 14 4.9 14 6H10C10 4.9 10.9 4 12 4ZM18 20H6V8H8V10C8 10.55 8.45 11 9 11C9.55 11 10 10.55 10 10V8H14V10C14 10.55 14.45 11 15 11C15.55 11 16 10.55 16 10V8H18V20Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
