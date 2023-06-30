import { useContext, useEffect } from "react"
import { FormContext } from "./FormContext"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import mothericon from './assets/mother-icon.png'
import fathericon from './assets/father-icon.png'
import maleicon from './assets/male-icon.png'
import femaleicon from './assets/female-icon.png'
import daughtericon from './assets/daughter-icon.png'
import sonicon from './assets/son-icon.png'
import '../css/Age.css'
const Age = () => {
  const{selectedMembers,setSelectedMembers,formData,setFormData}=useContext(FormContext)
  const {motherAge,fatherAge,son1Age,son2Age,son3Age,son4Age,daughter1Age,daughter2Age,daughter3Age,daughter4Age,spouseAge,youAge}=formData
  const [gap,setGap]=useState('')
  useEffect(()=>{
    setGap('')
  },[])
  useEffect(()=>{
    setGap('')
  },[selectedMembers])
  const ageRange = {
    Father: { min: 18, max: 100 },
    Mother: { min: 18, max: 100 },
    Son1: { min: 0, max: 30 },
    Son2: { min: 0, max: 30 },
    Son3: { min: 0, max: 30 },
    Son4: { min: 0, max: 30 },
    Daughter4: { min: 0, max: 30 },
    Daughter1:{ min: 0, max: 30 },
    Daughter2:{ min: 0, max: 30 },
    Daughter3:{ min: 0, max: 30 },
    Spouse: { min: 18, max: 100 },
    Self: { min: 18, max: 100 },
  };
 

  const s1Age=parseInt(son1Age)
  const s2Age=parseInt(son2Age)
  const s3Age=parseInt(son3Age)
  const s4Age=parseInt(son4Age)
  const d1Age=parseInt(daughter1Age)
  const d2Age=parseInt(daughter2Age)
  const d3Age=parseInt(daughter3Age)
  const d4Age=parseInt(daughter4Age)
  const uAge=parseInt(youAge)
  const mAge=parseInt(motherAge)
  const fAge=parseInt(fatherAge)
  const sAge=parseInt(spouseAge)

  const handleAgeChange = (index, event) => {
    const { value } = event.target;
    const member = selectedMembers[index];
    const ageLimits = ageRange[member.relation];
    const newAge = parseFloat(value);
    const x=member.relation;
    switch(x){
      case 'Father':  setFormData((prevData) => ({
        ...prevData,
        fatherAge:value
      }));
      break
      case 'Mother':setFormData((prevData) => ({
        ...prevData,
        motherAge:value
      }));
      break;
      case'Son1':setFormData((prevData) => ({
        ...prevData,
        son1Age:value
      }));
      break;
      case'Son2':setFormData((prevData) => ({
        ...prevData,
        son2Age:value
      }));
      break;
      case'Son3':setFormData((prevData) => ({
        ...prevData,
        son3Age:value
      }));
      break;
      case'Son4':setFormData((prevData) => ({
        ...prevData,
        son4Age:value
      }));
      break;
      case 'Daughter4':setFormData((prevData) => ({
        ...prevData,
        daughter4Age:value
      }));
      break;
      case 'Daughter1':setFormData((prevData) => ({
        ...prevData,
        daughter1Age:value
      }));
      break;
      case 'Daughter2':setFormData((prevData) => ({
        ...prevData,
        daughter2Age:value
      }));
      break;
      case 'Daughter3':setFormData((prevData) => ({
        ...prevData,
        daughter3Age:value
      }));
      break;
      case'Spouse':setFormData((prevData) => ({
        ...prevData,
        spouceAge:value
      }));
      break;
      case 'Self':setFormData((prevData) => ({
        ...prevData,
        youAge:value
      }));
      break;
    }
    if (ageLimits && newAge >= ageLimits.min && newAge <= ageLimits.max) {
      setSelectedMembers((prevMembers) => {
        const updatedMembers = [...prevMembers];
        updatedMembers[index] = { ...member, Age: newAge };
        return updatedMembers;
      });
    }
  };

  const renderAgeOptions = (relation) => {
    const ageLimits = ageRange[relation];
    const options = [];
  
    if (
      relation === 'Son1' ||
      relation === 'Son2' ||
      relation === 'Daughter1' ||
      relation === 'Daughter2' ||
      relation === 'Daughter3' ||
      relation === 'Daughter4' ||
      relation === 'Son3' ||
      relation === 'Son4'
    ) {
      for (let i = 1; i <= 11; i++) {
        options.push(
          <option key={`${i}`} value={i / 12}>
            {i} months
          </option>
        );
      }
    }
  
    if (ageLimits) {
      for (let i = ageLimits.min; i <= ageLimits.max; i++) {
        if(i===0){
          continue;
        }else{
        options.push(
          <option key={`${i+45}`} value={i}>
            {i} years
          </option>
        );}
      }
    }
  
    return options;
  };
  
  const navigate = useNavigate()
  // const previous=()=>{
  //   navigate(-1)
  // }
  const handleFormSubmit=(e)=>{
   
   
    if (sAge-s1Age<18 || uAge-s1Age<18 ||sAge-s2Age<18 ||uAge-s2Age<18 ||sAge-s3Age<18 ||uAge-s3Age<18 || sAge-s4Age<18 ||uAge-s4Age<18||sAge-d1Age<18 || uAge-d1Age<18||uAge-d2Age<18 ||sAge-d2Age<18 || uAge-d3Age<18 || sAge-d3Age<18||uAge-d4Age<18||sAge-d4Age<18){
      setGap(1)
    e.preventDefault();}
      else if(fAge-uAge<18 || mAge-uAge<18 ){
        e.preventDefault()
        setGap(2)
      }else{
      e.preventDefault();
      console.log(gap)
     navigate('/pincode')
   
    
    const newArr = selectedMembers.map(obj => {
      let relation = obj.relation;
      
      if (relation.startsWith('Son')) {
        relation = 'Son';
      } else if (relation.startsWith('Daughter')) {
        relation = 'Daughter';
      }
      
      return { ...obj, relation };
    });
    
    console.log(newArr);
    localStorage.setItem("input_data", JSON.stringify(newArr));
  }
  }
  const column='1fr 1fr 1fr'
  
  return (
    <div className="maindiv">
    <br/>
    <br/>
    <h5>Tell us the ages of your family members</h5>
    <br/>
    <br/>
      <form onSubmit={handleFormSubmit}>
        {selectedMembers.map((member,index) =>
        <>
              <div key={index} className="sub-div">
              {member.relation === 'Son2' && <img src={sonicon} alt="" />}
              {member.relation === 'Son3' && <img src={sonicon} alt="" />}
              {member.relation === 'Son4' && <img src={sonicon} alt="" />}
              {member.relation === 'Daughter1' && <img src={daughtericon} alt="" />}
              {member.relation === 'Daughter2' && <img src={daughtericon} alt="" />}
              {member.relation === 'Daughter3' && <img src={daughtericon} alt="" />}
              {member.relation === 'Daughter4' && <img src={daughtericon} alt="" />}
              {member.relation === 'Father' && <img src={fathericon} alt="" />}
              {member.relation === 'Mother' && <img src={mothericon} alt="" />}
              {(member.relation === 'Spouse' && member.Gender==='Female' )&&<img src={femaleicon} alt="dd" />}
              {(member.relation === 'Spouse' && member.Gender==='Male' )&&<img src={maleicon} alt="dd" />}
              {(member.relation === 'Self' && member.Gender==='Female' )&&<img src={femaleicon} alt="dd" />}
              {(member.relation === 'Self' && member.Gender==='Male' )&&<img src={maleicon} alt="dd" />}
              {member.relation === 'Son1' && <img src={sonicon} alt="" />}
                {member.relation==='Self'?<span>You</span>:<span>{member.relation}</span>}
                <div>
                  <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <select value={member.Age} onChange={(e) => handleAgeChange(index,e)} required>
                    <option value="">Select Age</option>
                    {renderAgeOptions(member.relation)}</select>
                </div>
              </div>
        </>
        )}
        {gap===1&&<span>Age between your child and you and your spouce must be atleast 18 years old</span>
        }
        {gap===2&&<span>You and your parents must be atleast 18 years old</span>}
        <div className="bottom-btn">
           <div><Link to="/display"><button className='btn btn-danger mt-5'>Previous</button></Link></div> 
          <div><button className='btn btn-danger mt-5' type ="submit">Next Step</button></div> 
       </div>
      </form>
    </div>
  )
}

export default Age