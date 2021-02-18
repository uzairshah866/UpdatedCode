import React, { useState } from "react";
import { Modal, Button } from "antd";

const TermPolicyModal = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        Open Modal of 1000px width
      </Button>
      <Modal
        okButtonProps={{
          style: {
            float: "left",
            backgroundColor: "#0a2c66",
            border: "none",
            borderRadius: "5px",
            width: "100px",
          },
        }}
        cancelButtonProps={{
          style: {
            backgroundColor: "white",
            color: "#0a2c66",
            borderColor: "#0a2c66",
            borderRadius: "5px",
            width: "100px",
          },
        }}
        title={
          <div>
            <p style={{ fontSize: "20px" }}>
              <strong>Terms & Conditions</strong>
            </p>
            <p style={{ fontSize: "12px", color: "grey" }}>
              Last update 12 March 2020
            </p>
          </div>
        }
        centered
        okText="I Accept"
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={600}
        closable={false}
      >
        <div>
          <h2>
            <strong>Your Aggrement</strong>
            <p
              style={{
                fontSize: "15px",
                marginTop: "10px",
                lineHeight: "30px",
                textAlign: "justify",
                color: "grey",
              }}
            >
              The Famous Poet of Sub-Continent; Respected Lady Madam Naseebo
              Laal qouted at National Award Cermony.
              <br />
              She Said " Mai Kalli Khuray Chyy Nahaa Bethi Gall Ap Sayapaa Pa
              Bethi
              <br /> Mai Sapp Pharan ky Tapp Pharan, Main Jagg Pharan Ya Latt
              Pharan. "<br />
              She got a noble price from USA and there she said, <br />
              "Ajj Chakhh Ly Sawaad Kachay Pakay Bair Da Vyy Main Jitho Jitho
              Kehndi Ann Tu Kyou Nai Cherda. "
            </p>
          </h2>
          <p>
            <h2>
              <strong>Terms</strong>
              <p
                style={{
                  fontSize: "15px",
                  marginTop: "10px",
                  lineHeight: "30px",
                  textAlign: "justify",
                  color: "grey",
                }}
              >
                You Should have Good Sense of Humor.
                <br />
                You Know what You Need to Pick at 1st 2nd 3rd or 4th
                <br />
                You Should have Experience to Caught Kachay Pakkay Bair
              </p>
            </h2>
          </p>
        </div>
      </Modal>
    </>
  );
};

export default TermPolicyModal;
