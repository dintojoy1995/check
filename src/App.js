import Health from './components/Health'
import Health_plan from './components/Health_plan'
import {BrowserRouter as Router,Route,Routes,Switch} from 'react-router-dom'
import Members_details from './components/Members_details';
import Afterson from './components/Afterson';
import Address_details from './components/Address_details';
import HealthPremium from './components/HealthPremium';
import HealthPremium2 from './components/HealthPremium2';
import HealthProposal from './components/HealthProposal';
import ContentLoader1 from './components/ContentLoader';
// import Test2 from './components/Test2';
import {  FormProvider } from './components/FormContext'
import Form from './components/Form'
import Initial from './components/Initial'
import Display from './components/Display'
import Age from './components/Age'
import Pincode from './components/Pincode'
import 'bootstrap/dist/css/bootstrap.min.css'
import HealthProposalNomine from './components/HealthProposalNominee';
import HealthProposalContactDetails from './components/HealthProposalContactDetails';

function App() {
  return (
<>   
<FormProvider>
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
   {/* <Route path="/test" element={<Test2/>}/> */}
   <Route path="/health_nominee" element={<HealthProposalNomine/>}/>
   <Route path="/health_contact" element={<HealthProposalContactDetails/>}/>

        <Route path="/" element={<Form />} />
        <Route path="/initial" element={<Initial/>} />
        <Route path="/display" element={<Display/>} />
        <Route path="/age" element={<Age/>} />
        <Route path="/pincode" element={<Pincode/>}></Route>

   {/* <Route path="/health_test" element={<HealthProposalUserDetailsForm/>}/> */}
   </Routes>
  </Router>
 </FormProvider>
    </>
  );
}

export default App;
