import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Workflow.css'
import ststep from "../../assets/ststep.png";
import sources from "../../assets/sources.png";
import summing from "../../assets/summing.png";
import sinks from "../../assets/sinks.png";
import Navbar from "../Navbar/Navbar";
import { Parallax } from "react-parallax";
import climate from "../../assets/climatechange.jpg";
import water from "../../assets/water.jpg";
import waste from "../../assets/waste.png";
import biodiversity from "../../assets/biodiversity.png";
const Workflow = () => {
  const [active, setActive] = useState(1);

  const handleClick = (cardNo) => {
    setActive(cardNo);
  };

  return (
    <>
      <Navbar />
      <div className="maindiv">
        <h1>A Step towards Sustainability</h1>
      </div>
      <div className="box-container-2">
        <div>
          <div className="bottom-box">
            <h6>Climate Change</h6>
            <Link to="/">Read more</Link>
          </div>
        </div>
        <div>
          <div className="bottom-box">
            <h6>Water</h6>
            <Link to="/Sec2">Read more</Link>
          </div>
        </div>
        <div>
          <div className="bottom-box">
            <h6>Waste</h6>
            <Link to="/Sec3">Read more</Link>
          </div>
        </div>
        <div>
          <div className="bottom-box">
            <h6>Biodiversity</h6>
            <Link to="/Sec4">Read more</Link>
          </div>
        </div>
      </div>
      <div className="app-2">
        <Parallax strength={-600} bgImage={climate} className="parallel-img">
        <div className="content">
            <div className="text-content">
              <h1>Climate Change</h1>
              <div className="card-container1">
                <div className="intro-card">
                  <h2>Causes</h2>
                  <p>
                    <b>Greenhouse gas emissions</b>:<br />
                    The burning of
                    <br /> fossil-fuels, deforestation,
                    <br /> and industrial activities release carbon
                    dioxide(CO2), methane(CH4)
                    <br />
                    and nitrous oxide(N2O)into the atmosphere,
                    <br /> trapping heat and causing Global warming.
                    <br />
                    <b>Deforestation:</b>
                    The clearing of forests foragriculture
                    <br />
                    ,urbanization,andlogging contributes to
                    <br />
                    increased atmospheric CO2 levels ,disrupts
                    <br /> ecosystems ,and reduces carbons inks.
                  </p>
                </div>
                <div className="cause-card">
                  <h2>I-N-T-R-O</h2>
                  <p>
                    Climate change refers to
                    <br />
                    long-termalterations in temperature patterns,
                    <br />
                    weather events,and environmental conditions
                    <br /> on Earth.
                    <br />
                    The consequences of climate change are far
                    <br />
                    reaching and posesignificant challenges to ecosystems,
                    <br />
                    humansocieties, and the planet as a whole.
                  </p>
                </div>
                </div>
                <div className="card-container2">
                <div className="impact-card">
                  <h2>Impacts</h2>
                Rising temperatures<br/>
                Sea-levelrise<br/>
                Forest conservation and <br/>reforestation
                </div>
                <div className="prevention-card">
                  <h2>Prevention</h2>
                  <p>
                <b>Mitigation Strategies:</b>
                <br />
                <b>Transition to renewable energy</b>: Investing in solar,wind,
                and hydropower to replace fossil fuels reduces <br />
                greenhouse gas emissions and promotes sustainable energy
                sources.
                <br />
                Forest conservation and reforestation:
                <br />
                Protecting existing forests and restoring degraded areas helps
                sequester carbondioxide and preserve biodiversity.
              </p>
                </div>
              </div>
              <div className="conclusion-card">
                <h2>Conclusion</h2>
              <p>
                Climate change is a pressing global challenge that demands
                immediate action.By addressing<br/> its causes,mitigating
                <br /> its impacts,and adapting to it's effects,<br/>we can safeguard
                our planet's future.Governments,
                <br />
                industries,communities,and individuals must work together to
                reduce greenhouse<br/>  gas emissions,promote <br />
                sustainable practices,and build climate resilience.
                <br />
                Only through collective efforts can we mitigate the devastating
                consequences of
                <br />a climate change and create a sustainable and habitable
                planet for future generations.
              </p>
                </div>
            </div>
            </div>
        </Parallax>
        <Parallax
          strength={300}
          blur={{ min: 5, max: 5 }}
          bgImage={water}
          className="parallel-img1"
          id="sec2"
        >
          <div className="content">
            <div className="text-content">
              <h1>Water</h1>
              <div className="card-container1">
                <div className="intro-card water">
                  <h2>Water Conservation Techniques</h2>
                  <p>
                    <b>House hold Level:

</b><br />
Installinglow flowfaucets,showerheads,and toilets to reduce water
                    <br />  consumption.
Repairing leaky pipes and faucet stop<br/> revent water wastage.
                    <br /> Opting for energy efficient washing machines and dishwashers that useless water.
                    <br /> 
                    -Using a dishwasher or washing machine only when 
                    <br /> fully loaded to maximize water usage.
    <br/>
    -Utilizing native or drought-resistant plants that require less water.<br/>
Implementing drip irrigation systems or soaker <br/>hoses to deliver water directly top lantroots,<br/>
minimizing evaporation.
                  </p>
                </div>
                <div className="cause-card water">
                  <h2>I-N-T-R-O</h2>
                  <p>
                  The importance of water conservation
                    <br />
                    ,for ensuring the sustainability of our environment and
                    <br />
                    protecting Prakruthi.The need for collective efforts 
                    <br /> 
                    to conserve water and promote Prakruthi Suraksha.
                    <br />
                    The consequences of climate change are far
                    <br />
                  </p>
                </div>
                </div>
                <div className="card-container2">
                <div className="impact-card water">
                  <h2>Understanding</h2>
                  the practice of using water<br/> efficiently and wisely to reduce
waste and preserve<br/> water resources.
                </div>
                <div className="prevention-card water">
                  <h2>Benefits</h2>
                  <p>
                <b>Mitigation Strategies:</b>
                <br />
                <b>Transition to renewable energy</b>: Investing in solar,wind,
                and hydropower to replace fossil fuels reduces <br />
                greenhouse gas emissions and promotes sustainable energy
                sources.
                <br />
                Forest conservation and reforestation:
                <br />
                Protecting existing forests and restoring degraded areas helps
                sequester carbondioxide and preserve biodiversity.
              </p>
                </div>
              </div>
              <div className="conclusion-card water">
                <h2>Conclusion</h2>
              <p>
              <br/>Water conservation plays a crucial role in ensuring <br/>Prakruthi Suraksha <br/>and maintaining a
sustainable environment.<br/>
Through individual actions,community initiatives,<br/>and government interventions,we can
collectively conserve <br/>water and secure a better future for our planet.
<br/>Let us strive to become responsible <br/>stewards of water resources
              </p>
                </div>
            </div>
            </div>
        </Parallax>
        <Parallax
          strength={600}
          bgImage={waste}
          className="parallel-img1"
          id="#Sec3"
        >
          <div className="content">
            <div className="text-content">
              <h1>Waste</h1>
              <div className="card-container1">
                <div className="intro-card waste">
                  <h2>Techniques for</h2>
                  <h3> waste management</h3>
                  <p>
                    <b>Waste Reduction and Prevention:</b>
                    
                    Encouraging producers tominimize packaging
                    <br />
                     and use eco-friendly materials
                     <br />
                     Conducting public campaigns to raise awareness
                     <br />
                      about waste reduction and responsible consumption.
                      <br />
                      <b>Recycling and Resource Recovery:</b><br />
                      Establishing comprehensive recycling infrastructure, 
                      <br />
                      including collection systems and recycling centers.
                      <br />
                      Providing composting bins and educational
                      <br />
                       resources to households and communities
                       <br />
                       <b>Waste Treatment and Disposal</b><br />
                   
                  </p>
                </div>
                <div className="cause-card waste">
                  <h2>I-N-T-R-O</h2>
                  <p>
                  The importance of effective waste management in 
                  <br />
                  promoting environmental sustainability.
                  <br />
                  The negative impacts of improper wasted is posalon
                  <br />
                   ecosystems, humanhealth, andnatural resources
                   <br />
                   The need for comprehensive waste management practices
                   <br />
                    to reduce waste generation and promoterecycling.

                  </p>
                </div>
                </div>
                <div className="card-container2">
                <div className="impact-card waste">
                  <h2>Understanding Waste Management:</h2>
                  Definition of waste management: the systematic
                  <br />
                   handling, collection, treatment, and disposal of waste materials.
                   <br />
                   Objectives of waste management: minimizing waste
                   <br />
                    generation, maximizing resource recovery, and
                    <br />
                     reducing environmental and health risks.



                </div>
                <div className="prevention-card waste">
                  <h2>Stake holder Collaboration:</h2>
                  <p><b>Government Initiatives:</b>
                  <br />
                  Policy and legislation
                  <br />
                Extended Producer Responsibility (EPR)<br />
                <b>CommunityEngagement:</b><br />
                Community based recycling programs
                <br />
               Public-privatepartnerships
              
              </p>
                </div>
              </div>
              <div className="conclusion-card waste">
                <h2>Conclusion</h2>
              <p><b>Individual Responsibility:</b>
              <br />
              Waste segregation and proper disposal:
              <br />
              Educating individuals about waste segregation
              <br />
               practices and the importance of disposing
               <br />
                of different types of waste separately.
                <br />
              Encouraging the use of recycling bins
              <br />
               and promoting responsible wasted is posal habits.
               <br />
               Discouraging littering and promoting a clean 
               <br />
               environment through public campaigns and initiatives




              </p>
                </div>
            </div>
            </div>
        </Parallax>
        <Parallax
          id="Sec4"
          strength={300}
          bgImage={biodiversity}
          className="parallel-img1"
        >
          <div className="content">
            <div className="text-content">
              <h1>Biodiversity</h1>
              <div className="card-container1">
                <div className="intro-card bio">
                  <h2>Introduction:</h2>
                  <p>Highlighting the significance of biodiversity
                    <br />
                     in maintaining eco logical balance and the
                    <br />
                  need to protect it for Prakruthi Suraksha.
                  <br />
                  Defining biodiversity and its various components
                  <br />
                  Emphasizing the role of biodiversity in 
                  <br />
                  providing ecosystem services and supporting human well-being.
                  
                  </p>
                </div>
                <div className="cause-card bio">
                  <h2>Understanding Biodiversity</h2>
                  <p>Definition of biodiversity: the variety of life forms, 
                  <br />  
                    including plants, animals, micro organisms, and their
                    <br />
                     genetic diversity, as well as the ecosystems they inhabit.
                     <br />
                     Components of biodiversity: species diversity,
                    <br />
                      genetic diversity, and ecosystem diversity.

                  </p>
                </div>
                </div>
                <div className="card-container2">
                <div className="impact-card bio">
                  <h2>Threats</h2>
                <p><b>Habitat Loss and Fragmentation:</b>
                <br />
                Deforestation and land conversion
                <br />
               Urban spraw land habitat fragmentation<br />
               <b>Climate Change:</b><br />
               Alteration of ecosystem
               <br />
              Impacts on vulnerable species
              <br /><b>Pollution and Over exploitation</b>
              Pollution of land, air, and water
              <br />
              Unsustainable resource extraction
              <br />
             
                </p>
                </div>
                <div className="prevention-card bio">
                  <h2>Importance</h2>
                  <p><b>Ecosystem Services</b>
                  <br />
                  Climate regulation
                  <br />
                Air and water purification
                <br />
              Nutrient cycling and soil fertility
              <br /><b>Economic and Social Benefits:</b>
              <br />
              Food security and agriculture
              <br />
              Medicinal resources
             <br />Tourism and recreation                
              </p>
                </div>
              </div>
              <div className="conclusion-card bio">
                <h2>Conservation</h2>
              <p><b>Protected Areas and Conservation Reserves:</b>
              <br />
              National parks and wild lifes anctuaries
              </p>
                </div>
            </div>
            </div>
        </Parallax> 
      </div>
      <div id="workflow">
        <h1>Workflow</h1>

        <div className="button-container">
          <div
            onClick={() => {
              handleClick(1);
            }}
          >
            <button className={`number ${active === 1 ? "active" : ""}`}>
              1
            </button>
          </div>

          <div
            onClick={() => {
              handleClick(2);
            }}
          >
            <button className={`number ${active === 2 ? "active" : ""}`}>
              2
            </button>
          </div>
          <div
            onClick={() => {
              handleClick(3);
            }}
          >
            <button className={`number ${active === 3 ? "active" : ""}`}>
              3
            </button>
          </div>
          <div
            onClick={() => {
              handleClick(4);
            }}
          >
            <button className={`number ${active === 4 ? "active" : ""}`}>
              4
            </button>
          </div>
        </div>
        <DisplayCard cardNo={active} className="display-card" />
      </div>
    </>
  );
};
const DisplayCard = ({ cardNo }) => {
  let heading, description, img_src;
  if (cardNo === 1) {
    heading = "Sources and Sinks";
    img_src = ststep;
    description = "identification of sources and sinks";
  } else if (cardNo === 2) {
    heading = "carbon emissions";
    img_src = sources;
    description = "calculations of carbon emissions";
  } else if (cardNo === 3) {
    heading = "carbon absorption";
    img_src = sinks;
    description = "calculation of carbon absorption";
  } else if (cardNo === 4) {
    heading = "Summing Up";
    img_src = summing;
  }

  return (
    <>
      <div className="body">
        <div className="image-container1 animated">
          <img src={img_src} />
          <span className="title">{heading}</span>
          <span className="description">{description}</span>
          <span className="line top"></span>
          <span className="line left"></span>
        </div>
      </div>
    </>
  );
};
export default Workflow;