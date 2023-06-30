import { useState, useContext, useEffect } from "react";
import { FormContext } from "./FormContext";
import { Link,useNavigate } from "react-router-dom";
import '../css/Pincode.css'
import health_premium from './HealthPremium'
const Pincode = () => {
  
  const navigate = useNavigate()
  const {
    Father,
    Mother,
    yourName,
    mobileNumber,
    contactForm,
    fatherPincode,
    setFatherPincode,
    setYourName,
    setMobileNumber,
    pincode,
    setPincode,
    samePincode,
    setSamePincode,
    setContactForm,
    youAge,
    Gender,
    You,
    proposerAge,
    setProposerAge
  } = useContext(FormContext);

const renderAge =()=>
{
  const options = [];
  for(let i = 18; i <=100;i++){
    options.push(
    <option value={i}>{i}years</option>)
  }
  return options
}

useEffect(() =>{
if(youAge){
  setProposerAge(youAge)
}
},[youAge,setProposerAge])


  const handleFatherPincodeChange = (e) => {
    if (!samePincode) {
      setFatherPincode(e.target.value);
    }
  };
  const handleSamePincodeChange = (e) => {
    setSamePincode(e.target.checked);
    if (e.target.checked) {
      setFatherPincode(pincode);
    } else {
      setFatherPincode("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setContactForm([{fullName:yourName,Age:proposerAge,Gender,mobileNumber,pincode,fatherPincode}])
    console.log(contactForm)
    navigate('/health_premium')
  }

  return (
    <div className="container wrap-pin d-flex flex-column justify-content-center">
      <form onSubmit={handleSubmit}>
      <h2 className="text-center mb-5 mt-3">Where do you live</h2>
     <div className="maindiv">
      <label>Enter your full name</label>
      <input
        type="text"
        value={yourName}
        onChange={(e) =>{
           setYourName(e.target.value)
         }}
      />
      <br/>
      <label>Where can we reach you?</label>
      <input
        type="text"
        value={mobileNumber}
        onChange={(e) => {
          setMobileNumber(e.target.value)
          }
        } />
        <br/>
      <label>Where do you live?</label>
      <input
        type="text"
        value={pincode}
        onChange={(e) => {
          setPincode(e.target.value)
        }
        }
      /><br/>
      {!youAge&&(
        <>
        <label>Enter proposer age</label>
        <select value={proposerAge} onChange={(e) => setProposerAge(e.target.value)}>
          {proposerAge&&<option value="">Select age</option>}
          {renderAge()}
        </select>
        </>

      )}
      {((Father || Mother) && youAge) && (
        <>
          <label>Where your parents live</label>
          <input
            type="text"
            value={fatherPincode}
            onChange={handleFatherPincodeChange}
          />
          <label>
            <input
              type="checkbox"
              checked={samePincode}
              onChange={handleSamePincodeChange}
            />{" "}
            Same as mine
          </label>
        </>
      )}
      <div className="bottom-btn">
        <div>
        <Link to="/age">
          <button className="btn btn-danger mt-5 mb-3">Previous</button>
        </Link></div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div><button className="btn btn-danger mt-5 mb-3" type="submit">Continue</button>
          </div>
      </div></div>
      </form>
    </div>
  );
};

export default Pincode;
