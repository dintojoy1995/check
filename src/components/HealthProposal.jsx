import React, { useState,useEffect } from 'react';
import HealthProposalTopBar from './HealthProposalTopBar';
import HealthProposalBasicDetails from './HealthProposalBasicDetails';
import HealthProposalNominee from './HealthProposalNominee';
import HealthProposalContactDetails from './HealthProposalContactDetails';
function HealthProposal() {
    const [currentComponent, setCurrentComponent] = useState(2);
    useEffect(() => {
   
    }, [])
    
  return (
<>
<HealthProposalTopBar/>
{localStorage.getItem("proposalStep") == 1 && (
        <HealthProposalBasicDetails />
      )}
      {localStorage.getItem("proposalStep") == 2 && (
        <HealthProposalNominee />
      )}
      {localStorage.getItem("proposalStep") == 3 && (
        <HealthProposalContactDetails />
      )}

</>
  )
}

export default HealthProposal