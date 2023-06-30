import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';
import { useEffect,useState } from 'react';
import "../css/HealthProposalUserDetailsForm.css"
function HealthProposalUserDetailsForm() {

    const [selectedOccupation, setSelectedOccupation] = useState('');
    const data = [
        {"relation": "Self", "Age": 43, "Gender": "Male"},
        {"relation": "Spouse", "Age": 43, "Gender": "Female"},
        {"relation": "Son", "Age": 21, "Gender": "Male"},
        {"relation": "Son1", "Age": 21, "Gender": "Male"},
        {"relation": "Son2", "Age": 21, "Gender": "Male"}
      ];   

      const [proposerData, setProposerData] = useState({
        firstName: '',
        lastName: '',
        maritalStatus: '',
        dob: '',
        occupation: ''
      });

    const handleOccupationBlur = (event) => {
      setSelectedOccupation(event.target.value);
    };
    const proposerInputChange = (e) => {
      const { name, value } = e.target;
      setProposerData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    };  

    const [formData, setFormData] = useState({});

    const handleInputChange = (e) => {
      const { id, value } = e.target;
      const [relation, field] = id.split('-');
  
      setFormData((prevData) => ({
        ...prevData,
        [relation]: {
          ...prevData[relation],
          [field]: value
        }
      }));
      console.log("SDdfsdf",formData);
    };

    const formSubmit=()=>{
      console.log("proposer",proposerData);
      console.log("formdata",formData);
    }

  return (
<div className='mainDiv'>
<br/><br/>
<div className='proposer-details-div'>
<div className='proposer-details-div-title' style={{ backgroundColor: "#ECEFF1"}}>
<span style={{marginLeft:"20px"}}>Proposer</span>
</div>
<div className="proposer-details-div-content">
<Container>
      <br />
      <Row style={{ width: '90%', margin: 'auto' }}>
        <Col>
          <span>Name</span>&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={proposerData.firstName}
            onBlur={proposerInputChange}
          />&nbsp;&nbsp;
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={proposerData.lastName}
            onBlur={proposerInputChange}
          />
        </Col>
        <Col>
          <span>Marital Status</span>&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="radio"
            name="maritalStatus"
            value="married"
            checked={proposerData.maritalStatus === 'married'}
            onBlur={proposerInputChange}
          />
          &nbsp;Married&nbsp;&nbsp;
          <input
            type="radio"
            name="maritalStatus"
            value="single"
            checked={proposerData.maritalStatus === 'single'}
            onBlur={proposerInputChange}
          />
          &nbsp;Single&nbsp;&nbsp;
        </Col>
      </Row>
      <br /><br />
      <Row style={{ width: '90%', margin: 'auto' }}>
        <Col>
          <span>DOB</span>&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="date"
            name="dob"
            value={proposerData.dob}
            onBlur={proposerInputChange}
          />
        </Col>
        <Col>
          <span>Occupation</span>&nbsp;&nbsp;&nbsp;&nbsp;
          <select
            name="occupation"
            value={proposerData.occupation}
            onBlur={handleInputChange}
          >
            <option value="">Select an option</option>
            <option value="salaried">Salaried</option>
            <option value="selfEmployed">Self Employed</option>
            <option value="student">Student</option>
            <option value="houseWife">House Wife</option>
            <option value="others">Others</option>
          </select>
        </Col>
      </Row>
      <br />
    </Container>
</div>
</div>
<br/><br/>
<div className='proposer-details-div'>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <div className='proposer-details-div-title' style={{ backgroundColor: "#ECEFF1" }}>
            <span style={{ marginLeft: "20px" }}>{item.relation} Details</span>
          </div>
          <div className="proposer-details-div-content">
            <Container>
              <br />
              <Row style={{ width: "90%", margin: "auto" }}>
                <Col>
                  <span>Name</span>&nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    type='text'
                    id={`${item.relation}-firstname`}
                    placeholder='First Name'
                    onBlur={handleInputChange}
                  />&nbsp;&nbsp;
                  <input
                    type='text'
                    id={`${item.relation}-lastname`}
                    placeholder='Last Name'
                    onBlur={handleInputChange}
                  />
                </Col>
                <Col>
                  <span>Marital Status</span>&nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    type='radio'
                    id={`${item.relation}-maritalStatus`}
                    name={`${item.relation}-maritalStatus`}
                    value='married'
                    onBlur={handleInputChange}
                  />&nbsp;Married&nbsp;&nbsp;
                  <input
                    type='radio'
                    id={`${item.relation}-maritalStatus`}
                    name={`${item.relation}-maritalStatus`}
                    value='single'
                    onBlur={handleInputChange}
                  />&nbsp;Single&nbsp;&nbsp;
                </Col>
              </Row>
              <br /><br />
              <Row style={{ width: "90%", margin: "auto" }}>
                <Col>
                  <span>DOB</span>&nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    type="date"
                    id={`${item.relation}-dob`}
                    name={`${item.relation}-dob`}
                    onBlur={handleInputChange}
                  />
                </Col>
                <Col>
                  <span>Occupation</span>&nbsp;&nbsp;&nbsp;&nbsp;
                  <select
                    id={`${item.relation}-occupation`}
                    onBlur={handleInputChange}
                  >
                    <option value="">Select an option</option>
                    <option value="salaried">Salaried</option>
                    <option value="selfEmployed">Self Employed</option>
                    <option value="student">Student</option>
                    <option value="houseWife">House Wife</option>
                    <option value="others">Others</option>
                  </select>
                </Col>
              </Row>
              <br />
              <br />
              <Row style={{ width: "90%", margin: "auto" }}>
                <Col>
                  <span>Height</span>&nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    type='text'
                    id={`${item.relation}-heightFeet`}
                    placeholder='Feet'
                    onBlur={handleInputChange}
                  />&nbsp;&nbsp;
                  <input
                    type='text'
                    id={`${item.relation}-heightInch`}
                    placeholder='Inch'
                    onBlur={handleInputChange}
                  />
                </Col>
                <Col>
                  <span>Weight</span>&nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    type='number'
                    id={`${item.relation}-weight`}
                    placeholder='Kg'
                    onBlur={handleInputChange}
                  />
                </Col>
              </Row>
            </Container>
          </div>
          <br /><br />
        </React.Fragment>
        
      ))}    
</div>

<br/>
<button className="buy-btn" onClick={formSubmit}>Submit</button>
<br/><br/>
</div>
  )
}

export default HealthProposalUserDetailsForm