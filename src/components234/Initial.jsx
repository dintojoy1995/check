import {useNavigate } from 'react-router-dom';
import maleicon from './assets/male-icon.png';
import femaleicon from './assets/female-icon.png';
import { FormContext } from './FormContext';
import { useContext } from 'react';
import '../css/Initial.css'
const Initial = () => {
  const {Gender,handleGenderChange} = useContext(FormContext);
  const navigate=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault();
    navigate('/display');
  }

  return (
<div className='flx'>
      <h3>Select Gender</h3>
      <br/>
      <form onSubmit={handleSubmit}>
        <div className="first-stage mt-2">
            <div className='first-icons'>
            <div>
            <label className='d-flex flex-column justify-content-center align-items-center'>
      <input
        type="radio"
        name="Gender"
        value="Male"
        checked={Gender === 'Male'}
        onChange={handleGenderChange}
        style={{ display: 'none' }} // Hide the default radio button
      />
      <img
        src={maleicon} //  path to male image
        alt="Male"
        className={Gender === 'Male' ? 'selected' : ''} // Add a class to indicate the selected image
      />
    Male</label>
  </div>
  <div>
    <label className='d-flex flex-column justify-content-center align-items-center'>
      <input
        type="radio"
        name="Gender"
        value="Female"
        checked={Gender === 'Female'}
        onChange={handleGenderChange}
        style={{ display: 'none' }} // Hide the default radio button
      />
      <img
        src={femaleicon} // path to female image
        alt="Fmale"
        className={Gender === 'Female' ? 'selected' : ''} // Add a class to indicate the selected image
      />Female
    </label>
  </div>
            </div>
            <button className='btn btn-danger mt-5' style={{marginLeft:"20%"}}  type="submit">GET STARTED</button>
        </div>
      </form>
    </div>
    
  )
}

export default Initial