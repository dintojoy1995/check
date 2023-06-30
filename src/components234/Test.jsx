import React from 'react'
import ContentLoader1 from './ContentLoader'
import { useEffect,useState } from 'react';
import Localbase from 'localbase';

function Test() {

  const [data,setData]=useState([{ name: 'Jane Doe', age: 35 }])

  const db = new Localbase('DJ');

//-------------------------------------User Agent Testing ----------------------//

// useEffect(() => {
//   const userAgent = navigator.userAgent;
//   const data = { userAgent };
//   fetch('', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   });
  
// }, [])

//-------------------------------------IndexedDB using localBase----------------//

useEffect(() => {
  db.config.debug = false; // Set to true for debugging purposes
  db.collection('test');
db.collection('test').add(data)

}, []);


const addData = async (data) => {
  await db.collection('your-collection-name').add(data);
  // Perform any additional actions after adding data
};

const updateData = async (id, newData) => {
  await db.collection('your-collection-name').doc({ id }).update(newData);
  // Perform any additional actions after updating data
};

const deleteData = async (id) => {
  await db.collection('your-collection-name').doc({ id }).delete();
  // Perform any additional actions after deleting data
};
const handleAddData = () => {
  const newData = { name: 'John Doe', age: 30 };
  addData(newData);
};

const handleUpdateData = (id) => {
  const updatedData = { name: 'Jane Doe', age: 35 };
  updateData(id, updatedData);
};

const handleDeleteData = (id) => {
  deleteData(id);
};

  return (
    <div>

<div>
    {data.map((item) => (
      <div key={item.id}>
        <p>{item.name}</p>
        <p>{item.age}</p>
        <button onClick={() => handleUpdateData(item.id)}>Update</button>
        <button onClick={() => handleDeleteData(item.id)}>Delete</button>
      </div>
    ))}
  </div>
<ContentLoader1></ContentLoader1>
{/* <ContentLoader1></ContentLoader1><ContentLoader1></ContentLoader1>
<ContentLoader1></ContentLoader1> */}

    </div>
  )
}

export default Test