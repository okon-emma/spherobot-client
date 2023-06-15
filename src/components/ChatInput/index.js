import React from "react";
import API from "../../data/apiConfig";
import "./chat-input.css";
import { useSelector, useDispatch } from "react-redux";
import { setChatInput } from "../../data/slices/chatInputSlice";
import { setChatLog } from "../../data/slices/chatLogSlice";

const ChatInput = () => {
  const input = useSelector((state) => state.chatInput.value);
  // const chatLog = useSelector((state) => state.chatLog.value);

  const dispatch = useDispatch();

  // Get response from API
  const getChatResponse = async (prompt) => {
    const chatResponse = await API.post("/chat/completions", {
      session_id: null,
      prompt,
    });
    // return "This is a test - " + prompt;
    return chatResponse.data.message;
  };

  async function sendMsg() {
    const userChat = {
      self: true,
      message: `${input}`,
    };

    dispatch(setChatLog(userChat));

    const getChatResponseValue = await getChatResponse(input);
    const systemChat = {
      self: false,
      message: getChatResponseValue,
    };
    await dispatch(setChatLog(systemChat));
    await dispatch(setChatInput(""));
  }

  return (
    <div className="chat-input-holder">
      <textarea
        className="chat-input-textarea"
        rows={1}
        placeholder="Type your chat here"
        value={input}
        onChange={(e) => dispatch(setChatInput(e.target.value))}
      ></textarea>
      <div className="send-msg-btn" onClick={sendMsg}>
        Send Message
      </div>
    </div>
  );
};

export default ChatInput;
