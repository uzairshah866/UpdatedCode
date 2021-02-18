import React from "react";
import { Row, Col } from "antd";
import QuestionIcon from "./QuestionIcon/QuestionIcon";
import FAQ from "./../Utils/FAQ/FAQ";

const Questions = () => {
  return (
    <div style={{ marginTop: "10%" }}>
      <Row justify="center">
        <Col lg={7} md={7} sm={20} xs={20}>
          <QuestionIcon></QuestionIcon>
        </Col>
        <Col md={8} sm={20} xs={20}>
          <FAQ></FAQ>
        </Col>
        <Col lg={1} md={0} xs={0}></Col>
      </Row>
    </div>
  );
};
export default Questions;
