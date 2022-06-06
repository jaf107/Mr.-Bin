// Import dependencies
import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// 1. TODO - Import required model here
// e.g. import * as tfmodel from "@tensorflow-models/tfmodel";
import Webcam from "react-webcam";
// 2. TODO - Import drawing utility here
//import { drawRect } from './utlities'
import { drawRect } from "./utilities";
import { useNavigate, useParams } from "react-router-dom";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { verifyProduct } from "../../actions/productActions";

function ObjectDetect(props) {

    const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const { id } = useParams();
  const { category } = useParams();
  const alert = useAlert();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Main function
  const runCoco = async () => {
    // 3. TODO - Load network
    // e.g. const net = await cocossd.load();
    const net = await cocossd.load();
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // 4. TODO - Make Detections
      // e.g. const obj = await net.detect(video);

      const obj = await net.detect(video);
      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");

      obj?.map((obj) => {
        if (obj.class === category) {

         // alert("OBJECT FOUND SUCCESSFULLY");
         dispatch(verifyProduct(id));
          navigate(`/product/${id}`);

        }
      });
      // 5. TODO - Update drawing utility
      // drawSomething(obj, ctx)
      drawRect(obj, ctx);
    }
  };

  useEffect(() => {
    runCoco();
  }, []);

  return (
    <div className="object-detect h-100">
      <Header></Header>
      <div className="object-detect-header h-100">
        <Webcam
          ref={webcamRef}
          muted={true}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 8,
            width: 640,
            height: 480,
          }}
        />
      </div>
      <h5 className=" text-center"> Please put the object infront of Webcam</h5>
    </div>
  );
}

export default ObjectDetect;
