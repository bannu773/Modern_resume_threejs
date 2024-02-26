import { Input, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  SendOutlined,
  ReloadOutlined,
  RightOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import { Spinner } from "../shared/resusables";
import { useEffect, useState, useRef } from "react";
import "./Chatbot.scss";
import { addmsg } from "../../store/query/Messages";
import { sendQuerydata } from "../../store/query/sendquery";
import { addlatex } from "../../store/query/latexstore";

const KrollSecureChat = ({ showAskVal, setShowAskVal, setLatexCode ,latexCode}) => {
  const [isTyping, setIsTyping] = useState(false);
  const [chats, setChats] = useState(
    useSelector((state) => state.msgs.messages)
  );


  const [message, setMessage] = useState();
  const chatEl = useRef(null);
  const dispatch = useDispatch();
  const queryResponseDetails = useSelector((state) => state.query);
  const { status, error, queryResponse } = queryResponseDetails;
  const queryResponseError = status === "failed" && error !== null;
  const queryResponseSuccess =
    status === "success" && Object.keys(queryResponse).length > 0;
  // Scroll Down Logic
  useEffect(() => {
    if (chatEl) {
      chatEl?.current.addEventListener("DOMNodeInserted", (event) => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: "smooth" });
      });
    }
  }, []);
  useEffect(() => {
    if (queryResponseDetails.queryResponse != {}) {
      console.log(queryResponseDetails.queryResponse);
      if (queryResponseSuccess) {
        dispatch(addmsg({ query: queryResponseDetails.queryResponse }));
        let msgs = [...chats];
        msgs.push({
          "role" : queryResponseDetails.queryResponse.role,
          "content" : queryResponseDetails.queryResponse.content,
        })
        setChats(msgs)
        console.log(queryResponseDetails.queryResponse.content);
        
        dispatch(addlatex(queryResponseDetails.queryResponse.content))
        
      }
     
    }
  }, [queryResponseSuccess]);

  const resetChat = () => {
    setChats([]);
    setMessage("");
  };

  const chatsecure = (e, message) => {
    // console.log(message);
    e.preventDefault();
    if (!message) return;
    setIsTyping(true);
    let msgs = [...chats];
    msgs.push({
      role: "user",
      content: message,
    });
    setChats(msgs);
    dispatch(addmsg({ query: {
      role : "user",
      content : message
    } }));

    if (message) {
      setMessage("");
      dispatch(sendQuerydata({ msgs: msgs }));
    }
  

    setIsTyping(false);
  };
  return (
    <>
      {showAskVal ? (
        <div className="chat-container">
          <div className="chat-header">
            <div
              style={{ fontSize: "large", color: "#14487F", fontWeight: "600" }}
            >
              {" "}
              <RightOutlined onClick={() => setShowAskVal(!showAskVal)} />{" "}
              ChatBot
            </div>
            <div className="reset" style={{ textAlign: "right" }}>
              <Button type="primary bg-black"  onClick={() => resetChat()}>
                <ReloadOutlined />
                Reset
              </Button>
            </div>
          </div>
          <hr className="hr-line" />
          <div>
            {/* <div className="reset" style={{ textAlign: 'right' }}><Button type='primary' onClick={() => resetChat()}><ReloadOutlined />Reset</Button></div> */}
            <div>
              <ul className="chat" ref={chatEl}>
                <li className="message left spacing">
                  <span></span>
                  <span>
                  Hi!, I am Auto Resume, your personal resume maker, You can interact with me here by asking about your Resume.
                    <br />
                  </span>
                </li>
                {chats && chats.length
                  ? chats.map((chat, index) => {
                      if (chat.role.toUpperCase() === "USER" && index > 18) {
                        return (
                          <li key={index} className="message right spacing">
                            <span></span>
                            <span>{chat.content} </span>
                          </li>
                        );
                      } else if (
                        chat.role.toUpperCase() === "ASSISTANT" &&
                        index > 18
                      ) {
                        return (
                          <li key={index} className="message left spacing">
                            <span></span>
                            <span>{chat.content} </span>
                          </li>
                        );
                      }
                    })
                  : ""}
              </ul>
            </div>
            {isTyping ? (
              <div style={{ textAlign: "center" }}>
                <Spinner />
              </div>
            ) : (
              <div className="chat-box">
                <div style={{ width: "85%", textAlign: "center" }}>
                  <Input
                    style={{ height: 40 }}
                    placeholder="Send a message"
                    onChange={(e) => setMessage(e.target.value)}
                    onPressEnter={(e) => chatsecure(e, message)}
                    value={message}
                  />
                </div>
                <div style={{ width: "13%", textAlign: "center" }}>
                  <Button
                    type="primary"
                    className="send-btn"
                    onClick={(e) => chatsecure(e, message)}
                  >
                    <SendOutlined rotate={270} style={{ color: "#ffffff" }} />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="ask-val-collapse-wrapper">
          <div className="ask-val-collapse-container">
            <br />
            <div className="icon-style">
              <LeftOutlined onClick={() => setShowAskVal(!showAskVal)} />
            </div>
            <br />
            <br />
            <div className="text-style">ChatBot</div>
          </div>
        </div>
      )}
    </>
  );
};
export default KrollSecureChat;
