import React from "react";
import { Row, Col } from "antd";
import img from "./../../Assets/images/Group 11091.png";
import ContactForm from "./../../components/Utils/ContactForm/ContactForm";
import Help from "./../../components/Utils/Help/Help";
import Questions from "./../../components/Questions/Questions";
import ContactBanner from "../../components/Utils/ContactBanner/ContactBanner";

const ContactScreen = () => {
  return (
    <>
      <Row style={{ justifyContent: "center" }}>
        <Col span={24}>
          <ContactBanner />
        </Col>
        <Col span={24} className="mt-5">
          <Help />
        </Col>
        <Col span={24}>
          <Questions />
        </Col>
      </Row>
      <Row justify="center" style={{ backgroundColor: "#fafbfc" }}>
        <Col>
          <ContactForm />
        </Col>
      </Row>
    </>
  );
};
export default ContactScreen;
