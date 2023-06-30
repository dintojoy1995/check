import { useContext } from "react";
import { FormContext } from "./FormContext";
import mothericon from './assets/mother-icon.png'
import fathericon from './assets/father-icon.png'
import maleicon from './assets/male-icon.png'
import femaleicon from './assets/female-icon.png'
import daughtericon from './assets/daughter-icon.png'
import sonicon from './assets/son-icon.png'
import {  Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import '../css/Display.css'

const Display = () => {
  const {formData,handleGenderChange,spouseCheckBoxChange,youCheckBoxChange,sonCheckBoxChange,daughterCheckBoxChange,fatherCheckBoxChange,motherCheckBoxChange,sonCountIncrease,daughterCountDecrease,sonCountDecrease,daughterCountIncrease,setSelectedMembers,selectedMembers}=useContext(FormContext);
  const{gender,sonCount,daughterCount,you,father,mother,son1,daughter1,spouse}=formData;
  const navigate=useNavigate()
  // const handlePrevious=()=>{
  //   navigate(-1)
  // }
  const [warning, setWarning] = useState(false)
  const handleFormSubmit=(e)=>{
    e.preventDefault()
    if(you || spouse || son1 || daughter1 || mother || father){
   navigate('/age')}
   else{
    setWarning(true)
   }
 }
   
  return (
    <div className='display-maindiv'>
      <form onSubmit={handleFormSubmit}>
        <div>
          <h3>Selected gender: {gender}</h3>
          <div className='second-gender'>
          <div>
                <label>
                  <input
                    type="radio"
                    name="genderChange"
                    value="Male"
                    checked={gender === 'Male'}
                    onChange={handleGenderChange}
                  />
                  Male
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="genderChange"
                    value="Female"
                    checked={gender === 'Female'}
                    onChange={handleGenderChange}
                  />
                  Female
                </label>
              </div>
          </div>
        </div>
       
 <div className='subdiv'>
     <div className='subdiv-row1'>
          <div className="checkbox">
            <input
              type="checkbox"
              id="youCheckbox"
              value="You"
              checked={you==='You'}
              onChange={youCheckBoxChange}
              className="checkbox-input"
            />
            <label htmlFor="youCheckbox" className="checkbox-label d-flex flex-column justify-content-center align-items-center">
              <img src={gender==='Male'?maleicon:femaleicon} alt="You" className="checkbox-image" />
              You
            </label>
          </div>
          
          {gender==='Male'?<div className="checkbox">
            <input
              type="checkbox"
              id="youCheckbox1"
              value="Spouse"
              checked={spouse==='Spouse'}
              onChange={spouseCheckBoxChange}
              className="checkbox-input"
            />
            <label htmlFor="youCheckbox1" className="checkbox-label d-flex flex-column justify-content-center align-items-center">
              <img src={femaleicon} alt="wife" className="checkbox-image" />
              Wife
            </label>
          </div>:<div className="checkbox">
            <input
              type="checkbox"
              id="youCheckbox1"
              value="Spouse"
              checked={spouse==='Spouse'}
              onChange={spouseCheckBoxChange}
              className="checkbox-input"
            />
            <label htmlFor="youCheckbox1" className="checkbox-label d-flex flex-column justify-content-center align-items-center">
              <img src={maleicon} alt="husband" className="checkbox-image" />
              Husband
            </label>
          </div>
          }
          <div className="checkbox">
            <input
              type="checkbox" disabled={daughterCount===4}
              id="youCheckbox2"
              value="Son1"
              checked={son1==='Son1'}
              // disabled={childSelection}
              onChange={sonCheckBoxChange}
              className="checkbox-input"
            />
            <label htmlFor="youCheckbox2" className="checkbox-label d-flex flex-column justify-content-center align-items-center">
              <img src={sonicon} alt="Son" className="checkbox-image" />
              <div className="relation-name">Son</div>
            </label>
            {/* <div className='special'> */}
            {son1 && <div className='special'>
            <div className={`btn ${sonCount === 1 ? 'hide' : ''}`} onClick={sonCountDecrease}>-</div>
              <div>{sonCount}</div>
              {daughterCount+sonCount <= 3 &&(<div className='btn' onClick={sonCountIncrease}>+</div>)}
            </div>}
          </div>
     </div>
     <div className='subdiv-row2'>
          <div className="checkbox">
            <input
              type="checkbox" disabled={sonCount===4}
              id="youCheckbox3"
              value="Daughter1"
              checked={daughter1==='Daughter1'}
              onChange={daughterCheckBoxChange}
              className="checkbox-input"
            />
            <label htmlFor="youCheckbox3" className="checkbox-label d-flex flex-column justify-content-center align-items-center">
              <img src={daughtericon} alt="You" className="checkbox-image" />
              Daughter
            </label>
            <div className='special'>
            {daughter1 && <div className='d-flex align-items-center justify-content-center'>
              <div className={`btn ${daughterCount === 1 ? 'hide' : ''}`} onClick={daughterCountDecrease}>-</div>
              <div>{daughterCount}</div>
              {daughterCount+sonCount <= 3 &&(<div className="btn" onClick={daughterCountIncrease} >+</div>)}</div>}
            </div>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="youCheckbox4"
              value="Father"
              checked={father==='Father'}
              onChange={fatherCheckBoxChange}
              className="checkbox-input"
            />
            <label htmlFor="youCheckbox4" className="checkbox-label d-flex flex-column justify-content-center align-items-center">
              <img src={fathericon} alt="You" className="checkbox-image" />
              Father
            </label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              id="youCheckbox5"
              value="Mother"
              checked={mother==='Mother'}
              onChange={motherCheckBoxChange}
              className="checkbox-input"
            />
            <label htmlFor="youCheckbox5" className="checkbox-label d-flex flex-column justify-content-center align-items-center">
              <img src={mothericon} alt="Mother" className="checkbox-image" />
              Mother
            </label>
          </div>
     </div>
  </div>
  {warning&&<span className="text-danger">Select any of the inputs for proceed</span>}
  <div className="bottom-btn">
  <Link to="/initial"><button className='btn btn-danger mt-5' type="button">Previous</button></Link>
  <button className='btn btn-danger mt-5' type="submit" >Next Step</button>
</div>
</form>
</div>
  )
}

export default Display