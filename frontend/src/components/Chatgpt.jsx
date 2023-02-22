import React, { useEffect, useState, useRef } from "react";
import "./chatgpt.css";
import Chatlog from "./Chatlog";

const Chatgpt = () => {
  const [input, setInput] = useState("");
  const [chatlog, setChatlog] = useState([
    { user: "ai", message: "Hey, how may I help you today?" },
  ]);

  const handleSubmit = (e) => {
    if (input !== "") {
      setChatlog([...chatlog, { user: "human", message: input }]);
    }
    document
      .getElementById("logcontainer")
      .scrollIntoView({ behavior: "smooth", block: "end" });
    setInput("");
  };

  const handleNewChat = () => {
    setChatlog([{ user: "ai", message: "Hey, how may I help you today?" }]);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeypress = (e) => {
    if (e.code === "Enter") {
      handleSubmit();
    }
  };

  let chatheight = window.innerHeight - 190;
  chatheight += "px";
  const chatheightstyle = {
    maxHeight: chatheight,
    padding: "15px",
    overflow: "auto",
    overflowWrap: "anywhere",
  };

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatlog]);

  return (
    <div className="row p-2">
      <div className="jumbotron bg-dark" style={{ marginBottom: "10px" }}>
        <h1 className="display-4" style={{ textAlign: "center" }}>
          ChatGPT
        </h1>
      </div>
      <div className="col-md-3 col-sm-4 col-xs-12 ltside">
        <button className="btn btn-sm btn-dark w-100" onClick={handleNewChat}>
          New Chat &nbsp;
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus-circle"
            viewBox="0 0 16 16"
            style={{ verticalAlign: "-0.125em" }}
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
        </button>
      </div>
      <div
        className="col-md-9 col-sm-8 col-xs-12 "
        id="logcontainer"
        style={chatheightstyle}
      >
        <Chatlog chatlog={chatlog} />
        <div ref={messagesEndRef} />
      </div>
      <div className="row">
        <div className="col-md-9 offset-md-3">
          <div className="askme-container">
            <div className="askme-block">
              <input
                type="text"
                className="askme"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Ask me"
                onChange={handleChange}
                value={input}
                onKeyPress={handleKeypress}
              ></input>
              <button
                onClick={handleSubmit}
                className="btn btn-sm btn-secondary askmebtn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-send"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatgpt;
