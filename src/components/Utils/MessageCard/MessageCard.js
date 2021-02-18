import React from "react";
import { Card, Divider } from "antd";
import "antd/dist/antd.css";
import "../ContactCard/ContactCard.css";

const MessageCard = ({ title, extra, uppertext, lowertext, btnText }) => {
  return (
    <div className="site-card-wrapper mt-2">
      <Card
        hoverable
        title={title}
        extra={extra}
        bordered={true}
        style={{
          borderRadius: "20px",
          height: "300px",
          backgroundColor: "#d9f4eb",
        }}
      >
        <p className="text-center">{uppertext}</p>

        <Divider style={{ border: "1px solid grey" }} />
        <p className="text-center">{lowertext}</p>
        <div className="text-center">
          <button
            style={{
              backgroundColor: "#6984ae",
              color: "white",
              width: "250px",
              height: "30px",
            }}
          >
            {btnText}
          </button>
        </div>
      </Card>
    </div>
  );
};
export default MessageCard;
