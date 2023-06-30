import React, { useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/health.css";
import male_icon from "../image/healthicons/male-icon.png";
import female_icon from "../image/healthicons/female-icon.png";
import axios from "axios";

function Health(props) {


useEffect(() => {
axios.post("http://localhost:5000/authtest")
.then((result) => {
  console.log(result.data);
  localStorage.setItem('Auth-key',result.data.token);
})
      .catch((error) => {
        console.error(error);
      });
}, [])



  return (
    <>
      <div>
        <br />
        <h2 className="health-title">
          Best Health Insurance plans. Customized for you.
        </h2>
        <br />
        <div className="health-gender-title">
          <Card className="health-card">
            <Card.Header>Select Your gender</Card.Header>
            <Card.Body>
              <Card.Text>
                <div className="health-gender-main">
                  <a
                    href="./health_plan"
                    onClick={() => {
                      localStorage.setItem("health_gender", "male");
                    }}
                  >
                    <div className="health-gender-button">
                      <img id="health-gender-icon" src={male_icon} />
                      <br />
                      <br />
                      Male
                    </div>
                  </a>
                  <a
                    href="./health_plan"
                    onClick={() => {
                      localStorage.setItem("health_gender", "female");
                    }}
                  >
                    <div className="health-gender-button">
                      <img id="health-gender-icon" src={female_icon} />
                      <br />
                      <br />
                      Female
                    </div>
                  </a>
                </div>
              </Card.Text>
              <Button
                variant="primary"
                href="./health_plan"
                onClick={() => {
                  localStorage.setItem("health_gender", "male");
                }}
              >
                Get Started
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Health;
