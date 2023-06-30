import Health from './components/Health'
import Health_plan from './components/Health_plan'
import {BrowserRouter as Router,Route,Routes,Switch} from 'react-router-dom'
import Members_details from './components/Members_details';
import Afterson from './components/Afterson';
import Address_details from './components/Address_details';
import HealthPremium from './components/HealthPremium';
import HealthPremium2 from './components/HealthPremium2';
import HealthProposal from './components/HealthProposal';
import HealthProposalUserDetailsForm from './components/HealthProposalUserDetailsForm';
import ContentLoader1 from './components/ContentLoader';
import Test from './components/Test';
function App() {
  return (
<>   

 <Router>
   <Routes>
   <Route path="/health" element={<Health/>} />
   <Route path="/health_plan" element={<Health_plan/>} />
   <Route path="/afterson" element={<Afterson/>} />
   <Route path="/members_details" element={<Members_details/>}/>
   <Route path="/address_details" element={<Address_details/>}/>
   <Route path="/health_premium" element={<HealthPremium/>}/>
   <Route path="/health_premium2" element={<HealthPremium2/>}/>
   <Route path="/health_proposal" element={<HealthProposal/>}/>
   <Route path="/loader" element={<ContentLoader1/>}/>
   <Route path="/test" element={<Test/>}/>
   {/* <Route path="/health_test" element={<HealthProposalUserDetailsForm/>}/> */}
   </Routes>
  </Router>
 
    </>
  );
}

export default App;
