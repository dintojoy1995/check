import React, { useEffect, useState, useRef } from "react";
import Localbase from 'localbase';
import "../css/Health_Card.css"
import { useLocation, useNavigate } from "react-router";
import { Card, Form } from "react-bootstrap";
import { useRecoilValue } from "recoil"; //Fetch data from Recoil Atom
import { useSetRecoilState } from "recoil"; //update data within Recoil Atom
import { apiResponseHealthPremiumAtom } from "./recoilAtom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HealthProposalTopBar() {

const [data,setData]=useState({});
const [input_data,setInput_data]=useState([])
const [relationItems,setRelationItems]=React.useState([]);
const [relationText,setRelationText]=React.useState([])
// const navigate = useNavigate()
  // const location = useLocation();
//  const data=location.state.data.selectedPlan;
 
  useEffect(() => {
    const db = new Localbase('p4usStorage');
    fetchData(db);
    const input_data=JSON.parse(localStorage.getItem("input_data"));
    setInput_data(input_data)


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

  }, []);

  const fetchData = async (db) => {
    const data = await db.collection('localStorage').doc('premiumJson').get();
    setData(data.value)

  };


 return (
    <React.Fragment>
    <br/><br/><br/>
    <Container>
   <Row style={{ backgroundColor: "#ECEFF1",MaxHeight:"100px"}}>
        <Col>
        <br/>Back to All Plans</Col>
        <Col>
            <br/>
          <img src={data.CompanyLogo}  style={{ width: "140px", heigth: "70px" }} alt="Provider Logo"/>
            </Col>
        <Col xs={5}>
        <br/>
        <Row>{data.PlanName}</Row>
        <Row>{input_data.length} Members- {relationItems}</Row>
        <Row>{data.SumAssured}</Row>
        </Col>
        <Col>
        <br/>
        <Row>
            <Col>Premium </Col> <Col>{parseFloat(data.NetPremium)}</Col> </Row>
        <Row>
            <Col>+GST</Col><Col>{parseFloat(data.TotalPremiumTax)}</Col></Row>
        <Row>----------------------------------</Row>
        <Row>
            <Col>Total</Col><Col>{parseFloat(data.FinalPremium)}</Col></Row>
        </Col>
      </Row>
  </Container>
  <br/>
  </React.Fragment>
  )
}

export default HealthProposalTopBar