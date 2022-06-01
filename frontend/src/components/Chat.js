import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import "./Chat.css"
let socket;

const Chat = (props) => {
  const location = useLocation();
  const [name, setName] = useState();
  const [room, setRoom] = useState("");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const ENDPOINT = "http://localhost:5000";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(ENDPOINT);
    setRoom(room);
    setName(name);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [location.search]);
  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });
    // socket.on("roomData", ({ users }) => {
    //   console.log(users);
    //   setUsers(users);
    // });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("sendMessage", { message });
      setMessage("");
    } else alert("empty input");
  };

  return (
    <div className=" container">
      <Header></Header>
      <div className=" row">
        <div className=" col-md-2">
        </div>
        <div className=" col-md-8">
        <h5 className=" text-center chatroom p-3">Chat Room</h5>
          {messages.map((val, i) => {
            return (
              <div key={i} className="card">
                {val.text}
                <br />
                <b>{val.user}</b>
              </div>
            );
          })}
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              className=" form-control"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <input type="submit" className=" btn btn-secondary"/>
          </form>
        </div>
        <div className=" col-md-2">
         
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Chat;
