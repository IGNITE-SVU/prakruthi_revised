import React from "react";
import './Home.css'
import desktop from "../../assets/desktop-solid.png";
import list from "../../assets/list-check-solid.png";
import statistics from "../../assets/statistics.png";
import about from "../../assets/about.png";
import header2 from "../../assets/header2.png";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import {AiFillFacebook,AiFillGooglePlusCircle,AiFillLinkedin,AiFillTwitterCircle,AiFillYoutube} from 'react-icons/ai'
// import ImgSlide from "../Carousel/ImgSlide";

const Home = () => {
  return (
    <>
      <Navbar />
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1>
                Together,let's build a <span>Sustainable </span>and{" "}
                <span>Green Future</span>
              </h1>
              <h2>
                Sustainability is the way to our future - Prakruthi Suraksha is
                the way forward.
              </h2>
              <div className="d-flex">
                <Link to="/workflow" className="btn-get-started">
                  About
                </Link>
                <Link
                  to="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                  className="btn-watch-video"
                >

                  <span>Contact</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img">
              <img src={header2} className="animated" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="box-container-1">
          <div className="box">
            <div className="icon-text-layout">
              <div className="icon-container">
                <img src={desktop} alt="desktop"></img>
              </div>
              <div className="text-container">
                <h4>OUR-WEBSITE-APP</h4>
                <p>
                  download our WEBSITE-App
                </p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="icon-text-layout">
              <div className="icon-container">
                <img src={list} alt="desktop"></img>
              </div>
              <div className="text-container">
                <h4>WORK-PROGRESS</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Error aliquam distinctio{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="icon-text-layout">
              <div className="icon-container">
                <img src={statistics} alt="desktop"></img>
              </div>
              <div className="text-container">
                <h4>STATISTICS</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Error aliquam distinctio{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="image-content-layout row">
          <div className="image-container">
            <img src={about} alt="Product" />
          </div>
          <div className="content-container">
            <h1>What is Prakruthi Suraksha !? </h1>
            <div>
              <p className="fst-italic">
                Prakruti Suraksha aims to protect and conserve natural
                resources, such as forests, water bodies, and wildlife, which
                play a vital role in reducing carbon footprints. By promoting
                sustainable and eco-friendly practices, Prakruti Suraksha can
                help reduce carbon emissions from various sources such as
                industries, agriculture, transportation, and households.
              </p>
              <ul>
                <li>
                   The program focuses on
                  promoting renewable energy sources much as solar, wind, and
                  hydro power. which can replace conventional energy sources
                  that are major contributors to carbon eminent.
                </li>
                <li>
                   Prakruti Suraksha alo aims
                  to raise awareness among people about the importance of
                  reducing carbon footprint and encouraging them to adopt
                  sustainable practices in their daily live The program aho
                  mupport: the development of carbon-neutral and carbon negative
                  technologie that can help reduce carbon footprints and combat
                  climate change.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="box-container-1">
          <div className="bottom-box">
            <h1>232</h1>
            <h6>SINKS</h6>
          </div>
          <div className="bottom-box">
            <h1>521</h1>
            <h6>SOURCES</h6>
          </div>
          <div className="bottom-box">
            <h1>463</h1>
            <h6>HOURS OF WORK</h6>
          </div>
          <div className="bottom-box">
            <h1>15</h1>
            <h6>VOLUNTEERS</h6>
          </div>
        </div>
        <section id="cta" className="cta">
          <div className="container">
            <div className="text-center">
              <h3>Call To Action</h3>
              <p>
                {" "}
                Safeguarding the environment is not just a duty it's our moral
                obligation.Together, we can create a greener future by promoting
                eco-friendly practices and fostering a culture of environmental
                responsibility.{" "}
              </p>
              <Link className="cta-btn" to="/">
                Call To Action
              </Link>
            </div>
          </div>
        </section>
        
      </section>
    </>
  );
};

export default Home;
