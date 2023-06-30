import { useState, useContext, useEffect } from "react";
import { FormContext } from "./FormContext";
import { Link,useNavigate } from "react-router-dom";
import '../css/Pincode.css'
const Pincode = () => {
  const navigate = useNavigate()
  const {formData,setFormData,contactForm,setContactForm} = useContext(FormContext);
  const {father,
    mother,
    yourName,
    mobileNumber,
    fatherPincode,
    pincode,
    samePincode,
    setSamePincode,
    youAge,
    gender,
    proposerAge}=formData

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
  setFormData((prevData) => ({
    ...prevData,
    proposerAge: youAge
  }));
}
},[youAge,setFormData])


  const handleFatherPincodeChange = (e) => {
    if (!samePincode) {
      setFormData((prevData) => ({
        ...prevData,
        fatherPincode: e.target.value
      }));
    }
  };
  const handleSamePincodeChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      pincode: e.target.value
    }));
    if (e.target.checked) {
      setFormData((prevData) => ({
        ...prevData,
        fatherPincode: pincode
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        fatherPincode: ''
      }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setContactForm({fullName:yourName,age:proposerAge,gender,mobileNumber,pincode,fatherPincode})
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
           setFormData((prevData) => ({
            ...prevData,
            yourName:e.target.value
          }));
         }}
      />
      <label>Enter your mobile number</label>
      <input
        type="text"
        value={mobileNumber}
        onChange={(e) => {
          setFormData((prevData) => ({
            ...prevData,
            mobileNumber:e.target.value
          }));
          }
        } />
      <label>Where do you live?</label>
      <input
        type="text"
        value={pincode}
        onChange={(e) => {
          setFormData((prevData) => ({
            ...prevData,
            pincode:e.target.value
          }));
        }
        }
      />
      {!youAge&&(  
        <>
        <label>Enter proposer age</label>
        <select value={proposerAge} 
        onChange={(e) =>  setFormData((prevData) => ({
          ...prevData,
          proposerAge: e.target.value
        }))}>
          {/* {proposerAge&& */}
          <option value="">Select age</option>
          {/* } */}
          {renderAge()}
        </select>
        </>

      )}
      {((father || mother) && youAge) && (
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
