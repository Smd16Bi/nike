import React from "react";
import { Banner, Cart, Footer, Header } from "../components";
import Preloader from "../ui/preloader";
type Props = {
  children?: React.ReactNode;
};

const Loyaut = ({ children }: Props) => {
  return (
    <>
      <Preloader />
      <Header />
      <Cart/>
      <main>
        <Banner />
      </main>
      <Footer />
    </>
  );
};

export default Loyaut;
