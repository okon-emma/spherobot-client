import React from "react";
import "./single-chat.css";
import userIcon from "../../assets/img/user.png";
import systemIcon from "../../assets/img/system-icon.png";

const SingleChat = ({ chat }) => {
  if (chat.self) {
    return (
      <div className="single-chat-user">
        <div className="single-chat-user-text">
          {chat.message}
          <a className="single-chat-icon" href="#">
            <img src={userIcon} height={32} width={32} />
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="single-chat-system">
        <div className="single-chat-system-text">
          <a className="single-chat-icon" href="#">
            <img src={systemIcon} height={32} width={32} />
          </a>
          {chat.message}
        </div>
      </div>
    );
  }
};

export default SingleChat;
