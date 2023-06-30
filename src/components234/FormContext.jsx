import  { createContext, useEffect, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [Gender, setGender] = useState('Male');
    const [proposerAge,setProposerAge] = useState('');
    const [You, setYou] = useState('You');
    const [YouGender, setYouGender] = useState('')
    const [Mother, setMother] = useState('');
    const [Father, setFather] = useState('');
    const [Son4, setSon4] = useState(''); 
    const [Son1,setSon1]=useState('')
    const [Son2,setSon2]=useState('')
    const [Son3,setSon3]=useState('')
    const [Daughter4, setDaughter4] = useState('');
    const [Daughter1,setDaughter1]=useState('')
    const [Daughter2,setDaughter2]=useState('')
    const [Daughter3,setDaughter3]=useState('')
    const [Spouse, setSpouse] = useState('');
    const [samePincode, setSamePincode] = useState("");
    // const [selectedOptions, setSelectedOptions] = useState([]);
  const [motherAge,setMotherAge] = useState('');
    const [fatherAge,setFatherAge] = useState('');
    const [son4Age,setSon4Age] = useState('');
    const [daughter4Age,setDaughter4Age] = useState('');
    const [spouseAge,setSpouseAge] = useState('');
    const [youAge,setYouAge] = useState('');
    const [son1Age,setSon1Age] = useState('');
    const [son2Age,setSon2Age] = useState('');
    const [son3Age,setSon3Age] = useState('');
    const [daughter1Age,setDaughter1Age]=useState('')
    const [daughter2Age,setDaughter2Age]=useState('')
    const [daughter3Age,setDaughter3Age]=useState('')
    // const [age, setAge] = useState('');
    const [sonCount,setSonCount]=useState('')
    const [daughterCount, setDaughterCount]=useState('')
    const [selectedMembers,setSelectedMembers]=useState([{relation:'Self',Age:'',Gender:'Male'}]);
    const [pincode,setPincode]=useState('')
    const [mobileNumber,setMobileNumber]=useState('')
    const [yourName,setYourName]=useState('')
    const [fatherPincode,setFatherPincode]=useState('')
    const [contactForm,setContactForm]=useState([]) 
    useEffect(() => {
      const storedProposerAge=localStorage.getItem('proposerAge');
        const storedSamePincode=localStorage.getItem('samePincode');
        const storedPincode=localStorage.getItem('pincode');
        const storedGender = localStorage.getItem('Gender');
        const storedYou = localStorage.getItem('You');
        const storedMother = localStorage.getItem('Mother');
        const storedFather = localStorage.getItem('Father');
        const storedSon4 = localStorage.getItem('Son4');
        const storedSon1 = localStorage.getItem('Son1');
        const storedSon2 = localStorage.getItem('Son2');
        const storedSon3 = localStorage.getItem('Son3');
        const storedDaughter1 = localStorage.getItem('Daughter1');
        const storedDaughter2 = localStorage.getItem('Daughter2');
        const storedDaughter3 = localStorage.getItem('Daughter3');
        const storedDaughter4 = localStorage.getItem('Daughter4');
        const storedSpouse = localStorage.getItem('Spouse');
        const storedMotherAge = localStorage.getItem('motherAge');
        const storedFatherAge = localStorage.getItem('fatherAge');
        const storedSon1Age = localStorage.getItem('son1Age');
        const storedDaughter1Age = localStorage.getItem('daughter1Age');
        const storedSpouseAge = localStorage.getItem('spouseAge');
        const storedYouAge = localStorage.getItem('youAge');
        const storedSon2Age = localStorage.getItem('son2Age');
        const storedSon3Age = localStorage.getItem('son3Age');
        const storedSon4Age = localStorage.getItem('son4Age');
        const storedDaughter2Age = localStorage.getItem('daughter2Age');
        const storedDaughter3Age = localStorage.getItem('daughter3Age');  
        const storedDaughter4Age = localStorage.getItem('daughter4Age');
        const storedDaughterCount=parseInt(localStorage.getItem('daughterCount'));
        const storedSonCount=parseInt(localStorage.getItem('sonCount'));
        const storedMembers = localStorage.getItem('selectedMembers');
        const storedMobileNumber =localStorage.getItem('mobileNumber');
        const storedYourName = localStorage.getItem('yourName');
        const storedFatherPincode = localStorage.getItem('fatherPincode'); 
        const storedContactForm = localStorage.getItem('contactForm');
        const storedYouGender = localStorage.getItem('YouGender');
        if(storedProposerAge){
          setProposerAge(storedProposerAge);
        }
        if(storedYouGender){
          setYouGender(storedYouGender);
        }
        if(storedSamePincode){
          setSamePincode(storedSamePincode);
        }
        if(storedContactForm){
          setContactForm(JSON.parse(storedContactForm))
        }
        if(storedMobileNumber){
          setMobileNumber(storedMobileNumber)
        }
        if(storedYourName){
          setYourName(storedYourName)
        }
        if(storedFatherPincode){
          setFatherPincode(storedFatherPincode)
        }
        if (storedPincode) {
          setPincode(storedPincode);
        }
        if (storedGender) {
          setGender(storedGender);
        }
        if (storedYou) {
          setYou(storedYou);
          setSelectedMembers((prevMemers)=>[...prevMemers, {relation:'Self',Age:'',Gender:'Male'}])
        }
        if (storedMother) {
          setMother(storedMother);
          setSelectedMembers((prevMemberrs)=>[...prevMemberrs,{relation:storedMother,Age:'',Gender:'Female'}])
        }
        if (storedFather) {
          setFather(storedFather);
          setSelectedMembers((prevMembers) => [...prevMembers,{ relation: storedFather, Age: '', Gender: 'Male' }]);
    }
        if (storedSon1) {
          setSon1(storedSon1);
          setSelectedMembers((prevMembers)=>[...prevMembers, {relation:storedSon1,Age:'',Gender:'Male'}])
        }
         if (storedSon4) {
          setSelectedMembers((prevMembers)=>[...prevMembers,{relation:storedSon4,Age:'',Gender:'Male'}])
         }
         if (storedSon2) {
          setSelectedMembers((prevMembers)=>[...prevMembers,{relation:storedSon2,Age:'',Gender:'Male'}])
         }
         if (storedSon3) {
          setSelectedMembers((prevMembers)=>[...prevMembers,{relation:storedSon3,Age:'',Gender:'Male'}])
         }
        if (storedDaughter4) {
          setSelectedMembers((prevMembers)=>[...prevMembers, {relation:storedDaughter4,Age:'',Gender:'Female'}])
        }
        if (storedDaughter1) {
          setDaughter1(storedDaughter1);
          setSelectedMembers((prevMembers)=>[...prevMembers,{relation:storedDaughter1,Age:'',Gender:'Female'}])
        }
        if (storedDaughter2) {
          setSelectedMembers((prevMembers)=>[...prevMembers,{relation:storedDaughter2,Age:'',Gender:'Female'}])
        }
        if (storedDaughter3) {
          setSelectedMembers((prevMembers)=>[...prevMembers,{relation:storedDaughter3,Age:'',Gender:'Female'}])
        }
        if (storedSpouse) {
          setSpouse(storedSpouse);
          setSelectedMembers((prevMembers)=>[...prevMembers, {relation:storedSpouse,Age:'',Gender:'Female'}])
        }
        if (storedMotherAge) {
           setMotherAge(storedMotherAge);
       }
       if (storedFatherAge) {
             setFatherAge(storedFatherAge);
       }
       if (storedSpouseAge) {
        setSpouseAge(storedSpouseAge);
       }
       if (storedSon4Age) {
        setSon4Age(storedSon4Age);
       }
       if (storedDaughter4Age) {
        setDaughter4Age(storedDaughter4Age);
       }
       if (storedYouAge) {
        setYouAge(storedYouAge);
       }
       if (storedSon1Age) {
        setSon1Age(storedSon1Age);
       }
       if (storedSon2Age) {
        setSon2Age(storedSon2Age);
       }
        if (storedSon3Age) {
        setSon3Age(storedSon3Age);
       }
       if (storedDaughter1Age) {
        setDaughter1Age(storedDaughter1Age);
       }
       if (storedDaughter2Age) {
        setDaughter2Age(storedDaughter2Age);
       }
       if (storedDaughter3Age) {
        setDaughter3Age(storedDaughter3Age);
       }
        if (storedDaughterCount) {
          setDaughterCount(storedDaughterCount);
       }
       if (storedSonCount) {
        setSonCount(storedSonCount);
       }
     if (storedMembers) {
            const parsedMembers = JSON.parse(storedMembers);
            setSelectedMembers(parsedMembers);
        }
      }, []);
    
      useEffect(() => {
        localStorage.setItem('proposerAge',proposerAge);
        localStorage.setItem('YouGender',YouGender)
        localStorage.setItem('samePincode',samePincode)
        localStorage.setItem('mobileNumber',mobileNumber);
        localStorage.setItem('yourName',yourName);
        localStorage.setItem('fatherPincode',fatherPincode);
        localStorage.setItem('pincode',pincode)
        localStorage.setItem('contactForm',JSON.stringify(contactForm));
        localStorage.setItem('Gender', Gender);
        localStorage.setItem('You', You);
        localStorage.setItem('Mother', Mother);
        localStorage.setItem('Father', Father);
        localStorage.setItem('Son4', Son4);
        localStorage.setItem('Son1', Son1);
        localStorage.setItem('Son2', Son2);
        localStorage.setItem('Son3', Son3);
        localStorage.setItem('Daughter4', Daughter4);
        localStorage.setItem('Daughter1', Daughter1);
        localStorage.setItem('Daughter2', Daughter2);
        localStorage.setItem('Daughter3', Daughter3);
        localStorage.setItem('Spouse', Spouse);
        localStorage.setItem('motherAge', motherAge);
        localStorage.setItem('fatherAge', fatherAge);
        localStorage.setItem('son4Age', son4Age);
        localStorage.setItem('daughter4Age', daughter4Age);
        localStorage.setItem('spouseAge', spouseAge);
        localStorage.setItem('youAge', youAge);
        localStorage.setItem('son1Age', son1Age);
        localStorage.setItem('son2Age', son2Age);
        localStorage.setItem('son3Age', son3Age);
        localStorage.setItem('daughter1Age', daughter1Age);
        localStorage.setItem('daughter2Age', daughter2Age);
        localStorage.setItem('daughter3Age', daughter3Age);
        localStorage.setItem('sonCount', sonCount);
        localStorage.setItem('daughterCount',daughterCount);
        localStorage.setItem('selectedMembers', JSON.stringify(selectedMembers));
      }, [Gender,You,Mother,Father,Son4,Son1,Son2,Son3,Daughter4,Daughter1,Daughter2,Daughter3,Spouse,motherAge,fatherAge,son4Age,daughter4Age,spouseAge,youAge,son1Age,son2Age,son3Age,daughter1Age,daughter2Age,daughter3Age,sonCount,daughterCount  ,selectedMembers,pincode,mobileNumber,fatherPincode,yourName,contactForm,samePincode,YouGender,proposerAge]);
    
      const handleGenderChange = (event) => {
        const selectedGender = event.target.value;
        setGender(selectedGender);
        setSpouse('')
        setSpouseAge('');
        setSelectedMembers((prevMembers)=>
        prevMembers.filter((member) => member.relation!== 'Spouse'))
        setSelectedMembers(prevMembers =>
          prevMembers.map(member => ({
            ...member,
            Gender: member.relation === Gender ? Gender : selectedGender,
          })))
        // setSelectedOptions([]);
      };
       const youCheckBoxChange =(event) => {
        const value = event.target.value;
        const checked = event.target.checked;
        if (checked) {
              setYou(value);
              // setSelectedMembers([...selectedMembers, value]);
              setSelectedMembers((prevMembers)=>[...prevMembers, {relation:'Self',Age:'',Gender:Gender}]);
            } else {
              setSelectedMembers((prevMembers)=>
              prevMembers.filter((member) => member.relation!== 'Self')
              )
              setYou('');
              setYouAge('');
            }
      }
      const motherCheckBoxChange =(event) => {
        const value = event.target.value;
        const checked = event.target.checked;
        if (checked) {
              setMother(value);
              setSelectedMembers((prevMembers)=>[...prevMembers, {relation:value, Age:'',Gender:'Female'}]);
            } else {
              setMother('');
              setMotherAge('');
              setSelectedMembers((prevMembers)=>
                        prevMembers.filter((member) => member.relation!== value)
                        )
            }
      }
      const fatherCheckBoxChange =(event) => {
        const value = event.target.value;
        const checked = event.target.checked;
        if (checked) {
              setFather(value);
              // setSelectedMembers([...selectedMembers, value]);
              setSelectedMembers((prevMembers)=>[...prevMembers, {relation:value,Age:'',Gender:'Male'}])
            }
             else {
              setSelectedMembers((prevMembers)=>prevMembers.filter((member)=>member.relation!== value))
              setFather('');
              setFatherAge('');
            }
      }
      const sonCheckBoxChange =(event) => {
        const value = event.target.value;
        const checked = event.target.checked;
        if (checked) {
              setSon1(value);
              setSonCount(1);
              setSelectedMembers((prevMembers) => [...prevMembers, { relation: 'Son1', Age: '', Gender: 'Male' }]);
    
            } else {
              setSon1('');
              setSon1Age('')
              setSon2Age('')
              setSon3Age('')
              setSon4Age('')
              setSelectedMembers((prevMembers) =>
              prevMembers.filter((member) => !member.relation.startsWith('Son'))
            );
              setSonCount(0)
            }
      }
      const daughterCheckBoxChange =(event) => {
        const value = event.target.value;
        const checked = event.target.checked;
        if (checked) {
              setDaughter1(value);
              setDaughterCount(1)
              setSelectedMembers((prevMembers) => [...prevMembers, { relation: 'Daughter1', Age: '', Gender: 'Female' }]);
            } else {
              setDaughter1('');
              setDaughter1Age('')
              setDaughter2Age('')
              setDaughter3Age('')
              setDaughter4Age('')
              setSelectedMembers((prevMembers) =>
              prevMembers.filter((member) => !member.relation.startsWith('Daughter'))
            );
            setDaughterCount(0)
            }
      }
      const spouseCheckBoxChange =(event) => {
        const value = event.target.value;
        const checked = event.target.checked;
        let spGender = '';
        if(Gender==='Male'){
           spGender='Female';
        }else if(Gender==='Female'){
          spGender='Male';
        }
        if (checked) {
              setSpouse(value);
                  
              // setSelectedMembers([...selectedMembers, value]);
              setSelectedMembers((prevMembers)=>[...prevMembers, {relation:value,Age:'',Gender:spGender}]);
            } else {
              setSelectedMembers((prevMembers)=>prevMembers.filter((member)=>member.relation!==value))
              setSpouse('');
              setSpouseAge('')
            }
      }
     
      // const sonCountDecrease = () => { sonCount>0&& setSonCount(preCount=>preCount-1)};
      const sonCountDecrease = () => {
        if (sonCount > 1) {
          const updatedSonCount = sonCount - 1; // Store the updated sonCount in a separate variable
      
          setSonCount(updatedSonCount);
      
          setSelectedMembers((prevMembers) => {
            const relationsToRemove = [`Son${sonCount}`];
            return prevMembers.filter((member) => !relationsToRemove.includes(member.relation));
          });
          switch(sonCount){
            case 4:setSon4Age('')
            break;
            case 3:setSon3Age('')
            break;
            case 2:setSon2Age('')
            break;
            case 1:setSon1Age('')
            break;
          }
        }
      };
      const sonCountIncrease = () => {
        
        if (sonCount + daughterCount < 4) {
          setSonCount((prevCount) => prevCount + 1);
      
          switch (sonCount+1) {
            case 1:
              setSelectedMembers((prevMembers) => [...prevMembers, { relation: 'Son1', Age: '', Gender: 'Male' }]);
              break;
            case 2:
              setSelectedMembers((prevMembers) => [...prevMembers, { relation: 'Son2', Age: '', Gender: 'Male' }]);
              break;
            case 3:
              setSelectedMembers((prevMembers) => [...prevMembers, { relation: 'Son3', Age: '', Gender: 'Male' }]);
              break;
            case 4:
              setSelectedMembers((prevMembers) => [...prevMembers, { relation: 'Son4', Age: '', Gender: 'Male' }]);
              break;
            default:
              break;
          }
        }
      };
      
      // const daughterCountDecrease = () => {daughterCount>0&& setDaughterCount(preCount=>preCount-1)};
      const daughterCountDecrease = () => {
        if (daughterCount > 1) {
          const updatedDaughterCount = daughterCount - 1; // Store the updated sonCount in a separate variable
      
          setDaughterCount(updatedDaughterCount);
      
          setSelectedMembers((prevMembers) => {
            const relationsToRemove = [`Daughter${daughterCount}`];
            return prevMembers.filter((member) => !relationsToRemove.includes(member.relation));
          });
          switch(daughterCount){
            case 4:setDaughter4Age('')
            break;
            case 3:setDaughter3Age('')
            break;
            case 2:setDaughter2Age('')
            break;
            case 1:setDaughter1Age('')
            break;
          }
        }
      };
      const daughterCountIncrease = () => {
        if (sonCount + daughterCount < 4) {
          setDaughterCount((prevCount) => {
            const newDaughterCount = prevCount + 1; // Store the updated sonCount in a new variable
      
            console.log('daughterCount increase');
      
            // Use the newDaughterCount variable in the switch statement
            switch (newDaughterCount) {
              case 1:
                setSelectedMembers((prevMembers) => [...prevMembers, { relation: 'Daughter1', Age: '', Gender: 'Female' }]);
                break;
              case 2:
                setSelectedMembers((prevMembers) => [...prevMembers, { relation: 'Daughter2', Age: '', Gender: 'Female' }]);
                break;
              case 3:
                setSelectedMembers((prevMembers) => [...prevMembers, { relation: 'Daughter3', Age: '', Gender: 'Female' }]);
                break;
              case 4:
                setSelectedMembers((prevMembers) => [...prevMembers, { relation: 'Daughter4', Age: '', Gender: 'Female' }]);
                break;
              default:
                break;
            }
      
            return newDaughterCount; // Return the updated daughterCount state
          });
        }
      };

  return (
    <FormContext.Provider
      value={{
        Gender,setGender,You,setYou,Son1,setSon1,Son2,setSon2,Son3,setSon3,Son4,setSon4,Mother,setMother,Father,setFather,Spouse,setSpouse,Daughter1,setDaughter1,Daughter2,setDaughter2,Daughter3,setDaughter3,Daughter4,setDaughter4,selectedMembers,setSelectedMembers,sonCount,setSonCount,daughterCount,setDaughterCount,motherAge,setMotherAge,fatherAge,spouseAge,setSpouseAge,son4Age,daughter4Age,youAge,setYouAge,setSon1Age,setSon2Age,setSon3Age,son1Age,son2Age,son3Age,daughter1Age,setDaughter1Age,daughter2Age,setDaughter2Age,daughter3Age,setDaughter3Age,setFatherAge,setSon4Age,setDaughter4Age,handleGenderChange,daughterCountDecrease,daughterCountIncrease,sonCountIncrease,sonCountDecrease,daughterCheckBoxChange, sonCheckBoxChange,motherCheckBoxChange, fatherCheckBoxChange,youCheckBoxChange,spouseCheckBoxChange,contactForm,setContactForm,pincode,setPincode,mobileNumber,setMobileNumber,fatherPincode,setFatherPincode,samePincode,setSamePincode,yourName,setYourName,proposerAge,setProposerAge
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
