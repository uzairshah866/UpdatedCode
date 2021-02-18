import React from "react";
import { Row, Col } from "antd";
import "./ContactBanner.css";

const ContactBanner = () => {
  return (
    <>
      <div className="contact-banner">
        <Row style={{ padding: "5% 0%" }} justify="center">
          <Col span={16}>
            <p
              style={{
                textAlign: "center",
                color: "Black",
                fontWeight: "bold",
                fontSize: "35px",
              }}
            >
              Let us know if you need any help
            </p>
            <p style={{ textAlign: "center", fontSize: "14px", color: "grey" }}>
              Our customer happiness agents will assist you with any issues
              you're facing.
            </p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ContactBanner;
