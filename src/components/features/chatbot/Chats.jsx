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
import {
  addSkills,
  addCertifications,
  addEducation,
  addExperince,
  addHeading,
  addProjects,
  addachievement,
  addlatex,
} from "../../store/query/latexstore";
import DotTypingAnimation from "./AnimatedDots";

const KrollSecureChat = ({
  showAskVal,
  setShowAskVal,
  setLatexCode,
  latexCode,
}) => {
  // const [isTyping, setIsTyping] = useState(false);
  const [chats, setChats] = useState(
    useSelector((state) => state.msgs.messages)
  );

  const extractData = (data) => {
    const regex = /```latex\s*(.*?)```/gs;
    const matches = data.match(regex);

    if (matches && matches.length > 0) {
      return matches[0]?.replace(/```latex\s*/gs, "")?.replace(/```/gs, "");
    } else {
      return "";
    }
  };
  const extractEachSectionData = (data) => {
    const regex = /----------\s*(.*?)----------/gs;
    // const regex = /-+\s*(.?)\s-+([\s\S]?)(?=-+\s|$)/g;

    const matches = data.match(regex);
    if (matches && matches.length > 0) {
      const newText = matches[0]?.replace(/\s*/gs, "")?.replace(/```/gs, "");
      const regexHead = /^-+|-+$/g;
      // Replace matching hyphens with an empty string
      return matches[0]?.replace(regexHead, "");
    } else {
      return "";
    }
  };
  const extractMessageFromOutput = (data) => {
    const regex = /```latex\s*(.*?)```([\s\S]*)/gs;
    const matches = regex.exec(data);
    if (matches && matches.length > 0) {
      return matches[2]?.trim();
    } else {
      return "";
    }
  };
  const [message, setMessage] = useState();
  const chatEl = useRef(null);
  const dispatch = useDispatch();
  const queryResponseDetails = useSelector((state) => state.query);
  const { status, error,isTyping, queryResponse } = queryResponseDetails;
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
      if (queryResponseSuccess) {
        if (
          extractMessageFromOutput(
            queryResponseDetails.queryResponse.content
          ) === ""
        ) {
          dispatch(addmsg({ query: queryResponseDetails.queryResponse }));
          let msgs = [...chats];
          msgs.push({
            role: queryResponseDetails.queryResponse.role,
            content: queryResponseDetails.queryResponse.content,
          });
          setChats(msgs);
        }else{
          const onlyText = extractMessageFromOutput(queryResponseDetails.queryResponse.content)
          dispatch(addmsg({ query: queryResponseDetails.queryResponse }));
          console.log(queryResponseDetails.queryResponse.content, "response");
          let msgs = [...chats];
          msgs.push({
            role: queryResponseDetails.queryResponse.role,
            content: "Press Generate PDF to see Changes \n" + onlyText,
          });
          setChats(msgs);
        }

        const extractedlatex = extractData(
          queryResponseDetails.queryResponse.content
        );

        const eachSectionHeading = extractEachSectionData(extractedlatex);
        // console.log(eachSectionHeading ,extractedlatex );
        if (extractedlatex !== "") {
          switch (eachSectionHeading) {
            case "HEADING":
              dispatch(addHeading(extractedlatex));
              break;
            case "EDUCATION":
              console.log("education reducx");
              dispatch(addEducation(extractedlatex));
              break;
            case "EXPERIENCE":
              dispatch(addExperince(extractedlatex));
              break;
            case "PROJECTS":
              dispatch(addProjects(extractedlatex));
              break;
            case "Achievements":
              dispatch(addachievement(extractedlatex));
              break;
            case "CERTIFICATES":
              dispatch(addCertifications(extractedlatex));
              break;
            case "PROGRAMMINGSKILLS":
            case "programming skills":
            case "Programming Skills":
            case "Technical Skills":
            case "TechnicalSkills":
            case "Programming Skills":
            case "TECHNICALSKILLS":
              dispatch(addSkills(extractedlatex));
              break;
            default:
              dispatch(addlatex(extractedlatex));
              break;
          }
          dispatch(addlatex(extractedlatex));
        }
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
    // setIsTyping(true);
    let msgs = [...chats];
    msgs.push({
      role: "user",
      content: message,
    });
    setChats(msgs);
    dispatch(
      addmsg({
        query: {
          role: "user",
          content: message,
        },
      })
    );

    if (message) {
      setMessage("");
      dispatch(sendQuerydata({ msgs: msgs }));
    }

    // setIsTyping(false);
  };
  console.log('====================================');
  console.log(isTyping);
  console.log('====================================');
  
  return (
    <>
      {showAskVal ? (
        <div className="chat-container">
          <div className="chat-header">
            <div style={{ fontSize: "large", fontWeight: "600" }}>
              {" "}
              <RightOutlined onClick={() => setShowAskVal(!showAskVal)} />{" "}
              ChatBot
            </div>
            <div className="reset" style={{ textAlign: "right" }}>
              <Button type="primary bg-black" onClick={() => resetChat()}>
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
                    Hi!, I am Auto Resume, your personal resume maker, You can
                    interact with me here by asking about your Resume.
                    <br />
                  </span>
                </li>
                {chats && chats.length
                  ? chats.map((chat, index) => {
                      if (chat.role.toUpperCase() === "USER" && index > 22) {
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
                  {isTyping  && <li className="left spacing typing"><DotTypingAnimation /></li>}
              </ul>
              
            </div>
              <div className="chat-box " style={{ pointerEvents: isTyping ? 'none' : 'auto' }}>
                <div style={{ width: "85%", textAlign: "center" }}>
                  <Input.TextArea
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
                    <SendOutlined rotate={0} style={{ color: "#ffffff" }} />
                  </Button>
                </div>
              </div>
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
