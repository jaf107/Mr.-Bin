import Header from "../Header/Header";
import React from "react";
import Banner from "./Banner";
import SectionCard from "./SectionCard";
import Footer from "../Footer/Footer";

class HomePage extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <SectionCard></SectionCard>
        <Footer></Footer>

      </div>
    );
  }
}

export default HomePage;
