import React, { useEffect,useState,useRef } from 'react';
import './css/Premium.css';
import { Card, Form } from 'react-bootstrap';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { Modal } from 'react-bootstrap';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

const HealthCoverCard = ({responseDataPremium}) => {

  return (
       
    <>
    {

responseDataPremium.map(e=>{
  //Find total Discout
    // const displayableDiscounts = e.DiscountItems.filter(discount => discount.isDisplay)
    // const totalDiscount = displayableDiscounts.reduce((acc, discount) => parseInt(acc) + parseInt(discount.value),0)
  //Find total Addon Cover Value
    // const displayableAddons = e.AddonItems.filter(Addons => Addons.isDisplay)
    // const totalAddons = displayableAddons.reduce((acc, Addons) => parseInt(acc) + parseInt(Addons.value),0)
  
  return (
    <div className='col-md-3 mt-2 float-left'>
    <Card className='w-100' style={{ backgroundColor: '#ECEFF1', height: '375px' }}>
      <Card.Body>
        <br />
        <div className="card-top">
        <div> <img src={e.CompanyLogo} style={{width:"140px",heigth:"20px"}}/></div>
        <div>{e.Package}</div>
            <div className="premium">
                BUY NOW:{e.CompanyName}
            <br />
            <b style={{ fontSize: "20px" }}>
              ₹ {e.NetPremium}
            </b>
          </div>
        </div>
      </Card.Body>
    </Card>
    </div>
   )})
  }
  </>
  )
}

export default HealthCoverCard