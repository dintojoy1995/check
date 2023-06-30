import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../css/PremiumBreakup.css';
import { useEffect,useState } from 'react';
import BikePremium from './BikePremium';
// import tickImage from "../image/tick-mark.png";
// import crossImage from "../image/cross-icon.png"
import { useRecoilValue } from 'recoil';
import { apiResponseBikePremiumAtom } from './recoilAtom';




function HealthPremium3({modalShow,onHide,selectedModal}) {
  const [policyType,setPolicyType]=useState(null);
const displayableDiscounts = selectedModal.DiscountItems.filter(e => e.isDisplay);
const displayableAddons = selectedModal.AddonItems.filter(e => e.isDisplay);
useEffect(() => {
  const policyType = localStorage.getItem('policyType');
 if (policyType) {
   setPolicyType(JSON.parse(policyType));
 }
}, [localStorage.getItem('policyType')])


  return (
    <>
    <Modal
    show={modalShow}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div>{selectedModal.CompanyName}</div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
            <div className="col-4">
{
policyType=="2"?(""):(
<p>Cover Value (IDV) :₹ {selectedModal.IDV}</p>
)
}
                <div className="premium1">
                    BUY NOW
                    <br />
                    <b style={{ fontSize: "20px" }}>
                    ₹ {selectedModal.NetPremium}
                    </b>
                </div>
                <br/>
                <div> What’s Covered ?</div>
                {selectedModal.BasicODPremium!==null?(         
  <div className='whatcovered'>
    <span>
     <img src={tickImage} alt="tick"/>&nbsp;&nbsp;Basic OD Premium</span>
  </div>):(         
  <div className='whatcovered'>
     <span>
     <img src={crossImage} alt="x"/>&nbsp;&nbsp;Basic OD Premium</span>
  </div>)
  }
                 {selectedModal.BasicTPPremium!==null?(         
  <div className='whatcovered'>
    <span>
     <img src={tickImage} alt="tick"/>&nbsp;&nbsp;Basic TP Premium</span>
  </div>):(         
  <div className='whatcovered'>
     <span>
     <img src={crossImage} alt="x"/>&nbsp;&nbsp;Basic TP Premium</span>
  </div>)
  }
                {selectedModal.AddonItems.map(discount => (
                   <div key={discount.name} className='whatcovered'>
                  <span key={discount.name}>
                     {discount.isDisplay ? <img src={tickImage} alt="tick"/> : <img src={crossImage} alt="x"/>}&nbsp;&nbsp;{discount.name}
                  </span>
                  </div>
                ))}
               
            </div>
            <div className="col-8">
            <div className='premium-breakup-div'>
                <div className='pbc-header'>
                Basic Covers<br/>
                </div>
                {selectedModal.BasicODPremium!==null?(         
  <div className='pbc-info'>
    <span>Basic OD Premium</span>
    <span>₹ {selectedModal.BasicODPremium}</span>
  </div>):""}

  {selectedModal.BasicTPPremium!=null?(

  <div className='pbc-info'>
    <span>Basic TP Premium</span>
    <span>₹ {selectedModal.BasicTPPremium}</span>
  </div>):""
}
                <div className='pbc-header'>
              Addon Covers
            </div>
            { displayableAddons.length==0?(<div className='pbc-info'>No Addons selected</div>): displayableAddons.map((response) => (
  <div key={response.name} className='pbc-info' >
   <span>{response.name}</span> 
    <span>₹{response.value}</span>
  </div>
))}

            <div className='pbc-header'>
              Discounts
            </div>
            { displayableDiscounts.length==0?(<div className='pbc-info'>No Discounts selected</div>): displayableDiscounts.map((response) => (
  <div key={response.name} className='pbc-info' >
   <span>{response.name}</span> 
    <span>₹{response.value}</span>
  </div>
))}


            <hr/>
            <div className='pbc-total'>
              <span>Premium</span>
              <span className='pbc-premium'>₹ {selectedModal.NetPremium}</span>
            </div>
            <div className='pbc-header'>
              <span>Taxes</span>
              
            </div>
            <div className='pbc-info'>
              <span>GST(18%)</span>
              <spam>₹ {selectedModal.TotalPremiumTax}</spam>
            </div>
            <hr/>
            <div className='pbc-total'>
             <span>Amount payable including GST</span> 
             <span className='pbc-premium'>₹ {selectedModal.FinalPremium}</span>
            </div>
            </div>
            </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </>
  );
}
export default BikePremium3;