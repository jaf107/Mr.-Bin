import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Map, Marker, GoogleApiWrapper, InfoWindow } from "google-maps-react";
import { useSelector } from "react-redux";

const About = (props) => {
  const { user } = useSelector((state) => state.user);
  const { products } = useSelector((state) => state.products);
  const [isOpen, setIsOpen] = useState(false);
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };
  const MarkerList = products?.map((product) => (
    <Marker
      position={{
        lat: product.address.lat,
        lng: product.address.lng,
      }}
      onClick={() => handleActiveMarker(product._id)}
    >
            <InfoWindow  visible={true}>
              Hello
            </InfoWindow>
    </Marker>
  ));
  return (
    <div>
      <Header />
      {user && (
        <div className="container-fluid">
          <Map
            className=""
            google={props.google}
            initialCenter={{
              lat: user.address.lat,
              lng: user.address.lng,
            }}
            center={{
              lat: user.address.lat,
              lng: user.address.lng,
            }}
          >
            {MarkerList}
          </Map>
        </div>
      )}
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAcSo1pAkX6PtA4ZGMvzgABMNgSSpQJFz4",
})(About);
