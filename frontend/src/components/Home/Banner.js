import React from 'react';


class Banner extends React.Component {
    state = {  } 
    render() { 
        return (
            <div
            id="carouselExampleSlidesOnly"
            class="carousel"
            data-bs-ride="carousel"
            data-interval="100"
          >
            <div class="carousel-inner">
              <div class="carousel-item ">
                <img src={require("../../assets/2.png")} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item ">
                <img src={require("../../assets/3.png")} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item active">
                <img src={require("../../assets/1.png")} class="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
        );
    }
}
 
export default Banner;