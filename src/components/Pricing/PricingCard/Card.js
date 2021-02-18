import React from "react";
import { Card, Divider, Button } from "antd";
import "antd/dist/antd.css";
import "./Card.css";

const Cards = ({
  title,
  extra,
  one,
  two,
  three,
  four,
  five,
  six,
  btnText,
  color,
  bgColor,
}) => {
  return (
    <div>
      <Card
        hoverable
        title={title}
        extra={extra}
        bordered={true}
        style={{
          borderRadius: "20px",
          marginTop: "2%",
        }}
      >
        <p>{one}</p>
        <Divider style={{ border: "1px solid grey" }} />
        <p>{two}</p>
        <Divider style={{ border: "1px solid grey" }} />
        <p>{three}</p>
        <Divider style={{ border: "1px solid grey" }} />
        <p>{four}</p>
        <Divider style={{ border: "1px solid grey" }} />
        <p>{five}</p>
        <Divider style={{ border: "1px solid grey" }} />
        <p>{six}</p>
        <br />

        <Button
          style={{
            width: "100%",
            color: { color },
            backgroundColor: { bgColor },
          }}
        >
          {btnText}
        </Button>
      </Card>
    </div>
  );
};
export default Cards;
