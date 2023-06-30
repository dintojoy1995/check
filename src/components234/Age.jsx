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
import Display from "./Display";
import '../css/Age.css'

const Age = () => {
  const{selectedMembers,setSelectedMembers,setFatherAge,setMotherAge,setSpouseAge,setSon1Age,setSon2Age,setSon3Age,setSon4Age,setDaughter1Age,setDaughter2Age,setDaughter3Age,setDaughter4Age,setYouAge,motherAge,fatherAge,son1Age,son2Age,son3Age,son4Age,daughter1Age,daughter2Age,daughter3Age,daughter4Age,spouseAge,youAge}=useContext(FormContext)
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
 
  // const formatAge = (relation, age) => {
  //   if (relation === 'son1' || relation === 'son2'|| relation === 'daughter1'|| relation === 'daughter2' || relation === 'daughter3' ||relation === 'daughter4' || relation === 'son3' || relation === 'son4') {
  //     if (age < 1) {
  //       const months = Math.floor(age * 12);
  //       return `${months} months`;
  //     } else {
  //       return `${Math.floor(age)} years`;
  //     }
  //   } else {
  //     return `${Math.floor(age)} years`;
  //   }
  // };
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
      case 'Father':setFatherAge(value);
      break
      case 'Mother':setMotherAge(value)
      break;
      case'Son1':setSon1Age(value)
      break;
      case'Son2':setSon2Age(value)
      break;
      case'Son3':setSon3Age(value)
      break;
      case'Son4':setSon4Age(value)
      break;
      case 'Daughter4':setDaughter4Age(value)
      break;
      case 'Daughter1':setDaughter1Age(value)
      break;
      case 'Daughter2':setDaughter2Age(value)
      break;
      case 'Daughter3':setDaughter3Age(value)
      break;
      case'Spouse':setSpouseAge(value)
      break;
      case 'Self':setYouAge(value)
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
    localStorage.setItem('input_data',JSON.stringify(newArr));
    
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
        {console.log("wadwad",selectedMembers)}
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
              {(member.relation === 'Spouse' && member.Gender==='Female' )&&<img src={femaleicon} alt="frml" />}
              {(member.relation === 'Spouse' && member.Gender==='Male' )&&<img src={maleicon} alt="male" />}
              {(member.relation === 'Self' && member.Gender==='Female' )&&<img src={femaleicon} alt="female" />}
              {(member.relation === 'Self' && member.Gender==='Male' )&&<img src={maleicon} alt="male" />}
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