import React from "react";
import Cards from "./Card";
import { Row, Col } from "antd";
import "antd/dist/antd.css";

const PricingCard = () => {
  return (
    <>
      <p
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "35px",
          marginTop: "5%",
        }}
      >
        What You Get With Career CV
      </p>
      <div>
        <Row justify="center">
          <Col xs={20} sm={20} md={10} lg={6} xl={6}>
            <Cards
              title="Free"
              extra="$0"
              one={
                <p>
                  <b>3 professionally Designed Templates</b>
                  <br />
                  Basic options to get you started
                </p>
              }
              two={
                <p>
                  <b>Create 1 CV</b>
                  <br />
                  Customize up to one template
                </p>
              }
              three={
                <p>
                  <b>Download to PDF</b>
                  <br />
                  Access to one CV download
                </p>
              }
              four={
                <p>
                  <b>Career CV branding Added</b>
                  <br />
                </p>
              }
              five={
                <p style={{ color: "#e6e6e6" }}>
                  <b>ATS-Friendly Template</b>
                  <br />
                  Optimized for applicant tracking systems
                </p>
              }
              six={
                <p style={{ color: "#e6e6e6" }}>
                  <b>CV Perfomance Analytics</b>
                  <br />
                  Track views and downloads on your CV
                </p>
              }
              btnText={
                <p style={{ color: "#0a2c66", backgroundColor: "#e6e6e6" }}>
                  Sign up Free
                </p>
              }
            />
          </Col>
          <Col
            xs={20}
            sm={20}
            md={10}
            lg={6}
            xl={6}
            style={{ marginLeft: "4%" }}
          >
            <Cards
              title="Pro"
              extra="$12/m"
              one={
                <p>
                  <b>20+ Professionally Designed Templates</b>
                  <br />
                  Premium designs to get noticed
                </p>
              }
              two={
                <p>
                  <b>Crete Ultimate Resumes</b>
                  <br />
                  Customize for each job application
                </p>
              }
              three={
                <p>
                  <b>Unlimited PDF Downloads</b>
                  <br />
                  No restrictions or extra fees
                </p>
              }
              four={
                <p>
                  <b>Career CV branding Removed</b>
                  <br />
                </p>
              }
              five={
                <p>
                  <b>ATS-Friendly Template</b>
                  <br />
                  Optimized for applicant tracking systems
                </p>
              }
              six={
                <p>
                  <b>CV Perfomance Analytics</b>
                  <br />
                  Track views and downloads on your CV
                </p>
              }
              btnText={
                <p style={{ color: "#e6e6e6", backgroundColor: "#0a2c66" }}>
                  Get Pro Now
                </p>
              }
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default PricingCard;
