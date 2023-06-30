import React, { useEffect, useState, useRef } from "react";
import "../css/Health_Card.css"
import { Card, Form } from "react-bootstrap";
import { useRecoilValue } from "recoil"; //Fetch data from Recoil Atom
import { useSetRecoilState } from "recoil"; //update data within Recoil Atom
import { apiResponseHealthPremiumAtom } from "./recoilAtom";

function HealthPremium21() {
  const apiResponsePremiumData = useRecoilValue(apiResponseHealthPremiumAtom);
  const [modalShow, setModalShow] = useState(false);
  const [selectedModal, setSelectedModal] = useState(null);
  const [policyType, setPolicyType] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState([]);//newww
  

  const handleShowPlanDetails = (e) => {
    setSelectedModal(e);
    setModalShow(true);
  };
  // ----G----
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (selectedPlan) => {
      if (isOpen && selectedPlan === selectedPlan) {
        setIsOpen(false);
      } else {
        setSelectedPlan(selectedPlan);
        setIsOpen(true);
      }
    };


  return (  
   <>
    {
    apiResponsePremiumData.map((e)=>{    
   return((e.PlanDetails).length>1?
<div className="health-card-main-div">
        <div className="health-card-row1">
        <div className="health-card-row1-col1">
        <img src={e.CompanyLogo} alt="Company Logo" style={{ width: "140px", heigth: "20px" }}/>
        </div>
          <div className="health-card-row1-col2">
            <span className="health-card-title">Sum Assured</span><br/>{e.MinSumAssured===e.MaxSumAssured?
            e.MinSumAssured:`${e.MinSumAssured} - ${e.MaxSumAssured}`}
          </div>
          <div className="health-card-row1-col3">
          <span className="health-card-title">  Network Hospitals</span><br/>45
          </div>
          <div className="health-card-row1-col4">
          <span className="health-card-title"> Premium</span><br/>₹ {e.MinNetPremium} - ₹ {e.MaxNetPremium}
          </div>
          <div className="health-card-row1-col5">   
          </div>
        </div>
        <div className="health-card-row2">
          <div className="health-card-row2-col1"></div>
          <div className="health-card-row2-col2">
          </div>
          </div>
          <div className="health-card-row3">
          <div className="health-card-row3-col1">
          {/* <span onClick={isOpen ? handleClose : handleOpen(e.PlanDetails)}> */}
          <span onClick={()=>handleClick(e.PlanDetails)}>
    <div className="health-card-row3-col1">{e.PlanDetails.length} Plans</div>
    </span>
          </div>
          <div className="health-card-row3-col2">2</div>
          <div className="health-card-row3-col3">3</div>
          <div className="health-card-row3-col4">4</div>
          </div>
      </div>:"")}
          )}
        
        {isOpen && selectedPlan.length>0 &&(
          <>
          {selectedPlan.map((selectedPlan)=>(
            <div className="health-card-main-div">
            <div className="health-card-row1">
            <div className="health-card-row1-col1">
            <img src={selectedPlan.CompanyLogo} style={{ width: "140px", heigth: "20px" }}/>
            </div>
              <div className="health-card-row1-col2">
                <span className="health-card-title">Sum Assured</span><br/>{selectedPlan.SumAssured}
              </div>
              <div className="health-card-row1-col3">
              <span className="health-card-title">  Network Hospitals</span><br/>45
              </div>
              <div className="health-card-row1-col4">
              <span className="health-card-title"> Premium</span><br/>₹ {selectedPlan.NetPremium}
              </div>
              <div className="health-card-row1-col5">
                <button>Buy Now</button>
              </div>
            </div>
            <div className="health-card-row2">
              <div className="health-card-row2-col1">{selectedPlan.PlanName}</div>
              <div className="health-card-row2-col2">
                <button className="planDetails-btn" style={{fontSize:"12px"}}>Plan Details &nbsp;<img src="https://www.coverfox.com/static/health_v3/js/dist/img/ic_arrow_forward.11c12c53.svg"/></button>
              </div>
              </div>
              <div className="health-card-row3">
              <div className="health-card-row3-col1">1</div>
              <div className="health-card-row3-col2">2</div>
              <div className="health-card-row3-col3">3</div>
              <div className="health-card-row3-col4">4</div>
              </div>
          </div>        
       
        ))}
</>      
         )}


   
         </>
         )}







{/* 
{isOpen && (
  <>
      {apiResponsePremiumData.PlanDetails.map((event) => (
        <div className="health-card-main-div">
        <div className="health-card-row1">
        <div className="health-card-row1-col1">
        <img src={event.CompanyLogo} style={{ width: "140px", heigth: "20px" }}/>
        </div>
          <div className="health-card-row1-col2">
            <span className="health-card-title">Sum Assured</span><br/>{event.SumAssured}
          </div>
          <div className="health-card-row1-col3">
          <span className="health-card-title">  Network Hospitals</span><br/>45
          </div>
          <div className="health-card-row1-col4">
          <span className="health-card-title"> Premium</span><br/>₹ {event.NetPremium}
          </div>
          <div className="health-card-row1-col5">
            <button>Buy Now</button>
          </div>
        </div>
        <div className="health-card-row2">
          <div className="health-card-row2-col1">{event.PlanName}</div>
          <div className="health-card-row2-col2">
            <button className="planDetails-btn" style={{fontSize:"12px"}}>Plan Details &nbsp;<img src="https://www.coverfox.com/static/health_v3/js/dist/img/ic_arrow_forward.11c12c53.svg"/></button>
          </div>
          </div>
          <div className="health-card-row3">
          <div className="health-card-row3-col1">1</div>
          <div className="health-card-row3-col2">2</div>
          <div className="health-card-row3-col3">3</div>
          <div className="health-card-row3-col4">4</div>
          </div>
      </div>        
      ))}
   </>
          )}
 */}


      {/* {apiResponsePremiumData.PlanDetails && apiResponsePremiumData.PlanDetails.length==1?
      (apiResponsePremiumData.PlanDetails.map((e, index) => {
        if (index === 0) {
        return (
<div className="health-card-main-div"  key={index}>
  <div className="health-card-row1">
  <div className="health-card-row1-col1">
  <img src={e.CompanyLogo} style={{ width: "140px", heigth: "20px" }}/>
  </div>
    <div className="health-card-row1-col2">
      <span className="health-card-title">Sum Assured</span><br/>{e.SumAssured}
    </div>
    <div className="health-card-row1-col3">
    <span className="health-card-title">  Network Hospitals</span><br/>45
    </div>
    <div className="health-card-row1-col4">
    <span className="health-card-title"> Premium</span><br/>₹ {e.NetPremium}
    </div>
    <div className="health-card-row1-col5">
      <button>Buy Now</button>
    </div>
  </div>
  <div className="health-card-row2">
    <div className="health-card-row2-col1">{e.PlanName}</div>
    <div className="health-card-row2-col2">
      <button className="planDetails-btn" style={{fontSize:"12px"}}>Plan Details &nbsp;<img src="https://www.coverfox.com/static/health_v3/js/dist/img/ic_arrow_forward.11c12c53.svg"/></button>
    </div>
    </div>
    <div className="health-card-row3">
    <div className="health-card-row3-col2">2</div>
    <div className="health-card-row3-col3">3</div>
    <div className="health-card-row3-col4">4</div>
    </div>
</div>        
        );
      }
      return null;
      })):""} */}     
   



  export default HealthPremium21;
