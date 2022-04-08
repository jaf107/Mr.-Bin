import Header from "../Header/Header";
import React from "react";
import Banner from "./Banner";
import SectionCard from "./SectionCard";

class HomePage extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <SectionCard></SectionCard>


      </div>
    );
  }
}

export default HomePage;
