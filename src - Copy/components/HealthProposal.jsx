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
import HealthProposalUserDetailsForm from "./HealthProposalUserDetailsForm";


function HealthProposal() {

const [data,setData]=useState({});

  // const navigate = useNavigate()
  // const location = useLocation();
//  const data=location.state.data.selectedPlan;
 
  useEffect(() => {
    const db = new Localbase('p4usStorage');
    fetchData(db);
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
        <Row>2 Members- Self, Spouse</Row>
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
  <HealthProposalUserDetailsForm/>
  </React.Fragment>
  )
}

export default HealthProposal