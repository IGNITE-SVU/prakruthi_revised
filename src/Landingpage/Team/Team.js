import React from "react";
import {  Link } from "react-router-dom";
import './Team.css'
import Navbar from "../Navbar/Navbar";

const Team = () => {
  return (
    <>
      <Navbar />

      <section id="team" className="team section-bg">
        <div className="container">
          <div className="section-title word-head">
            <h1>Our Collaboration</h1>
            <p>
              This is a joint initiative of PLANETWISE and Sri padmavathi
              solutions
            </p>
          </div>

          <div className="row"> 
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch animated">
              <div className="member">
                <img
                  src="https://standrewshw.co.uk/wp-content/uploads/2021/11/planet.png"
                  alt=""
                />
                <h4>Planetwise Company</h4>
                <span>Chief Executive Officer</span>
                <p>
                  We believe in the collaborative effort of supply chain to
                  create a healthier planet and a brighter future for all. Our
                  goal is to create a more sustainable future for generations to
                  come, and we are committed to working tirelessly to achieve
                  this vision.
                </p>
                <div className="social">
                  <Link to="">
                    <i className="bi bi-twitter"></i>
                  </Link>
                  <Link to="">
                    <i className="bi bi-facebook"></i>
                  </Link>
                  <Link to="">
                    <i className="bi bi-instagram"></i>
                  </Link>
                  <Link to="">
                    <i className="bi bi-linkedin"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch animated">
              <div className="member">
                <img
                  src="https://img.freepik.com/free-vector/flat-dedsign-innovation-concept-illustrated_23-2149151731.jpg"
                  alt=""
                />
                <h4>Sri Padmavathi Environmental Solutions</h4>
                <span>Product Manager</span>
                <p>
                  Repellat fugiat adipisci nemo illum nesciunt voluptas
                  repellendus. In architecto rerum rerum temporibus
                </p>
                <div className="social">
                  <Link to="">
                    <i className="bi bi-twitter"></i>
                  </Link>
                  <Link to="">
                    <i className="bi bi-facebook"></i>
                  </Link>
                  <Link to="">
                    <i className="bi bi-instagram"></i>
                  </Link>
                  <Link to="">
                    <i className="bi bi-linkedin"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch animated">
              <div className="member">
                <img
                  src="https://images.shiksha.com/mediadata/images/1551848982phpDv35f1.jpeg"
                  alt=""
                />
                <h4>Sri Venkateswara University College of Engineering</h4>
                <span>Technical Team</span>
                <p>
                  The Vision of Sri Venkateswara University College of
                  Engineering is to be the leader in the creation and
                  development of globally competitive human capital in
                  Engineering Education for Technological, Economical and Social
                  Enrichment of the Society, through its open and flexible
                  Academic Programs.
                </p>
                <div className="social">
                  <Link to="">
                    <i className="bi bi-twitter"></i>
                  </Link>
                  <Link to="">
                    <i className="bi bi-facebook"></i>
                  </Link>
                  <Link to="">
                    <i className="bi bi-instagram"></i>
                  </Link>
                  <Link to="">
                    <i className="bi bi-linkedin"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contaienr2">
          <div className="section-title">
            <h2>Meet our Technical Team</h2>
            <p>Ignite Technical team</p>
          </div>
          <div className="main-box inner flex">
            <div className="team-wrap">
              <div className="team-member text-center">
                <div className="team-img">
                  <img src="https://3.imimg.com/data3/AM/CC/MY-15565569/women-in-formal-dress-500x500.gif" />
                  <div className="overlay">
                    <div className="team-details text-center">
                      <p>Hi There</p>
                      <div className="socials mt-20">
                        <Link to="#">
                          <span className="fa fa-facebook"></span>
                        </Link>
                        <Link to="#">
                          <span className="fa fa-twitter"></span>
                        </Link>
                        <Link to="#">
                          <span className="fa fa-google-plus"></span>
                        </Link>
                        <Link to="#">
                          <span className="fa fa-envelope"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
              </div>
              <h6 className="team-title">team-member</h6>
              <span>Front End developer</span>
            </div></div>
            <div className="team-wrap">
              <div className="team-member text-center">
                <div className="team-img">
                  <img src="https://3.imimg.com/data3/AM/CC/MY-15565569/women-in-formal-dress-500x500.gif" />
                  <div className="overlay">
                    <div className="team-details text-center">
                      <p>Our Web</p>
                      <div className="socials mt-20">
                        <Link to="#">
                          <span className="fa fa-facebook"></span>
                        </Link>
                        <Link to="#">
                          <span className="fa fa-twitter"></span>
                        </Link>
                        <Link to="#">
                          <span className="fa fa-google-plus"></span>
                        </Link>
                        <Link to="#">
                          <span className="fa fa-envelope"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
              </div>
              <h6 className="team-title">team-member</h6>
              <span>Front End developer</span>
            </div></div>
            <div className="team-wrap">
              <div className="team-member text-center">
                <div className="team-img">
                  <img src="https://3.imimg.com/data3/AM/CC/MY-15565569/women-in-formal-dress-500x500.gif" />
                  <div className="overlay">
                    <div className="team-details text-center">
                      <p>Our Web</p>
                      <div className="socials mt-20">
                        <Link to="#">
                          <span className="fa fa-facebook"></span>
                        </Link>
                        <Link to="#">
                          <span className="fa fa-twitter"></span>
                        </Link>
                        <Link to="#">
                          <span className="fa fa-google-plus"></span>
                        </Link>
                        <Link to="#">
                          <span className="fa fa-envelope"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
              </div>
              <h6 className="team-title">team-member</h6>
              <span>Front End developer</span>
            </div></div>
            <div className="team-wrap">
              <div className="team-member text-center">
                <div className="team-img">
                  <img src="https://3.imimg.com/data3/AM/CC/MY-15565569/women-in-formal-dress-500x500.gif" />
                  <div className="overlay">
                    <div className="team-details text-center">
                      <p>Our Web</p>
                      <div className="socials mt-20">
                        <Link to="#">
                          <span className="fa fa-facebook"></span>
                        </Link>
                        <Link to="#">
                          <span className="fa fa-twitter"></span>
                        </Link>
                        <Link to="#">
                          <span className="fa fa-google-plus"></span>
                        </Link>
                        <Link to="#">
                          <span className="fa fa-envelope"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
              </div>
              <h6 className="team-title">team-member</h6>
              <span>Front End developer</span>
            </div></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
