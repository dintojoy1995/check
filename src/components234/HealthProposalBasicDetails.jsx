import React from 'react'
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';
import { useEffect,useState } from 'react';
import "../css/HealthProposalUserDetailsForm.css"
import HealthProposalTopBar from './HealthProposalTopBar';

function HealthProposalBasicDetails() 
   {

    const navigate = useNavigate();
    const [selectedOccupation, setSelectedOccupation] = useState('');
    const [data,setData]=useState([])
    const [showCheckboxes,setShowCheckboxes]=useState(true)
    const [formData, setFormData] = useState([]);
      const [proposerData, setProposerData] = useState({
        firstName: '',
        lastName: '',
        maritalStatus: '',
        dob: '',
        occupation: ''
      });

      useEffect(() => {  
        const data = JSON.parse(localStorage.getItem("selectedMembers"));
        setData(data)
      }, [])
      
    // const handleOccupationBlur = (event) => {
    //   setSelectedOccupation(event.target.value);
    // };
    const proposerInputChange = (e) => {

      const { name, value } = e.target;
      setProposerData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    };  


  const handleInputChange = (event) => {

    const { id, value } = event.target;
    const [relation, field] = id.split('-');

    // Find the index of the object in the formData array with the matching relation
    const index = formData.findIndex((item) => item.relation === relation);
  
    if (index !== -1) {
      // If the object with the relation already exists in formData, update its value
      const updatedFormData = [...formData];
      updatedFormData[index][field] = value;
      setFormData(updatedFormData);
    } else {
      // If the object with the relation doesn't exist in formData, create a new object and add it
      const newFormData = [...formData, { relation, [field]: value }];
      setFormData(newFormData);
    }
  };
  
    const formSubmit=(e)=>{
    
  // onSubmit({formData,proposerData})
      console.log("proposer",proposerData);
      console.log("formdata",formData);
      // localStorage.setItem("proposalStep",2)
    }

  return (
    <>
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
            onChange={proposerInputChange}
          />&nbsp;&nbsp;
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={proposerData.lastName}
            onChange={proposerInputChange}
          />
        </Col>
        <Col>
          <span>Marital Status</span>&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="radio"
            name="maritalStatus"
            value="married"
            checked={proposerData.maritalStatus === 'married'}
            onChange={proposerInputChange}
          />
          &nbsp;Married&nbsp;&nbsp;
          <input
            type="radio"
            name="maritalStatus"
            value="single"
            checked={proposerData.maritalStatus === 'single'}
            onChange={proposerInputChange}
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
            onChange={proposerInputChange}
          />
        </Col>
        <Col>
          <span>Occupation</span>&nbsp;&nbsp;&nbsp;&nbsp;
          <select
            name="occupation"
            onChange={proposerInputChange}
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
      {data.map((item, index) =>{
    return(
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
                    name={`${item.relation}-occupation`}
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
              <br></br>
              <Row style={{ width: "90%", margin: "auto" }}>
                <Col>
                  <span>Annual Income</span>&nbsp;&nbsp;&nbsp;&nbsp;
                  <select
                    id={`${item.relation}-annualIncome`}
                    onBlur={handleInputChange}
                    name={`${item.relation}-annualIncome`}
                  >
                    <option value="">Select an option</option>
                    <option value="100000">0 - 100000</option>
                    <option value="200000">100001 - 200000</option>
                    <option value="300000">200001 - 300000</option>
                    <option value="400000">300001 - 400000</option>
                    <option value="500000">400001 - 500000</option>
                    <option value="500001">Above 500000</option>
                  </select>&nbsp;&nbsp;
                </Col>
                <Col>
                  <span>Health Issue</span>&nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    type='radio'
                    id={`${item.relation}-healthIssue`}
                    name={`${item.relation}-healthIssue`}
                    value='yes'
                    onBlur={handleInputChange}
                  />&nbsp;Yes&nbsp;&nbsp;
                  <input
                    type='radio'
                    id={`${item.relation}-healthIssue`}
                    name={`${item.relation}-healthIssue`}
                    value='no'
                    onBlur={handleInputChange}
                  />&nbsp;No&nbsp;&nbsp;
                </Col>
              </Row>
              <div>
            <input type="checkbox"  id="dinto"/>      
              </div>
              </Container> 
          </div>
          <br /><br />
        </React.Fragment>
        
      )})}    
</div>
<br/>
<button className="buy-btn" onClick={formSubmit}>Submit</button>
<br/><br/>
</div>
</>
  )
}

export default HealthProposalBasicDetails