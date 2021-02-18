import React from "react";
import { Row, Col } from "antd";
import PricingBanner from "./../../components/Pricing/PricingBanner/PricingBanner";
import PricingCard from "./../../components/Pricing/PricingCard/PricingCard";
import Questions from "./../../components/Questions/Questions";
import downwardIcon from "./../../Assets/icons/Icon material-keyboard-arrow-down.png";
import MoneyBack from "./../../components/Pricing/MoneyBack/MoneyBack";
import Carousel from "./../../components/Pricing/Carousel/Carousel";
import PricingJoinNow from "./../../components/Pricing/PricingJoinNow/PricingJoinNow";
import img from "./../../Assets/images/Path50309.png";

const PricingScreen = () => {
  return (
    <>
      <Row>
        <Col span={24}>
          <PricingBanner
            divStyle={{
              backgroundImage: `url("${img}")`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              width: "100%",
            }}
            paraStyle={{
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: "35px",
            }}
            secondParaStyle={{
              textAlign: "center",
              color: "white",
              fontSize: "15px",
            }}
          />
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col>
          <div className="text-center mt-5">
            <p>Discover all Pro Features</p>
          </div>
          <div
            style={{
              backgroundColor: "#e6e6e6",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              textAlign: "center",
              margin: "0 auto",
            }}
          >
            <img
              src={downwardIcon}
              style={{ paddingTop: "12px", cursor: "pointer" }}
            />
          </div>
        </Col>
      </Row>
      <Row justify="center" className="mt-5">
        <Col>
          <MoneyBack />
        </Col>
      </Row>
      <div>
        <PricingCard />
      </div>
      <Row className="mt-5">
        <Col span={24}>
          <Carousel />
        </Col>
      </Row>
      <Row justify="center">
        <Col span={24}>
          <Questions />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col span={24}>
          <PricingJoinNow />
        </Col>
      </Row>
    </>
  );
};
export default PricingScreen;
