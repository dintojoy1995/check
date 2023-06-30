import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import "../css/health.css";
import "../css/style.css";
import Stepp from "./Stepp";

function Members_details({ props }) {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state.data.alldata;
  const [age, setAge] = useState([]);
  const [ageTest,setAgeTest]=useState([]);

  useEffect(() => {
    const data = localStorage.getItem("health_age_details");
    localStorage.setItem("health_stepper", 1);
    if (data) {
      // console.log(data);
      // setAge(JSON.parse(data));
    }
  }, []);

  const funsubmit = (a) => {
    a.preventDefault();
    console.log(age);
    const filter_daughter = Object.entries(age)
      .filter(([key, value]) => key.startsWith("daughter"))
      .map(([key, value]) => value);

    const filter_son = Object.entries(age)
      .filter(([key, value]) => key.startsWith("son"))
      .map(([key, value]) => value);

    const ab = (num) => num + 18 > age.self || num + 18 > age.spouse;
    const result = filter_daughter.some(ab) || filter_son.some(ab);
    const result1 =
      age.self + 18 > age.father ||
      age.self + 18 > age.mother ||
      age.spouse + 18 > age.father ||
      age.spouse + 18 > age.mother;

    if (result) {
      alert("Your kid has to be atleast 18 years younger than you and spouse");
    } else if (result1) {
      alert("Parents have to be atleast 18 years older than you");
    } else {
      const formData = Object.entries(age).map(([relation, Age]) => ({ relation: capitalize(relation.replace(/\d+$/, "")), Age }));
      function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      localStorage.setItem("health_age_details", JSON.stringify(formData));
      navigate("/address_details", { state: { data: { age } } });
    }
  };

  return (
    <>
      <Stepp />
      <div className="health-gender-bx">
        <br />
        <br />
        <h5>Tell us the ages of your family members</h5>
      </div>
      <br />
      <br />
      <form onSubmit={funsubmit}>
        <div className="maindiv-member-details">
          <table align="center" className="table-member-details">
            {data
              .filter((e) => {
                return e.checked == true;
              })
              .map((e, index) => {
                const funchange = (e) => {
                  setAge({ ...age, [e.target.name]: parseInt(e.target.value) });
                };
                return (
                  <tbody key={e.key}>
                    <tr>
                      <td>
                        <img
                          id="health-gender-icon"
                          src={require(`../image/healthicons/${e.image}.png`)}
                        />
                      </td>
                      <td>{e.key}</td>
                      <td>
                        <select
                          name={
                            e.key == "son" || e.key == "daughter"
                              ? e.key_count
                              : e.key
                          }
                          onChange={funchange}
                          required
                        >
                          <option value="">Select age</option>
                          {e.type === "kid"
                            ? [
                                [...Array(11)].map((_, i) => (
                                  <option key={i + 1} value={1}>
                                    {/* if son or daughter age less than 1 year(1-11 months), return 1 year */}
                                    {i + 1} month{i === 0 ? "" : "s"}
                                  </option>
                                )),
                                ...[...Array(30)].map((_, i) => (
                                  <option key={i + 1} value={i + 1}>
                                    {i + 1} year{i === 0 ? "" : "s"}
                                  </option>
                                )),
                              ]
                            : [...Array(83)].map((_, i) => (
                                <option key={i + 18} value={i + 18}>
                                  {i + 18} years
                                </option>
                              ))}
                        </select>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
          </table>
        </div>
        <div className="member-details-next-btn">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            style={{ width: "200px" }}
          >
            Next
          </Button>
        </div>
      </form>
      <br />
    </>
  );
}
export default Members_details;
