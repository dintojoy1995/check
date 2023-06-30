import React, { useState } from 'react';

function Test2() {
  const data = [
    { relation: "Self", Age: 25 },
    { relation: "Spouse", Age: 27 },
    { relation: "Son1", Age: 2 },
    { relation: "Son2", Age: 5 }
  ];
  const [checkboxValues, setCheckboxValues] = useState({});

  const [radioValues, setRadioValues] = useState(
    data.reduce((acc, item) => {
      acc[item.relation] = "no";
      return acc;
    }, {})
  );



  const collectData = () => {
    const collectedData = data.map((item) => ({
      relation: item.relation,
      age: item.age,
      healthIssues: checkboxValues[item.relation] || {},
      radioValue: radioValues[item.relation] || ""
    }));
  
    console.log(collectedData); // Display the collected data in the console or handle it as needed
  };
  




  // State to track checkbox visibility for each item
  const [checkboxVisibility, setCheckboxVisibility] = useState(
    data.reduce((acc, item) => {
      acc[item.relation] = false;
      return acc;
    }, {})
  );

  const handleRadioChange = (event, relation) => {
    const value = event.target.value;
  
    // Show or hide checkbox based on radio button selection
    setCheckboxVisibility((prevVisibility) => ({
      ...prevVisibility,
      [relation]: value === "yes"
    }));
  
    // Update the radio button value
    setRadioValues((prevValues) => ({
      ...prevValues,
      [relation]: value
    }));
  
    // Reset checkbox values when radio button changes
    setCheckboxValues((prevValues) => ({
      ...prevValues,
      [relation]: {}
    }));
  };
  
  return (
    <>
      {data.map((item, index) => (
        
        
        <div key={index}>
          <span>Health Issue</span>
          <input
            type="radio"
            id={`${item.relation}-healthIssue`}
            name={`${item.relation}-healthIssue`}
            value="yes"
            onChange={(event) => handleRadioChange(event, item.relation)}
          />
          Yes
          <input
            type="radio"
            id={`${item.relation}-healthIssue`}
            name={`${item.relation}-healthIssue`}
            value="no"
            onChange={(event) => handleRadioChange(event, item.relation)}
          />
          No
          {checkboxVisibility[item.relation] && (
  <div>
    <input
      type="checkbox"
      id={`${item.relation}-cancer`}
      checked={checkboxValues[item.relation]?.cancer || false}
      onChange={(event) =>
        setCheckboxValues((prevValues) => ({
          ...prevValues,
          [item.relation]: {
            ...prevValues[item.relation],
            cancer: event.target.checked
          }
        }))
      }
    />
    <label htmlFor={`${item.relation}-cancer`}>cancer</label>

    <input
      type="checkbox"
      id={`${item.relation}-tb`}
      checked={checkboxValues[item.relation]?.tb || false}
      onChange={(event) =>
        setCheckboxValues((prevValues) => ({
          ...prevValues,
          [item.relation]: {
            ...prevValues[item.relation],
            tb: event.target.checked
          }
        }))
      }
    />
    <label htmlFor={`${item.relation}-tb`}>TB</label>
  </div>
)}
        </div>
      ))}
      <button onClick={collectData}>Collect Data</button>
    </>
  );
}

export default Test2