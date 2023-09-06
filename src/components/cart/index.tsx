import React from "react";
import style from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeQuntity as quntity, closeCart as close, selectCart, getCartTotal } from "../../redux/slices/cart";
import { selectlocales } from "../../redux/slices/localesSlice";
const Cart = () => {
  const cart = useSelector(selectCart);
  const { locales } = useSelector(selectlocales);
  const dispath = useDispatch();
  const openClass = cart.openCart ? style.open_cart : "";
  const textHeader = cart.items.length === 0 ? locales.cart.cart_empty : locales.cart.cart_name;
  const closeCart = () => dispath(close(false));

  const changeQuntity = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    const typeButton = target.name;
    const id = target.dataset.product;
    dispath(quntity({ typeButton, id }));
  };

  React.useEffect( ()=> {
    dispath(getCartTotal())
  },[cart.items] )

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
              {cart.items.map((el) => {
                return (
                  <div className={style.item} key={el.id}>
                    <div className={style.img}>
                      <img
                        width={120}
                        height={120}
                        src={`${process.env.PUBLIC_URL}/image/${el.image}`}
                        alt="Cart item"
                        loading="lazy"
                      />
                    </div>
                    <div className={style.info}>
                      <h3 className={style.name}>{el.name}</h3>
                      <p className={style.options}>
                        {el.price} {locales.banner.currency} / {el.color}/ {el.size}{" "}
                      </p>
                      <div className={style.quantity}>
                        <button onClick={changeQuntity} data-product={el.id} name="minus">
                          -
                        </button>
                        <input readOnly={true} type="number" value={el.counter} />
                        <button onClick={changeQuntity} data-product={el.id} name="plus">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={style.footer}>
              <span className={style.total}>{locales.cart.total}:</span>
              <span className={style.price}>{cart.cartTotal} {locales.banner.currency}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
