import React from "react";
import { Banner, Footer, Header } from "../components";


type Props = {
   children?:  React.ReactNode;
};

const Loyaut = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>
        <Banner/>
      </main>
      <Footer />
    </>
  );
};

export default Loyaut;
