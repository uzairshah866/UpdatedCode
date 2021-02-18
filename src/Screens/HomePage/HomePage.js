import React from 'react';
import './HomePage.css'
import { Row, Col, Dropdown, Button, Menu } from 'antd'
import { DownOutlined, UserOutlined } from '@ant-design/icons';

import LoginWithGoogle from './../../components/LoginWithGoogle';
import LoginWithLinkedin from './../../components/LoginWithLinkedin';
import Path50309 from './../../Assets/images/Path50309.png'
import GroupPhotos from './../../Assets/images/Group11016.png'
import useWindowDimensions from './../../components/windowDimensions';
import data from './cvsData';
import GlowButton from './../../components/Utils/GlowButton';
import Navbar from './../../components/Navbar/Navbar';
import Footer from './../../components/Footer/Footer';
import ReviewsCard from './../../components/Utils/ReviewsCard/ReviewsCard';
import PricingBanner from './../../components/Pricing/PricingBanner/PricingBanner';
import FAQ from './../../components/Utils/FAQ/FAQ';
import QuestionIcon from '../../components/Questions/QuestionIcon/QuestionIcon';
import PricingJoinNow from './../../components/Pricing/PricingJoinNow/PricingJoinNow';
const menu = (
    <Menu >
        <Menu.Item key="1" icon={<UserOutlined />}>
            1st menu item
      </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
            2nd menu item
      </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>
            3rd menu item
      </Menu.Item>
    </Menu >
);
const HomePage = () => {
    const { width } = useWindowDimensions()
    function handleButtonClick(e) {
        console.log('click left button', e);
    }

    function handleMenuClick(e) {
        console.log('click', e);
    }

    return (<div>
        <Navbar></Navbar>
        <div style={{ height: "80px" }}>

        </div >

        {/* Title Headings Section */}
        <div class="title">
            <Row justify="center">
                <Col
                    lg={9}
                    md={9}
                    sm={13}
                    xs={13}
                    className="headingsColumn"
                >
                    <h3 className="professional m-0 p-0" >Professional</h3>
                    <h1 className="m-0 p-0 mainHeading">Resume Maker</h1>
                    <h2 className="m-0 p-0 secondMainHeading" >For Profession Lover</h2>
                    <p className="TitlePara">Professionally designed and employer approved, our CV templates have helped people get hired at the world’s best companies. 20+ customizable template options</p>
                    <Row justify="space-around">

                        <Col className="py-2" lg={11} md={20} sm={20} xs={20}>
                            <LoginWithGoogle
                                style={{

                                    opacity: 0.5
                                }}
                                className="LoginButtons"
                                name="Sign up with Google"></LoginWithGoogle>

                        </Col>
                        <Col className="py-2" lg={11} md={20} sm={20} xs={20}>
                            <LoginWithLinkedin
                                // style={{
                                //     fontSize: "12px",
                                //     width: "100%",
                                //     paddingTop: "8px",
                                //     paddingBottom: "8px",
                                //     borderRadius: "4px",

                                // }}
                                className="LoginButtons"

                                name="Sign up with LinkedIn"></LoginWithLinkedin>

                        </Col>
                    </Row>
                </Col>

                <Col
                    lg={10}
                    md={10}
                    sm={13}
                    xs={13}
                    style={{ paddingTop: "5%" }}
                >
                    <img style={{ maxWidth: "100%" }} src={GroupPhotos}></img>
                </Col>

            </Row>
        </div>


        {/* Templates View Section */}

        <div className="container" style={{ padding: "0px 30px", justifyContent: "center", marginTop: "15%" }}>
            <div >
                <Row justify="space-around">
                    <Col md={15}>

                        <h2 className="AllCvHeading">All CV Templates</h2>
                        <p className="templeateHeadingInfo">View our list of curriculum vitae (CV) templates for every profession and career
</p>

                    </Col>
                    <Col span={8}>
                        <div className="dropDown">
                            <p className="my-0" style={{ width: "90%", fontSize: "12px", padding: "2% 0%" }}>All CV Templates</p>
                            <div style={{ fontSize: "12px", color: "#FF4309" }}> <DownOutlined /></div>
                        </div>

                    </Col>
                </Row>
            </div>
            <div>
                <Row >
                    {data.map((d, index) => {
                        return <Col className="mx-auto my-5" lg={5} md={7} sm={11} xs={11}>
                            <img style={{ maxWidth: "100%" }} src={d.image} alt="" />
                            <h4 className="cvTitle">{d.name}</h4>
                            <p className="cvText">{d.description}</p>
                        </Col>
                    })}

                </Row>
            </div>

        </div>



        {/* Create Cv Options */}
        <div style={{ backgroundColor: "#0A2C66", marginTop: "5%" }} >

            <Row justify="center" style={{ padding: "5% 0" }}>
                <Col lg={7} md={7} sm={20}>
                    <img style={{ maxWidth: "100%" }} src={GroupPhotos}></img>

                </Col>
                <Col className="my-4" offset={2} lg={7} md={7} sm={20}>
                    <h2 className="CreateCVTextHeading">More than 15 customizable Templates</h2>
                    <ul className="pl-3">
                        <li className="listItems">Choose from more than 15 adaptable templates</li>
                        <li className="listItems">Access from any device at any time</li>
                        <li className="listItems">Allow your CV to appear in Google searches</li>
                        <li className="listItems">Make your PDF downloadable from your online CV</li>
                        <li className="listItems">Protect online curriculum vitae access with a password</li>
                        <li className="listItems">Share CV link on your PDF resume, social networks, in a text message or email</li>
                    </ul>
                    <GlowButton name="Create CV Now" />
                </Col>

            </Row>
        </div>

        {/* Reviews */}
        <div >
            <h2 style={{
                fontFamily: "RobotoHeading",
                fontSize: "25px",
                fontWeight: "bold",
                textAlign: "center",
                marginTop: "10%"
            }} >See what our customers have to say</h2>
            <Row justify="center">
                {[1, 2, 3].map((d, index) => {
                    return <Col lg={5} md={5} sm={13} xs={18}>
                        <ReviewsCard name="Jennifer" category="Student" review="An amazing app. Their templates are easy
to use for an elegant and creative CV. Their
support staff are so kind and friendly, I highly
recommend it. If I could give more than 5
stars, I would give more than 1000!"/>
                    </Col>
                })}

            </Row>
            <Row justify="center">
                <Col span={15} >
                    <form >
                        <input type="text" class="feedbackBar" placeholder="Add Your FeedBack" />
                        <button class="btn">Add</button>
                    </form>
                </Col>
            </Row>


        </div>

        {/* pricing Banner */}
        <div style={{ marginTop: "10%" }}>
            <PricingBanner
                paraStyle={{
                    textAlign: "center",
                    fontFamily: "RobotoHeadingMedium",

                    fontSize: "30px",
                }}
                secondParaStyle={{
                    textAlign: "center",
                    fontFamily: "AvenirText",
                    fontSize: "15px",
                }}
                firstBtn="#ECECEC"
                secondBtn="#FFFFFF"
                fontColor="#FFFFFF"
                cardColor="#0A2C66"
            />
        </div>


        {/* FrequentlyAskQuestions */}
        <div style={{ marginTop: "10%" }}>
            <Row justify="center">
                <Col lg={7} md={7} sm={20} xs={20}>
                    <QuestionIcon></QuestionIcon>
                </Col >
                <Col md={8} sm={20} xs={20}>
                    <FAQ></FAQ>
                </Col>
                <Col lg={1} md={0} xs={0}></Col>
            </Row>
        </div>

        {/* Join Now Banner */}
        <div style={{ marginTop: "10%" }}>
            <PricingJoinNow />

        </div>
        <Footer />
    </div >);
}

export default HomePage;