import React from "react";
import "./HomeStyle.css";
import Header from "../Component/FrontPage/Header"
import Footer from "../Component/FrontPage/Footer";
import MainPage from "../Component/FrontPage/MainPage";


function Home() {
  return (
    <div className="home">
      <Header />
      <MainPage/>
      <Footer />
    
    </div>
  );
}

export default Home;
