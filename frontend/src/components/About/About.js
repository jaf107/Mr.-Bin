import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
// import { Marker, GoogleApiWrapper, InfoWindow } from "google-maps-react";
import { useSelector } from "react-redux";
import {
  useLoadScript,
  GoogleMap,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import "./About.css";
import { Link } from "react-router-dom";
const Map = (props) => {
  const { user } = useSelector((state) => state.user);
  const { products } = useSelector((state) => state.products);
  const [selected, setSelected] = useState(null);

  const MarkerList = products?.map((product) => (
    <Marker
      position={{
        lat: product.address.lat,
        lng: product.address.lng,
      }}
      onClick={() => {
        setSelected(product);
      }}
    ></Marker>
  ));
  return (
    <div>
      <Header />
      {user && (
        <div className="container">
          <GoogleMap
            zoom={10}
            initialCenter={{
              lat: user.address.lat,
              lng: user.address.lng,
            }}
            center={{
              lat: user.address.lat,
              lng: user.address.lng,
            }}
            mapContainerClassName="map-container"
          >
            {MarkerList}
            {selected ? (
              <InfoWindow
                position={{
                  lat: selected.address.lat,
                  lng: selected.address.lng,
                }}
                onCloseClick={() => {
                  setSelected(null);
                }}
              >
                <div className="separate-card ">
                  <Link className="card text-decoration-none" to={`/product/${selected._id}`}>
                    <div className="card-body bg-light">
                      <h6 className="card-title center">{selected.name}</h6>
                      <p className="card-text p-2">{selected.description} </p>
                      <p className="card-text text-center p-2">
                        Price: {selected.purchase_price}
                      </p>
                    </div>
                  </Link>
                </div>
              </InfoWindow>
            ) : null}
          </GoogleMap>
        </div>
      )}
    </div>
  );
};

export default function About() {
  return <Map></Map>;
}
