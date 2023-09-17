// import React, { Component } from "react";
// import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
// import PlacesAutocomplete, {
//   geocodeByAddress,
//   getLatLng,
// } from "react-places-autocomplete";

// export class MapContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       // for google map places autocomplete
//       address: "",

//       showingInfoWindow: false,
//       activeMarker: {},
//       selectedPlace: {},

//       mapCenter: {
//         lat: 49.2827291,
//         lng: -123.1207375,
//       },
//     };
//   }

//   handleChange = (address) => {
//     this.setState({ address });
//   };

//   handleSelect = (address) => {
//     this.setState({ address });
//     geocodeByAddress(address)
//       .then((results) => getLatLng(results[0]))
//       .then((latLng) => {
//         console.log("Success", latLng);

//         // update center state
//         latLng.location = address
//         this.setState({ mapCenter: latLng });
//         this.props.onSetAddress(latLng);
//       })
//       .catch((error) => console.error("Error", error));
//   };

//   render() {
//     return (
//       <div id="googleMaps">
//         <PlacesAutocomplete
//           value={this.state.address}
//           onChange={this.handleChange}
//           onSelect={this.handleSelect}
//         >
//           {({
//             getInputProps,
//             suggestions,
//             getSuggestionItemProps,
//             loading,
//           }) => (
//             <div>
//               <input
//                 className="form-control mb-3"
//                 {...getInputProps({
//                   placeholder: "Enter Product Address",
//                   //className: "location-search-input",
//                 })}
//               />
//               <div className="autocomplete-dropdown-container">
//                 {loading && <div>Loading...</div>}
//                 {suggestions.map((suggestion) => {
//                   const className = suggestion.active
//                     ? "suggestion-item--active"
//                     : "suggestion-item";
//                   // inline style for demonstration purpose
//                   const style = suggestion.active
//                     ? { backgroundColor: "#fafafa", cursor: "pointer" }
//                     : { backgroundColor: "#ffffff", cursor: "pointer" };
//                   return (
//                     <div
//                       {...getSuggestionItemProps(suggestion, {
//                         className,
//                         style,
//                       })}
//                     >
//                       <span>{suggestion.description}</span>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           )}
//         </PlacesAutocomplete>

//         {/* <Map
//           google={this.props.google}
//           initialCenter={{
//             lat: this.state.mapCenter.lat,
//             lng: this.state.mapCenter.lng
//           }}
//           center={{
//             lat: this.state.mapCenter.lat,
//             lng: this.state.mapCenter.lng
//           }}
//         >
//           <Marker
//             position={{
//               lat: this.state.mapCenter.lat,
//               lng: this.state.mapCenter.lng
//             }} />
//         </Map> */}
//       </div>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: process.env.MAP_API_KEY,
// })(MapContainer);
