import React from "react";
import NavBar from "../components/shared/NavBar";
import { Outlet } from "react-router";
import Footer from "../components/shared/Footer";

const AuthLayout = () => {
  return (
    <>
      <header>
        <nav>
          <NavBar></NavBar>
        </nav>
        <main>
          <Outlet></Outlet>
        </main>
      </header>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default AuthLayout;
