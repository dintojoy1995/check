import React, { useEffect, useRef, useState } from "react";
import "../css/Premium.css";
import { Card, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { Modal, DropdownButton, ButtonGroup, Dropdown } from "react-bootstrap";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import HealthPremium2 from "./HealthPremium2";
import HealthPremium21 from "./HealthPremium21";

import { useRecoilState } from "recoil"; /////////////////
import { apiResponseHealthPremiumAtom } from "./recoilAtom"; /////////////////

const HealthPremium = () => {
  const [sumAssured, setSumAssured] = useState(500000);
  const [showSumAssured, setShowSumAssured] = React.useState(false);
  const [tenure, setTenure] = useState(1);
  const [showTenure, setShowTenure] = React.useState(false);
  const [policyType, setPolicyType] = useState("individual");
  const [showPolicyType, setShowPolicyType] = React.useState(false);
  const [showCover, setShowCover] = React.useState(false);
  const [responseDataPremium, setResponseDataPremium] = React.useState([]);
  const [input_data,setInput_data]=React.useState([]);
  const [proposer_data,setProposer_data]=React.useState([]);
  const [relationItems,setRelationItems]=React.useState([]);
  const [relationText,setRelationText]=React.useState([])
  //recoil test
  const [apiResponseData, setApiResponseData] = useRecoilState(
    apiResponseHealthPremiumAtom
  );
  //recoil





  console.log(tenure,policyType,sumAssured);
  const apiUrls=[
     "http://localhost:5000/reliancehealth",
     "http://localhost:5000/godigithealth",
     "http://localhost:5000/bajajhealth",
     "http://localhost:5000/royalsundaramhealth",
     "http://localhost:5000/nationalinsurancehealth",
     "http://localhost:5000/iffcotokiohealth"
  ]


  useEffect(() => {


    const input_data = JSON.parse(localStorage.getItem("input_data"));
    setInput_data(input_data)

    const proposer_data = JSON.parse(localStorage.getItem("contactForm"));
    setProposer_data(proposer_data[0])

    const data = {
     input_data,
     proposer_data,
     policyType,
     room_limit:"all",
     sumAssured,
     tenure
   }

console.log(input_data);
   const filteredRelations = input_data.filter(relation => relation.relation !== "Son" && relation.relation !== "Daughter");
   const relationItems = filteredRelations.map(relation => relation.relation).join(", ");
 
   setRelationItems(relationItems);
  // Count the number of Sons and Daughters
  let sonCount = 0;
  let daughterCount = 0;
  input_data.forEach(relation => {
    if (relation.relation === "Son") {
      sonCount++;
    } else if (relation.relation === "Daughter") {
      daughterCount++;
    }
  });
 
  // Create a string with count and relation
  let relationText = "";
  if (sonCount > 0) {
    relationText += sonCount > 1 ? `${sonCount} Sons` : "1 Son";
  }
  if (daughterCount > 0) {
    relationText += (sonCount > 0 ? ", " : "") + (daughterCount > 1 ? `${daughterCount} Daughters` : "1 Daughter");
  }
 
setRelationText(relationText)


      const responses = [];

        axios.post("http://localhost:5000/nationalinsurancehealth", data).then((response) => {
        responses.push(response.data.data);
         setApiResponseData([...responses])        
        })
        axios.post("http://localhost:5000/bajajhealth", data).then((response) => {
        responses.push(response.data.data);
         setApiResponseData([...responses]);
        })
        axios.post("http://localhost:5000/iffcotokiohealth", data).then((response) => {
        responses.push(response.data.data);
         setApiResponseData([...responses]);
        })
        axios.post("http://localhost:5000/reliancehealth", data).then((response) => {
         responses.push(response.data.data);
          setApiResponseData([...responses])        
          })
          axios.post("http://localhost:5000/royalsundaramhealth", data).then((response) => {
          responses.push(response.data.data);
           setApiResponseData([...responses]);
          })
          axios.post("http://localhost:5000/godigithealth", data).then((response) => {
          responses.push(response.data.data);
           setApiResponseData([...responses]);
          })
         
    }, [tenure,policyType,sumAssured]);


  // useEffect(() => {
  // const authKey = localStorage.getItem('Auth-key');
  // const headers = {
  //   'Content-Type': 'application/json',
  //   'Authorization': authKey,
  // };
  //   const responses = [];
  //   const postRequests = apiUrls.map((endpoint) =>
  //     axios.post(endpoint, data,  { headers }).then((response) => {
  //       responses.push(response.data.data);
  //       console.log(responses);
  //        setApiResponseData([...responses]);

  //       // setApiResponseData((prevData) => [...prevData, ...responses]);
      
  //     })
  //   );

  //   Promise.all(postRequests)
  //     .then(() => {})
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, [tenure,policyType,sumAssured]);
  

  const popoverRef = useRef(null);


  const handleOptionChange = (event) => {
    const selectedValue = event.target.id;
    setSumAssured(selectedValue);

  };

  const handleOptionChangeTenure = (event) => {
    const selectedValue = event.target.value;
    setTenure(selectedValue);

  };

  const handleOptionChangePolicyType= (event) => {
    const selectedValue = event.target.value;
    setPolicyType(selectedValue);

  };

  const dropDownSumAssured = (
    <div>
      {showSumAssured && (
        <div>
          <Form.Check
            type="radio"
            name="Sum_Assured"
            id="300000"
            value="300000"
            label="3Lakhs"
            onChange={handleOptionChange}
          />
          <Form.Check
            type="radio"
            name="Sum_Assured"
            id="500000"
            value="500000"
            label="5Lakhs"
            onChange={handleOptionChange}
          />
          <Form.Check
            type="radio"
            name="Sum_Assured"
            id="1000000"
            value="1000000"
            label="10Lakhs"
            onChange={handleOptionChange}
          />
          <Form.Check
            type="radio"
            name="Sum_Assured"
            id="1500000"
            value="1500000"
            label="15Lakhs"
            onChange={handleOptionChange}
          />
          <Form.Check
            type="radio"
            name="Sum_Assured"
            id="2000000"
            value="2000000"
            label="20Lakhs"
            onChange={handleOptionChange}
          />
          <Form.Check
            type="radio"
            name="Sum_Assured"
            id="2500000"
            value="2500000"
            label="25Lakhs"
            onChange={handleOptionChange}
          />  <Form.Check
          type="radio"
          name="Sum_Assured"
          id="3000000"
          value="3000000"
          label="30Lakhs"
          onChange={handleOptionChange}
        />
          <Form.Check
            type="radio"
            name="Sum_Assured"
            id="5000000"
            value="5000000"
            label="50Lakhs"
            onChange={handleOptionChange}
          />
          <Form.Check
            type="radio"
            name="Sum_Assured"
            id="10000000" 
            value="10000000"
            label="1Cr"
            onChange={handleOptionChange}
          />
        </div>
      )}
    </div>
  );

  const dropDownTenure = (
    <div>
      {showTenure && (
        <div>
          <Form.Check
            type="radio"
            name="tenure"
            id="1"
            value="1"
            label="1 Year"
            onChange={handleOptionChangeTenure}
          />
          <Form.Check
            type="radio"
            name="tenure"
            id="2"
            value="2"
            label="2 Year"
            onChange={handleOptionChangeTenure}
          />
          <Form.Check
            type="radio"
            name="tenure"
            id="3"
            value="3"
            label="3 Year"
            onChange={handleOptionChangeTenure}
          />
          </div>
      )}</div>)


      const dropDownPolicyType = (
        <div>
          {showPolicyType && (
            <div>
              <Form.Check
                type="radio"
                name="policy_type"
                id="individual"
                value="individual"
                label="Multi-Individual"
                onChange={handleOptionChangePolicyType}
              />
              <Form.Check
                type="radio"
                name="policy_type"
                id="floater"
                value="floater"
                label="Family Floater"
                onChange={handleOptionChangePolicyType}
              />
              </div>
          )}</div>)


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5 mt-5">
          <span><h6>{input_data.length} Members</h6></span>
                    <span style={{color:"green",fontWeight:"100px"}}>({relationItems},{relationText})
                    </span>&nbsp;&nbsp;<a href="/display">Edit</a>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 mt-2">
          <Card
            className="w-100"
            style={{ backgroundColor: "#ECEFF1", height: "125px" }}
          >
            <Card.Body>
              <h6 style={{ paddingLeft: "15px" }}>
                <span style={{ marginLeft: "30px" }}>Sum Assured</span>
                <span
                  className="float-right"
                  style={{ marginLeft: "10px",paddingTop: "10px", paddingLeft: "0px" }}
                >
                  <DropdownButton
                    as={ButtonGroup}
                    drop="down"
                    className="car-premium-dropdownbtn"
                    onClick={() => setShowSumAssured(true)}
                  >
                    <Dropdown.Item>{dropDownSumAssured}</Dropdown.Item>
                  </DropdownButton>
                  
                </span>


                <span style={{ marginLeft: "80px" }}>Tenure</span>
                <span
                  className="float-right"
                  style={{marginLeft: "10px", paddingTop: "10px", paddingLeft: "0px" }}
                >
                  <DropdownButton
                    as={ButtonGroup}
                    drop="down"
                    className="car-premium-dropdownbtn"
                    onClick={() => setShowTenure(true)}
                  >
                    <Dropdown.Item>{dropDownTenure}</Dropdown.Item>
                  </DropdownButton>
                  
                </span>

                <span style={{ marginLeft: "80px" }}>Policy Type</span>
                <span
                  className="float-right"
                  style={{marginLeft: "10px", paddingTop: "10px", paddingLeft: "0px" }}
                >
                  <DropdownButton
                    as={ButtonGroup}
                    drop="down"
                    className="car-premium-dropdownbtn"
                    onClick={() => setShowPolicyType(true)}
                  >
                    <Dropdown.Item>{dropDownPolicyType}</Dropdown.Item>
                  </DropdownButton>
                  
                </span>
              </h6>
            </Card.Body>
          </Card>
        </div>
        <HealthPremium2 />
        </div>
    </div>
  );
};
export default HealthPremium;
