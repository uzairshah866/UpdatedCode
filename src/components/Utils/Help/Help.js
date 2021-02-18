import React from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import ContactCard from "../ContactCard/ContactCard";
import MessageCard from "../MessageCard/MessageCard";
import img1 from "./../../../Assets/icons/Icon ionic-ios-call.png";
import img2 from "./../../../Assets/icons/Icon feather-message-square.png";

const Help = () => {
  return (
    <>
      <Row style={{ justifyContent: "center" }}>
        <Col sm={24}>
          <h2 className="text-center">
            <strong>We're here to help</strong>
          </h2>
        </Col>
      </Row>

      <Row style={{ justifyContent: "center", marginTop: "5%" }}>
        <Col className="mx-2 " xs={20} sm={20} md={10} lg={6} xl={6}>
          <ContactCard
            title="Call Now"
            extra={<img src={img1} />}
            uppertext={
              <p>
                Our friendly customer service team <br />
                can assist you
              </p>
            }
            country="United States"
            number="123-456-789"
            waitingTime={<p>Average wait time: 2 minutes</p>}
            opening="Opening Time"
            time="10AM - 5PM CST"
          />
        </Col>
        <Col className="mx-2" xs={20} sm={20} md={10} lg={6} xl={6}>
          <MessageCard
            title="Send Message"
            extra={<img src={img2} />}
            uppertext={
              <p>
                Questions? Concerns? We're here to
                <br />
                listened and respond!
              </p>
            }
            lowertext={
              <p>
                Please allow us 2 working days to <br />
                get back to you
              </p>
            }
            btnText="Contact Form"
          />
        </Col>
      </Row>
    </>
  );
};
export default Help;
