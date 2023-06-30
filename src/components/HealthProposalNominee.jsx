import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HealthProposalTopBar from './HealthProposalTopBar';
import { useState } from 'react';

function HealthProposalNominee() {

    const [nomineeData, setNomineeData] = useState({
        firstName: '',
        lastName: '',
        dob: '',
        relationship: ''
      });

      const nomineeInputChange = (e) => {
       

      };  

 return (
    <>
<div className='mainDiv'>
<br/><br/>
<div className='proposer-details-div'>
<div className='proposer-details-div-title' style={{ backgroundColor: "#ECEFF1"}}>
<span style={{marginLeft:"20px"}}>Nominee Details</span>
</div>
<div className="proposer-details-div-content">
<Container>
      <br />
      <Row style={{ width: '90%', margin: 'auto' }}>
        <Col>
             <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={nomineeData.firstName}
            onChange={nomineeInputChange}
          />&nbsp;&nbsp;
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={nomineeData.lastName}
            onChange={nomineeInputChange}
          />
        </Col>
        <Col>
          <span>DOB</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="date"
            name="dob"
            value={nomineeData.dob}
            onChange={nomineeInputChange}
          />
        </Col>
        </Row>
        <br/>
        <Row>
            <Col></Col>
        <Col>
           <span>Relationship</span>&nbsp;&nbsp;&nbsp;&nbsp;
          <select
            name="relationship"
            onChange={nomineeInputChange}
          >
            <option value="">Select an option</option>
            <option value="Father">Father</option>
            <option value="Mother">Mother</option>
            <option value="Spouse">Spouse</option>
            <option value="Sister">Sister</option>
            <option value="Brother">Brother</option>
            <option value="Husband">Husband</option>
            <option value="Daughter">Daughter</option>
            <option value="Son">Son</option>
          </select>
        </Col>
      </Row>
      <br />
    </Container>
</div>
</div>
</div>
<br/>
<div style={{display:"flex","flexDirection":"column"}}>
<button className="buy-btn" style={{width:"180px"}} onClick={()=>localStorage.setItem("proposalStep",1)}>Back to Basic Details</button> 
<br/> 
<button className="buy-btn" onClick={()=>localStorage.setItem("proposalStep",3)} >Next</button> 
</div>
</>
)
}

export default HealthProposalNominee