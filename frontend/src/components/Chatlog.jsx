import React from "react";
import "./chatgpt.css";
import human from "../asset/human.png";
import chatgpt from "../asset/openai-avatar.png";

const Chatlog = (props) => {
  return (
    <>
      {props.chatlog.map((chat, i) => {
        return (
          <>
            {chat.user === "ai" ? (
              <div key={i} className="row chat chatai">
                <div
                  className="col-md-11 col-sm-10 col-xs-12"
                  style={{ textAlign: "right" }}
                >
                  <button className="btn btn-info">{chat.message}</button>
                </div>
                <div
                  className="col-md-1 col-sm-2 col-xs-12"
                  style={{ textAlign: "left" }}
                >
                  <img src={chatgpt} alt="logo" width="30px" />
                </div>
              </div>
            ) : (
              <div key={i} className="row chat chathuman">
                <div
                  className="col-md-1 col-sm-2 col-xs-12"
                  style={{ textAlign: "right" }}
                >
                  <img src={human} alt="logo" width="30px" />
                </div>
                <div
                  className="col-md-11 col-sm-10 col-xs-10"
                  style={{ textAlign: "left" }}
                >
                  <button className="btn btn-info">{chat.message}</button>
                </div>
              </div>
            )}
          </>
        );
      })}
    </>
  );
};

export default Chatlog;
