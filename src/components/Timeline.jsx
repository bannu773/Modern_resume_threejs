import React, { useState } from "react";
// import './App.css';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaCircle } from "react-icons/fa";
import ChatInter from "../../assets/chatinter.png";
import Q_A from "../../assets/q_a.jpg";
import Resume_img from "../../assets/resumeimg.PNG";
import { Link } from "react-router-dom";

const TimeLine = ({ timelineRef }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="bg bg-black" style={{ backgroundRepeat: "repeat", borderBottomLeftRadius:"50px" , borderBottomRightRadius:"50px"}}>
      <style>
        {`
          /* Apply scale transformation on hover */
          .vertical-timeline::before{
            height : 95%;
          }
          .outerpart{
            overflow:hidden;
          }

          .shadow-block{
            filter: drop-shadow(0.5rem 0rem 2rem rgb(120, 1, 255));
          }

          .outergrad::before{
            content: "";
            width: 500px;
            height: 500px;
            border-radius: 50%;
            background-color: rgb(255, 230, 0);
            filter: blur(350px);
            z-index: 0;
            position: absolute;
            // translate: 800px 200px;
          }

          .outergrad1::before{
            content: "";
            width: 500px;
            height: 500px;
            border-radius: 50%;
            background-color: rgb(255, 230, 0);
            filter: blur(350px);
            z-index: 0;
            position: absolute;
            translate: 400px 0px;
          }
        
          .VerticalTimeline
          {
            overflow: visible;
            z-index: 1;
            
}
            
          }
          .vertical-timeline-element {
            transition: transform 0.3s ease-in-out;
            font-family: 'DM Sans', sans-serif;
            transform-origin: center bottom;
            transform: scale(1); /* Initial size, can be adjusted as needed */
            text-align:justify;
            
            
          }
          .vertical-timeline-element:hover {
            transform: scale(1.1); /* Larger size on hover, adjust the scale factor as needed */
            transition: transform 0.3s ease-in-out;
            transform-origin: center bottom;
            transition: transform 0.5s ease-in-out;
            
            .sub_title{
              
              transition: transform 0.5s ease-in-out;
              translate: 0px 0px;
              color : rgb(255, 137, 245);
              font-weight: 500;
              
              
            }
          }
          .sub_title{
            padding-left : 10px;
          }
          @media screen and (min-width: 1024px) {
            .VerticalTimeline{
              max-width: 1070px;
              margin: auto auto;
              position: relative;
              padding: 2em 4em;
            }
            .vertical-timeline-element:hover {
              transform: scale(0.9); /* Larger size on hover, adjust the scale factor as needed */
              transition: 1s ease-in-out;
              .sub_title{
                transform: scale(1.1);
                color : rgb(255, 137, 245);
                font-weight: 500;
                
              }
            }
          }
          @media screen and (min-width: 992px){
            .VerticalTimeline{
              min-width: 1000px;
              margin: auto auto;
              position: relative;
              padding: 1em 0;
              z-index: 1;
            }
            .vertical-timeline-element {
              position: relative;
              margin: 2em 4em 2em 4em;
          }
            .vertical-timeline-element:hover {
              transform: scale(1.05); /* Larger size on hover, adjust the scale factor as needed */
              transition: 1s ease-in-out;
              .sub_title{
                transform: scale(1.1);
                color : rgb(255, 137, 245);
                font-weight: 500;
                
              }
            }
          }
          @media screen and (max-width: 991px) {
            .VerticalTimeline{
              min-width: 1000px;
              margin: auto auto;
              position: relative;
              padding: 2em 4em;
              z-index: 1;
            }
            .vertical-timeline-element {
              position: relative;
              margin: 2em 1em 2em 2.5em;
          }
            .vertical-timeline-element:hover {
              transform: scale(1.05); /* Larger size on hover, adjust the scale factor as needed */
              transition: 1s ease-in-out;
              .sub_title{
                transform: scale(1.1);
                color : rgb(255, 137, 245);
                font-weight: 500;
                
              }
            }
          } 
          
          .grad1 {
            content: "";
            width: 400px;
            height: 400px;
            border-radius: 50%;
            background-color: rgb(73, 43, 226);
            filter: blur(300px);
            z-index: 10;
            position: absolute;
            translate: 600px 600px;
            right:800px;
          }     

          
          
            p span
           {
            color:pink;
           }
        `}
      </style>
      <div className="" ref={timelineRef}>
        <div className="outerpart">
          <VerticalTimeline  >
            <VerticalTimelineElement
              className="vertical-timeline-element--work outergrad shadow-block"
              date=""
              contentStyle={{
                background: "rgba(210, 0, 138, 0.15)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                backdropFilter: "blur(2px)",
                WebkitBackdropFilter: "blur(2px)",
                borderRadius: "20px",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                color: "white",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              iconStyle={{ background: "rgb(215, 50, 200)", color: "#fff" }}
              icon={<FaCircle />}
            >
              <div className="grad1"></div>
              <h3 className="vertical-timeline-element-title sub_title text-4xl ">
                Create Resume
              </h3>
              <h4 className="vertical-timeline-element-subtitle  sub_title">
                SignIn / SignUp <br /> <br />
                <Link
                  to='/signin'
                  class="relative inline-flex items-center justify-start px-6 py-0 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group h-10"
                >
                  <span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                    SignIn | SignUp
                  </span>
                </Link>
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date=""
              className="vertical-timeline-element--work shadow-block"
              contentStyle={{
                background: "rgba(144, 19, 254, 0.15)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                backdropFilter: "blur(2px)",
                WebkitBackdropFilter: "blur(2px)",
                borderRadius: "10px",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                color: "white",
              }}
              iconStyle={{ background: "rgb(215, 50, 200)", color: "#fff" }}
              icon={<FaCircle />}
            >
              <h3 className="vertical-timeline-element-title sub_title text-4xl">
                Engage
              </h3>
              <h4 className="vertical-timeline-element-subtitle sub_title">
                Interact with the Chatbot
              </h4>
              <div className="flex justify-center align-middle">
                <img src={ChatInter} width={130} className="rounded-md" />
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education shadow-block "
              date=""
              contentStyle={{
                background: "rgba(144, 19, 254, 0.15)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                backdropFilter: "blur(2px)",
                WebkitBackdropFilter: "blur(2px)",
                borderRadius: "10px",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                color: "white",
              }}
              iconStyle={{ background: "rgb(215, 50, 200)", color: "#fff" }}
              icon={<FaCircle />}
            >
              <div className="flex justify-center align-middle">
                <img src={Q_A} width={170} className="rounded-md" />
              </div>
              <h3 className="vertical-timeline-element-title sub_title text-4xl">
                Follow up
              </h3>
              <h4 className="vertical-timeline-element-subtitle sub_title">
                Follow the prompts and respond to the chatbot's questions.
              </h4>
              <br />
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education  shadow-block"
              date=""
              contentStyle={{
                background: "rgba(144, 19, 254, 0.15)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                backdropFilter: "blur(2px)",
                WebkitBackdropFilter: "blur(2px)",
                borderRadius: "10px",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                color: "white",
              }}
              iconStyle={{ background: "rgb(215, 50, 200)", color: "#fff" }}
              icon={<FaCircle />}
            >
              <div className="grad2"></div>
              <h3 className="vertical-timeline-element-title sub_title text-4xl">
                Provide your Info
              </h3>
              <h4 className="vertical-timeline-element-subtitle sub_title">
                Provide information such as your work experience, education,
                skills, and any other relevant details.
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education outergrad1 shadow-block"
              date=""
              contentStyle={{
                background: "rgba(144, 19, 254, 0.15)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                backdropFilter: "blur(2px)",
                WebkitBackdropFilter: "blur(2px)",
                borderRadius: "10px",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                color: "white",
              }}
              iconStyle={{ background: "rgb(215, 50, 200)", color: "#fff" }}
              icon={<FaCircle />}
            >
              <div className="grad2"></div>
              <h3 className="vertical-timeline-element-title sub_title text-4xl">
                Final Resume
              </h3>
              <h4 className="vertical-timeline-element-subtitle sub_title">
                Apply for your Dream Jobs
              </h4>
              <div className="flex justify-center align-middle">
                <img src={Resume_img} width={170} className="rounded-md" />
              </div>
            </VerticalTimelineElement>

            {/* <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date=""
              contentStyle={{
                background: "rgba(144, 19, 254, 0.15)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                backdropFilter: "blur(2px)",
                WebkitBackdropFilter: "blur(2px)",
                borderRadius: "10px",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                color: "white",
              }}
              iconStyle={{ background: "rgb(215, 50, 200)", color: "#fff" }}
            //   icon={<FaCircle />}
            >
              <h3 className="vertical-timeline-element-title sub_title">Declarations of Results</h3>


            </VerticalTimelineElement> */}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
