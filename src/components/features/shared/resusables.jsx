import React from "react";
import { notification, Spin } from "antd";
// import { NotificationMsg } from "../../models/NotificationMsg";
// import KrollSpinner from '../../assets/Images/KrollLogoIcon.png';
import './resuables.scss'

export const notificationMsg = ({type, message, description}) => {
  notification[type]({
    message: message,
    description: description,
    duration: 5,
  });
};

export const Spinner = (size) => {
  return (
      <div className="grid-loading-wrapper">
          <Spin
              indicator={<img src="" className="custom-spinner" alt='Loading...' />}
              size={size}
              tip='Loading...'
          >
              <div style={{ padding: 20 }}></div>
          </Spin>
      </div>
  );
};