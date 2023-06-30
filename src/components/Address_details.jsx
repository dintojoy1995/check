import React, { useState,useEffect } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Stepp from './Stepp';
import HealthPremium from './HealthPremium';

function Address_details(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const data = location.state.data.age; 
    const [isChecked, setIsChecked] = useState(false);
    const [self_pin,setSelf_pin]=useState()
    const [parent_pin,setParent_pin]=useState()
    const [mobile_number,setMobile_number]=useState()
    
    const checkparents =("father" in data || "mother" in data)
    const checkself =("self" in data || "spouse" in data)



    useEffect(() => {
      localStorage.setItem('health_stepper',2)
      const data = localStorage.getItem('health_address_details');
      if (data) {

        setMobile_number(JSON.parse(data).mobile_number);
        setSelf_pin(JSON.parse(data).self_pin);
        // setIsChecked(JSON.parse(data).ischecked)
        setParent_pin(JSON.parse(data).parent_pin)
       
      }
    }, []);



  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    if (event.target.checked) {
      setParent_pin(self_pin);
    } else {
      setParent_pin("");
    }
  };


const handleLocalStorageSubmit = (e) => {
  e.preventDefault()
  const formData = {
    "self_pin":self_pin,
    "parent_pin":parent_pin,
    "mobile_number":mobile_number,
    "ischecked":isChecked
  };
  localStorage.setItem('health_address_details', JSON.stringify(formData));
  let stepper=parseInt(localStorage.getItem('health_stepper'));
  localStorage.setItem('health_stepper',4)
}

const formData = {
  "self_pin": self_pin,
  "parent_pin": parent_pin,
  "mobile_number": mobile_number,
  "ischecked": isChecked
};

const healthGender = localStorage.getItem("health_gender");
const healthDaughterCount = parseInt(localStorage.getItem("health_daughter_count"));
const healthSonCount = parseInt(localStorage.getItem("health_son_count"));
const healthAgeDetails = JSON.parse(localStorage.getItem("health_age_details"));
const healthAddressDetails = formData;

const postData = {
  health_gender: healthGender,
  health_daughter_count: healthDaughterCount,
  health_son_count: healthSonCount,
  health_age_details: healthAgeDetails,
  health_address_details: healthAddressDetails
};


const handleMongoSubmit = async () => {
  try{
    const response = await fetch("http://localhost:5000/health", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
    });

    const responseData = await response.json();
    console.log(responseData);
  } catch (err) {
    console.log(err);
  }
};


const handleSubmit = (e) => {
  // handleLocalStorageSubmit(e)

  navigate("/health_premium")

}

    return (
        <>
        <Stepp/>
            <div className='health-gender-bx'><br/><br/>
            <h5>Where do you live?</h5><br/>
            <form onSubmit={handleSubmit}>
            {
            checkself?(<div><h6>Where do you live?</h6><br/><input type="number" name="self_pin" onChange={(e)=>{setSelf_pin(e.target.value)}} value={self_pin}/><br/><br/></div>):""
            }
        {
            checkparents?(<div><h6>Where do your parents live?</h6><br/><input type="number" name="parent_pin" onChange={(e)=>{setParent_pin(e.target.value)}} value={parent_pin}/><br/><br/></div>):""
            }
    {
        checkself&&checkparents?(<div><br/><input type="checkbox" id="checkbtn" name="checkbtn" checked={isChecked} onChange={handleCheckboxChange} /><br/></div>):""
    }
            Where can we reach you?
            <br/>
            <input type="number" name='phone_number' onChange={(e)=>{setMobile_number(e.target.value)}} value={mobile_number} placeholder='your mobile number'/><br/><br/><br/>
            <Button type="submit" variant="primary" size='lg'style={{width:"200px"}}>Save</Button>
    </form>
          {/* <Button variant="primary" size='lg'style={{width:"200px", marginTop:"8px"}} onClick={handleMongoSubmit}>Continue</Button> */}
    </div>
        </>
    );
}

export default Address_details;