import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';
import { useEffect } from 'react';


function Stepp() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const data = localStorage.getItem('health_stepper');
    if (data) {
       setActive(data);
    }
    else{
      setActive(0);
    }
  }, []);

  // const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  // const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active} breakpoint="sm">
        <Stepper.Step label="First step" description="First Step">
       </Stepper.Step>
        <Stepper.Step label="Second step" description="Second Step">
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Final Step">
       </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>
      <br/>
      <div style={{textAlign:"center"}}>
<a href='/health_plan'>Edit<img width="25px" height="25px" src={require("../image/healthicons/edit-icon.png")}/></a>
</div>
      {/* <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>Back</Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group> */}
    </>
  );
}
export default Stepp;