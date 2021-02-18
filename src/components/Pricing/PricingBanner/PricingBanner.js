import React from "react";
import { Row, Col } from "antd";
import PricingBannerCard from "../PricingBannerCard/PricingBannerCard";

const PricingBanner = ({ divStyle, paraStyle, secondParaStyle, firstBtn, secondBtn, fontColor, cardColor }) => {
  return (
    <div
      style={divStyle}
    >
      <Row>
        <Col span={24}>
          <p
            className="mt-5"
            style={paraStyle}
          >
            Grow your career with resume builder
            <br />
            trusted by 3+ million people.
          </p>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <p
            style={secondParaStyle}
          >
            Professonal resume templatesto help you land your dream job.
          </p>
        </Col>
      </Row>
      <Row>
        <Col span={24} style={{ marginTop: 50 }}>
          <PricingBannerCard firstBtn={firstBtn} secondBtn={secondBtn} fontColor={fontColor} cardColor={cardColor} />
        </Col>
      </Row>
    </div>
  );
};
export default PricingBanner;
