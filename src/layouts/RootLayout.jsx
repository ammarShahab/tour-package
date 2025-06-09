import React from "react";
import NavBar from "../components/shared/NavBar";
import { Outlet } from "react-router";
import Footer from "../components/shared/Footer";

const RootLayout = () => {
  return (
    <>
      <header>
        <nav>
          <NavBar></NavBar>
        </nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default RootLayout;
