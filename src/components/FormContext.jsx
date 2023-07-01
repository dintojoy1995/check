import  { createContext, useEffect, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        gender: 'Male',
        proposerAge: '',
        you: 'You',
        youGender: '',
        mother: '',
        father: '',
        son4: '',
        son1: '',
        son2: '',
        son3: '',
        daughter4: '',
        daughter1: '',
        daughter2: '',
        daughter3: '',
        spouse: '',
        samePincode: '',
        motherAge: '',
        fatherAge: '',
        son4Age: '',
        daughter4Age: '',
        spouseAge: '',
        youAge: '',
        son1Age: '',
        son2Age: '',
        son3Age: '',
        daughter1Age: '',
        daughter2Age: '',
        daughter3Age: '',
        sonCount: '',
        daughterCount: '',
        pincode: '',
        mobileNumber: '',
        yourName: '',
        fatherPincode: '',
      });
      const [contactForm,setContactForm] = useState([])
    const [selectedMembers,setSelectedMembers]=useState([{relation:'Self',Age:'',Gender:'Male'}]);
   
    useEffect(() => {
        const storedFormData = localStorage.getItem('formData');
        if(storedFormData) {
            const parsedFormData = JSON.parse(storedFormData);
            setFormData(parsedFormData)
        }
        const storedMembers = localStorage.getItem('selectedMembers');
        if (storedMembers) {
            const parsedMembers = JSON.parse(storedMembers);
            setSelectedMembers(parsedMembers);
        }
        const storedContactForm=localStorage.getItem('contactForm');
        if(storedContactForm) {
          const parsedContactForm = JSON.parse(storedContactForm)
          setContactForm(parsedContactForm)
      }}, []);
    
      useEffect(() => {
        localStorage.setItem('selectedMembers', JSON.stringify(selectedMembers));
        localStorage.setItem('formData', JSON.stringify(formData));
        localStorage.setItem('contactForm', JSON.stringify(contactForm))
      }, [ formData ,selectedMembers,contactForm]);
    
      // const handleGenderChange = (event) => {
      //   setFormData((prevData) => ({
      //       ...prevData,
      //       gender: event.target.value,
      //       spouse:'',
      //       spouseAge:''
      //     }));       
      //     setSelectedMembers((prevMembers)=>
      //   prevMembers.filter((member) => member.relation!== 'Spouse'))
      //   setSelectedMembers(prevMembers =>
      //     prevMembers.map(member => ({
      //       ...member,
      //       gender: member.relation === formData.gender ? formData.gender : event.target.value,
      //     })))
      //   // setSelectedOptions([]);
      // };
      const handleGenderChange = (event) => {
        setFormData((prevData) => ({
            ...prevData,
            gender: event.target.value,
            spouse:'',
            spouseAge:''
          }));       
         
          const selfIndex = selectedMembers.findIndex((member) => member.relation === 'Self');
         if (selfIndex !== -1) {
         selectedMembers[selfIndex] = { ...selectedMembers[selfIndex], Gender: event.target.value };
          }
 setSelectedMembers(selectedMembers);
  setSelectedMembers((prevMembers)=>
        prevMembers.filter((member) => member.relation!== 'Spouse'))
      };
       const youCheckBoxChange =(event) => {
        const value = event.target.value;
        const checked = event.target.checked;
        if (checked) {
            setFormData((prevData) => ({
                ...prevData,
                you: value,
              }));
              setSelectedMembers((prevMembers)=>[...prevMembers, {relation:'Self',Age:'',Gender:formData.gender}]);
            } else {
                setFormData((prevData) => ({
                    ...prevData,
                    you:'',
                    youAge:'',
                    proposerAge:''
                  }));
                  setSelectedMembers((prevMembers)=>
                  prevMembers.filter((member) => member.relation!=='Self')
                  )
            }
      }
      const motherCheckBoxChange =(event) => {
        const value = event.target.value;
        const checked = event.target.checked;
        if (checked) {
            setFormData((prevData) => ({
                ...prevData,
                mother:value
              }));
              setSelectedMembers((prevMembers)=>[...prevMembers, {relation:'Mother',Age:'',Gender:'Female'}]);

            } else {
                setFormData((prevData) => ({
                    ...prevData,
                    mother:'',
                    motherAge:''
                  }));
                  setSelectedMembers((prevMembers)=>
                  prevMembers.filter((member) => member.relation!== value)
                  )
      }
    }
      const fatherCheckBoxChange =(event) => {
        const value = event.target.value;
        const checked = event.target.checked;
        if (checked) {
            setFormData((prevData) => ({
                ...prevData,
                father:value
              }));
              setSelectedMembers((prevMembers)=>[...prevMembers, {relation:'Father',Age:'',Gender:'Male'}]);

            }
             else {
                setFormData((prevData) => ({
                    ...prevData,
                   father:'',
                   fatherAge:''
                  }));
                  setSelectedMembers((prevMembers)=>
                  prevMembers.filter((member) => member.relation!== value)
                  )
            }
      }
      const sonCheckBoxChange =(event) => {
        const value = event.target.value;
        const checked = event.target.checked;
        if (checked) {
            setFormData((prevData) => ({
                ...prevData,
                son1:value,
                sonCount:1
              }));
              setSelectedMembers((prevMembers)=>[...prevMembers, {relation:'Son1',Age:'',Gender:'Male'}]);
            } else {
                setFormData((prevData) => ({
                    ...prevData,
                    son1:'',
                    son2:'',
                    son3:'',
                    son4:'',
                    son1Age:'',
                    son2Age:'',
                    son3Age:'',
                    son4Age:'',
                    sonCount:0
                  }));
                  setSelectedMembers((prevMembers) =>
                  prevMembers.filter((member) => !member.relation.startsWith('Son')))
            }
      }
      const daughterCheckBoxChange =(event) => {
        const value = event.target.value;
        const checked = event.target.checked;
        if (checked) {
            setFormData((prevData) => ({
                ...prevData,
                daughter1:value,
                daughterCount:1
              }));
              setSelectedMembers((prevMembers) => [...prevMembers, { relation: 'Daughter1', Age: '', Gender: 'Female' }]);
            } else {
                setFormData((prevData) => ({
                    ...prevData,
                    daughter1:'',
                    daughter2:'',
                    daughter3:'',
                    daughter4:'',
                    daughter1Age:'',
                    daughter2Age:'',
                    daughter3Age:'',
                    daughter4Age:'',
                    daughterCount:0
                  }));
                  setSelectedMembers((prevMembers) =>
                  prevMembers.filter((member) => !member.relation.startsWith('Daughter')))

            }
      }
      const spouseCheckBoxChange =(event) => {
        const value = event.target.value;
        const checked = event.target.checked;
        let spGender = '';
        if(formData.gender==='Male'){
           spGender='Female';
        }else if(formData.gender==='Female'){
          spGender='Male';
        }
        if (checked) {
            setFormData((prevData) => ({
                ...prevData,
                spouse:value
              }));
              setSelectedMembers((prevMembers)=>[...prevMembers, {relation:value,Age:'',Gender:spGender}]);
            } else {
                setFormData((prevData) => ({
                    ...prevData,
                    spouse:'',
                    spouseAge:''
                  }));
                  setSelectedMembers((prevMembers)=>prevMembers.filter((member)=>member.relation!==value))
            }
      }
     
      // const sonCountDecrease = () => { sonCount>0&& setSonCount(preCount=>preCount-1)};
      const sonCountDecrease = () => {
        if (formData.sonCount > 1) {
          const updatedSonCount = formData.sonCount - 1; // Store the updated sonCount in a separate variable
      
          setFormData((prevData) => ({
            ...prevData,
            sonCount:updatedSonCount
          }));
      
          setSelectedMembers((prevMembers) => {
            const relationsToRemove = [`Son${formData.sonCount}`];
            return prevMembers.filter((member) => !relationsToRemove.includes(member.relation));
          });
        //   setSelectedMembers((prevMembers) => {
        //     const relationsToRemove = [`Son${sonCount}`];
        //     return prevMembers.filter((member) => !relationsToRemove.includes(member.relation));
        //   });
          switch(formData.sonCount){
            case 4: setFormData((prevData) => ({
                ...prevData,
                son4:'',
                son4Age:''
              }));
            break;
            case 3: setFormData((prevData) => ({
                ...prevData,
                son3:'',
                son3Age:''
              }));
            break;
            case 2: setFormData((prevData) => ({
                ...prevData,
                son2:'',
                son2Age:''
              }));
            break;
            case 1: setFormData((prevData) => ({
                ...prevData,
                son1:'',
                son1Age:''
              }));
            break;
          }
        }
      };
      const sonCountIncrease = () => {
        
        if (formData.sonCount + formData.daughterCount < 4) {
        let newsonCount = formData.sonCount+1;
         setFormData((prevData) => ({
            ...prevData,
            sonCount:newsonCount
          }));
          switch (formData.sonCount+1) {
            case 1:
              setSelectedMembers((prevMembers) => [...prevMembers, { relation: 'Son1', Age: '', Gender: 'Male' }]);
              setFormData((prevData) => ({
                ...prevData,
                son1:'Son1',
              }));
              break;
            case 2:
                setFormData((prevData) => ({
                    ...prevData,
                   son2:'Son2',
                  }));
                  setSelectedMembers((prevMembers) => [...prevMembers, { relation: 'Son2',Age: '', Gender: 'Male' }]);

              break;
            case 3:
                setFormData((prevData) => ({
                    ...prevData,
                    son3:'Son3',
                  }));
                  setSelectedMembers((prevMembers) => [...prevMembers, { relation: 'Son3', Age: '', Gender: 'Male' }]);

              break;
            case 4:
                setFormData((prevData) => ({
                    ...prevData,
                    son4:'Son4',
                  }));
                  setSelectedMembers((prevMembers) => [...prevMembers, { relation: 'son4', Age: '', Gender: 'Male' }]);

              break;
            default:
              break;
          }
        }
      };
      
      // const daughterCountDecrease = () => {daughterCount>0&& setDaughterCount(preCount=>preCount-1)};
      const daughterCountDecrease = () => {
        if (formData.daughterCount > 1) {
          const updatedDaughterCount = formData.daughterCount - 1; // Store the updated sonCount in a separate variable
          setFormData((prevData) => ({
            ...prevData,
            daughterCount:updatedDaughterCount
          }));
      
          setSelectedMembers((prevMembers) => {
            const relationsToRemove = [`Daughter${formData.daughterCount}`];
            return prevMembers.filter((member) => !relationsToRemove.includes(member.relation));
          });
          switch(formData.daughterCount){
            case 4: setFormData((prevData) => ({
                ...prevData,
                daughter4:'',
                daughter4age:''
              }));
            break;
            case 3: setFormData((prevData) => ({
                ...prevData,
                daughter3:'',
                daughter3age:''
              }));
            break;
            case 2: setFormData((prevData) => ({
                ...prevData,
                daughter2:'',
                daughter2Age:''
              }));
            break;
            case 1: setFormData((prevData) => ({
                ...prevData,
                daughter1:'',
                daughter1Age:''
              }));
            break;
          }
        }
      };
      const daughterCountIncrease = () => {
        if (formData.sonCount + formData.daughterCount < 4) {
          let  newDaughterCount=formData.daughterCount+1
            setFormData((prevData) => ({
                ...prevData,
               daughterCount:newDaughterCount
              })); // Store the updated sonCount in a new variable
      
      
            // Use the newDaughterCount variable in the switch statement
            switch (newDaughterCount) {
              case 1:
                setFormData((prevData) => ({
                    ...prevData,
                    daughter1:'Daughter1'
                  })); 
                  setSelectedMembers((prevMembers) => [...prevMembers, { relation: 'Daughter1', Age: '', Gender: 'Female' }]);
   
                 break;
              case 2:
                setFormData((prevData) => ({
                    ...prevData,
                   daughter2:'Daughter2'
                  }));
                  setSelectedMembers((prevMembers) => [...prevMembers, { relation: 'Daughter2', Age: '', Gender: 'Female' }]);
                
                  break;
              case 3:
                setFormData((prevData) => ({
                    ...prevData,
                   daughter3:'Daughter3'
                  }));
                  setSelectedMembers((prevMembers) => [...prevMembers, { relation: 'Daughter3', Age: '', Gender: 'Female' }]);
                
                  break;
              case 4:
                setFormData((prevData) => ({
                    ...prevData,
                    daughter4:'Daughter4'
                  }));    
                  setSelectedMembers((prevMembers) => [...prevMembers, { relation: 'Daughter4', Age: '', Gender: 'Female' }]);
            
                  break;
              default:
                break;
            }
      
            return newDaughterCount; // Return the updated daughterCount state
          
        }
      };

  return (
    <FormContext.Provider
      value={{
       formData,handleGenderChange,youCheckBoxChange,motherCheckBoxChange,fatherCheckBoxChange,sonCountDecrease,sonCountIncrease,daughterCountIncrease,daughterCountDecrease,spouseCheckBoxChange,daughterCheckBoxChange,sonCheckBoxChange,setSelectedMembers,selectedMembers,setFormData,contactForm,setContactForm
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
