import React from "react";
import style from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { closeCart as close, selectCart } from "../../redux/slices/cart";
import { selectlocales } from "../../redux/slices/localesSlice";

const Cart = () => {
  const cart = useSelector(selectCart);
  const { locales } = useSelector(selectlocales);
  const dispath = useDispatch();
  const openClass = cart.openCart ? style.open_cart : "";
  const textHeader = cart.items.length === 0 ? locales.cart.cart_empty : locales.cart.cart_name;
  const closeCart = () => dispath(close(false));

  return (
    <div className={`${openClass} ${style.overlay}`}>
      <div className={style.cart}>
        <div className={style.header}>
          <button onClick={closeCart}>X</button>
          <h2>{textHeader}</h2>
        </div>
        {cart.items.length !== 0 && (
          <>
            <div className={style.body}>
              {cart.items.map(el => {
                return <div key={el.id}>{el.name}</div>
              })}
            </div>
            <div className={style.footer}></div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
