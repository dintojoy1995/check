import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HealthProposalTopBar from './HealthProposalTopBar';
import { useState } from 'react';

function HealthProposalContactDetails() {

    const [contactDetailsData, setContactDetailsData] = useState({
        pincode: '',
        mobileNumber: '',
        email: '',
        panCard: '',
        address:"",
        state:"",
        city:""
      });

      const contactDetailsInputChange = (e) => {
       

      };  

 return (
    <>
<div className='mainDiv'>
<br/><br/>
<div className='proposer-details-div'>
<div className='proposer-details-div-title' style={{ backgroundColor: "#ECEFF1"}}>
<span style={{marginLeft:"20px"}}>Contact Details</span>
</div>
<div className="proposer-details-div-content">
<Container>
      <br />
      <Row style={{ width: '90%', margin: 'auto' }}>
        <Col>
             <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={contactDetailsData.pincode}
            onChange={contactDetailsInputChange}
          />
        </Col>
        <Col>
          <input
            type="tel"
            placeholder='Mobile no.'
            name="mobileNumber"
            value={contactDetailsData.mobileNumber}
            onChange={contactDetailsInputChange}
          />
        </Col>
        </Row>
        <br/>
        <Row style={{ width: '90%', margin: 'auto' }}>
            <Col>
            <input
            type="email"
            placeholder='Email'
            name="email"
            value={contactDetailsData.email}
            onChange={contactDetailsInputChange}
          />
            </Col>
        <Col>
           <input
            type="text"
            placeholder='Address'
            name="address"
            value={contactDetailsData.address}
            onChange={contactDetailsInputChange}
          />
        </Col>
      </Row>
      <br />
      <Row style={{ width: '90%', margin: 'auto' }}>
            <Col>
            <input
            type="text"
            placeholder='State'
            name="state"
            value={contactDetailsData.state}
            onChange={contactDetailsInputChange}
          />
            </Col>
        <Col>
           <input
            type="text"
            placeholder='City'
            name="city"
            value={contactDetailsData.city}
            onChange={contactDetailsInputChange}
          />
        </Col>
      </Row>
      <br/>
      <Row style={{ width: '90%', margin: 'auto' }}>
        <Col>
        <input
            type="text"
            placeholder='Pan Card'
            name="panCard"
            value={contactDetailsData.panCard}
            onChange={contactDetailsInputChange}
          />
        </Col>
      </Row>
      <br/>
    </Container>
</div>
</div>
</div>
<br/>
<div style={{display:"flex","flexDirection":"column"}}>
<button className="buy-btn" style={{width:"180px"}} onClick={()=>localStorage.setItem("proposalStep",2)} >Back to Nominee Details</button> 
<br/> 
<button className="buy-btn" onClick={()=>localStorage.setItem("proposalStep",3)}>Next</button> 
</div>
</>
)
}

export default HealthProposalContactDetails