import React from "react";
import SingleChat from "../SingleChat";
import "./chat-item.css";
import { useSelector } from "react-redux";

const ChatItem = () => {
  const chatLog = useSelector((state) => state.chatLog.value);

  /*   
  const data1 = { self: true, message: "Hello World!" };
  const data2 = {
    self: false,
    message:
      "Material is an adaptable system of guidelines, components, and tools that support the best practices",
  }; 
  */

  return (
    <>
      <div className="chat-blank" />
      {chatLog.map((singleChat, index) => {
        return <SingleChat key={index} chat={singleChat} />;
      })}
    </>
  );
};

export default ChatItem;
