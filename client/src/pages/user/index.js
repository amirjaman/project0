import * as React from "react";
import "./home.css";
import Login from "../../components/Login";
import Navbar from "../../header-footer/Header";

const IndexPage = () => {
  return (
    <main className="pageStyles">
      <Navbar />
      <Login />
    </main>
  );
};

export default IndexPage;
