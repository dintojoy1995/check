import React, { useEffect, useState,useRef} from "react";
import "../css/Health_Card.css"
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card, Form } from "react-bootstrap";
import { useRecoilValue } from "recoil"; //Fetch data from Recoil Atom
import { useSetRecoilState } from "recoil"; //update data within Recoil Atom
import { apiResponseHealthPremiumAtom } from "./recoilAtom";
import Localbase from 'localbase';


function HealthPremium21() {

  const db = new Localbase('p4usStorage');
  
  const navigate  = useNavigate ();
  const apiResponsePremiumData = useRecoilValue(apiResponseHealthPremiumAtom);
  const [modalShow, setModalShow] = useState(false);
  const [selectedModal, setSelectedModal] = useState(null);
  const [policyType, setPolicyType] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState([]);//newww
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(null);


  const handleShowPlanDetails = (e) => {
    setSelectedModal(e);
    setModalShow(true);
  };
  
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = (index) => {
      if (selectedPlanIndex === index) {
        setSelectedPlanIndex(null);
      } else {
        setSelectedPlanIndex(index);
      }
    };

    const handleBuyNowClick = (selectedPlan) => {
      // Navigate to the new component with the selected data
      db.collection('localStorage').doc('premiumJson').set({['value']:selectedPlan});
      //add({['value']:selectedPlan});
      navigate('/health_proposal', {state:{data:{selectedPlan }}});
        };


    console.log("apiResponsePremiumData",apiResponsePremiumData);
    
    return (
      <>
        {apiResponsePremiumData.map((e, index) => (
          e.PlanDetails.length>0?(
          <div className="health-card-main-div">
            <div className="health-card-row1">
              <div className="health-card-row1-col1">
                <img
                  src={e.CompanyLogo}
                  alt="Company Logo"
                  style={{ width: "140px", heigth: "20px" }}
                />
              </div>
              <div className="health-card-row1-col2">
                <span className="health-card-title">Sum Assured</span>
                <br />
                {e.MinSumAssured === e.MaxSumAssured
                  ? e.MinSumAssured
                  : `${e.MinSumAssured} - ${e.MaxSumAssured}`}
              </div>
              <div className="health-card-row1-col3">
                <span className="health-card-title"> Network Hospitals</span>
                <br />
                45
              </div>
              <div className="health-card-row1-col4">
                <span className="health-card-title"> Premium</span>
                <br />
                {e.MinNetPremium==e.MaxNetPremium?(e.MinNetPremium):(`₹ ${e.MinNetPremium} - ₹ ${e.MaxNetPremium}`)
}</div>
              <div className="health-card-row1-col5"></div>
            </div>
            <div className="health-card-row2">
              <div className="health-card-row2-col1"></div>
              <div className="health-card-row2-col2"></div>
            </div>
            <div className="health-card-row3">
              <div className="health-card-row3-col1">
                <span onClick={() => handleClick(index)}>
                  <div className="health-card-row3-col1">
                    {e.PlanDetails.length} Plans
                  </div>
                </span>
              </div>
              <div className="health-card-row3-col2">2</div>
              <div className="health-card-row3-col3">3</div>
              <div className="health-card-row3-col4">4</div>
            </div>
    
            {selectedPlanIndex === index &&
              e.PlanDetails.map((selectedPlan) => (
                <div className="health-card-main-div">
                  <div className="health-card-row1">
                    <div className="health-card-row1-col1">
                      <img
                        src={selectedPlan.CompanyLogo}
                        style={{ width: "140px", heigth: "20px" }}
                      />
                    </div>
                    <div className="health-card-row1-col2">
                     
                        <span className="health-card-title">Sum Assured</span>
                                    <br/>
                       
                        <span style={{fontWeight:"bolder"}}>{selectedPlan.SumAssured}</span>
                      
                    </div>
                    <div className="health-card-row1-col3">
                      <span className="health-card-title"> Tenure</span>
                      <br />
                      {selectedPlan.Tenure}
                    </div>
                    <div className="health-card-row1-col5">
                      <button className="buy-btn"  onClick={() => handleBuyNowClick(selectedPlan)}>₹ {selectedPlan.NetPremium}<br/><span className="buy-txt">Buy Now</span></button>
                    </div>
                  </div>
                  <div className="health-card-row2">
                    <div className="health-card-row2-col1">
                    <span style={{fontWeight:"bolder"}}>{selectedPlan.PlanName}</span>
                    </div>
                    <div className="health-card-row2-col2">
                      <button
                        className="planDetails-btn"
                        style={{ fontSize: "12px" }}
                      >
                        Plan Details &nbsp;
                        <img src="https://www.coverfox.com/static/health_v3/js/dist/img/ic_arrow_forward.11c12c53.svg" />
                      </button>
                    </div>
                  </div>
                  <div className="health-card-row3">
                    {
                    Object.values(selectedPlan.PolicyFeatures).map((value)=>(
              <div className="health-card-row3-col">
              <li key={index}>{ `${value}`}</li>
              </div>
               )   
)}
                  </div>
                </div>
              ))}
          </div>
        ):""
        )
        )}
      </>
    );
              }

  export default HealthPremium21;
