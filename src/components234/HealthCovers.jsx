import React, { useEffect, useRef } from 'react';
import './css/HealthCover.css';
import { Card, Form } from 'react-bootstrap';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { Modal } from 'react-bootstrap';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import RangeSlider from 'react-bootstrap-range-slider'
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router-dom';
import HealthCoverCard from './HealthCoverCard';

const HealthCovers = () => {

    const popoversum = (
        <Popover id="popover-basic">
            <Popover.Header as="h3" className="d-flex justify-content-between align-items-center">
                <span>Sum Assured</span>
                <div>
                    <button type="button" className="btn-close" aria-label="Close" onClick={() => setIsOpen(false)}></button>
                </div>
            </Popover.Header>
          <Popover.Body>
            <div>
                <Form.Check
                    type="radio"
                    name="sumInsured"
                    id="onetothree"
                    value="1L to 3L"
                    label="1L to 3L"
                    onChange={''}
                />
                <Form.Check
                    type="radio"
                    name="sumInsured"
                    id="fourtofive"
                    value="4L to 5L"
                    label="4L to 5L"
                    onChange={''}
                />
                <Form.Check
                    type="radio"
                    name="sumInsured"
                    id="sixtonine"
                    value="6L to 9L"
                    label="6L to 9L"
                    onChange={''}
                />
                <Form.Check
                    type="radio"
                    name="sumInsured"
                    id="tentofourteen"
                    value="10L to 14L"
                    label="10L to 14L"
                    onChange={''}
                />
                <Form.Check
                    type="radio"
                    name="sumInsured"
                    id="fifteentotwentyfour"
                    value="15L to 24L"
                    label="15L to 24L"
                    onChange={''}
                />
                <Form.Check
                    type="radio"
                    name="sumInsured"
                    id="twentyfivetoninetynine"
                    value="25L to 99L"
                    label="25L to 99L"
                    onChange={''}
                />
                <Form.Check
                    type="radio"
                    name="sumInsured"
                    id="onecroreplus"
                    value="1Cr+"
                    label="1Cr+"
                    onChange={''}
                />
            </div>
          </Popover.Body>
          </Popover>
    )

    const popoverncb = (
        <Popover id="popover-basic">
            <Popover.Header as="h3" className="d-flex justify-content-between align-items-center">
                <span>No Claim Bonus</span>
                <div>
                    <button type="button" className="btn-close" aria-label="Close" onClick={() => setIsNcb(false)}></button>
                </div>
            </Popover.Header>
          <Popover.Body>
            <div>
                <Form.Check
                    type="radio"
                    name="ncb"
                    id="all"
                    value="All"
                    label="All"
                    onChange={''}
                />
                <Form.Check
                    type="radio"
                    name="ncb"
                    id="zerototwenty"
                    value="0% - 20%"
                    label="0% - 20%"
                    onChange={''}
                />
                <Form.Check
                    type="radio"
                    name="ncb"
                    id="twentytofifty"
                    value="20% - 50%"
                    label="20% - 50%"
                    onChange={''}
                />
                <Form.Check
                    type="radio"
                    name="ncb"
                    id="fiftytoonefifty"
                    value="50% - 150%"
                    label="50% - 150%"
                    onChange={''}
                />
                <Form.Check
                    type="radio"
                    name="ncb"
                    id="onefiftyplus"
                    value="150%+"
                    label="150%+"
                    onChange={''}
                />
            </div>
          </Popover.Body>
          </Popover>
    )

    const [isOpen,setIsOpen] = React.useState(false);
    const [isNcb, setIsNcb] = React.useState(false);
    const [responseDataPremium, setResponseDataPremium] = React.useState([]);

    useEffect(() => { 
        const apiUrls = [
            'http://localhost:5000/reliancegeneralhealthgainindividual',
            'http://localhost:5000/reliancegeneralhealthinfinityindividual',
        ]; 
        const data={}
        const responses = [];

        const postRequests = apiUrls.map(endpoint =>
            axios.post(endpoint, data).then(response => {
              console.log(response);
               responses.push(response.data.data);
              setResponseDataPremium(responses);
              
            })
          );
          Promise.all(postRequests)
            .then(() => {
              console.log(responses);
            })
            .catch(error => {
              console.error(error);
            });
    },[])

  return (
    <div className="container">
        <div className='row'>
            <div className="col-md-5 mt-5">
                <h6>Member Details</h6>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-12 mt-2'>
                <Card className='w-100' style={{ backgroundColor: '#ECEFF1', height: '130px' }}>
                <Card.Body>
                    <h6 style={{ paddingLeft: '150px', paddingTop: '20px' }}>
                        <span style={{marginRight: '3px'}}>Sum Assured:</span>
                        <OverlayTrigger  placement="bottom" overlay={popoversum} show={isOpen}  onHide={() => setIsOpen(false)}>
                            <Button variant="" onClick={() => setIsOpen(!isOpen)}>
                                <FaChevronDown className="ml-0" />
                            </Button>
                        </OverlayTrigger>

                        {/* <span style={{marginRight: '1px'}}>No Claim Bonus:</span>
                        <OverlayTrigger  placement="bottom" overlay={popoverncb} >show={isNcb}  onHide={() => setIsNcb(false)}
                            <Button variant="" onClick={() => setIsNcb(!isNcb)}>
                                <FaChevronDown className="ml-0" />
                            </Button>
                        </OverlayTrigger>

                        <span style={{marginRight: '1px'}}>Preferred Brands:</span>
                        <OverlayTrigger  placement="bottom" overlay={''} >
                            <Button variant="" onClick={''}>
                                <FaChevronDown className="ml-0" />
                            </Button>
                        </OverlayTrigger>

                        <span style={{marginRight: '1px'}}>Room Rent Limit:</span>
                        <OverlayTrigger  placement="bottom" overlay={''} >
                            <Button variant="" onClick={''}>
                                <FaChevronDown className="ml-0" />
                            </Button>
                        </OverlayTrigger>

                        <span style={{marginRight: '1px'}}>Specific Feature Selection:</span>
                        <OverlayTrigger  placement="bottom" overlay={''} >
                            <Button variant="" onClick={''}>
                                <FaChevronDown className="ml-0" />
                            </Button>
                        </OverlayTrigger> */}
                    </h6>
                </Card.Body>
                </Card>
            </div>
            <HealthCoverCard responseDataPremium={responseDataPremium}/>
        </div>
    </div>
  )
}

export default HealthCovers