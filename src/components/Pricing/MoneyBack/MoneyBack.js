import React from "react";
import { Col, Row } from "antd";
import iconImg from "./../../../Assets/images/Group 11058.png";

const MoneyBack = () => {
  return (
    <>
      <Row justify="center">
        <Row
          style={{
            backgroundColor: "#d9f4eb",
            justifyContent: "center",
            width: "1000px",

            borderRadius: "5px",
          }}
        >
          <Col sm={24} lg={6}>
            <img src={iconImg} />
          </Col>
          <Col sm={24} lg={10}>
            <p
              style={{
                fontSize: "25px",
                fontWeight: "bold",
                marginTop: "3%",
              }}
            >
              Money Back Gurantee
            </p>
            <p style={{ fontSize: "15px", color: "grey" }}>
              If you're not satisfied with Career CV for any reason with in your
              30 days, simply email us and we will refund your money.
              <br />
              No strings attached.
            </p>
          </Col>
        </Row>
      </Row>
    </>
  );
};
export default MoneyBack;
