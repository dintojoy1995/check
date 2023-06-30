import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import Afterson from "./Afterson";
import Afterdaughter from "./Afterdaughter";
import Members_details from "./Members_details";
import daughter_icon from "../image/healthicons/daughter-icon.png";
import son_icon from "../image/healthicons/son-icon.png";
import mother_icon from "../image/healthicons/mother-icon.png";
import father_icon from "../image/healthicons/father-icon.png";
import "../css/health.css";
import Stepp from "./Stepp";

function Health_plan({ next }) {
  const navigate = useNavigate();
  const [genderflag, setGenderflag] = useState(0);
  const [name1, setName1] = useState("");
  const [daughter_count, setDaughter_count] = useState(0);
  const [son_count, setSon_count] = useState(0);
  const [mother, setMother] = useState([]);
  const [father, setFather] = useState([]);
  const [self, setSelf] = useState([]);
  const [spouse, setSpouse] = useState([]);
  const [daughter, setDaughter] = useState([]);
  const [son, setSon] = useState([]);
  const funmother = (a) => {
    setMother({
      id: a.target.name,
      image: "mother-icon",
      key: a.target.name,
      checked: a.target.checked,
      type: "adult",
    });
  };
  const funfather = (a) => {
    setFather({
      id: a.target.name,
      image: "father-icon",
      key: a.target.name,
      checked: a.target.checked,
      type: "adult",
    });
  };
  const funspouse = (a) => {
    setSpouse({
      id: a.target.name,
      image:
        localStorage.getItem("health_gender") == "male" ? "female-icon" : "male-icon",
      key: a.target.name,
      checked: a.target.checked,
      type: "adult",
    });
  };
  const funself = (a) => {
    setSelf({
      id: a.target.name,
      image:
        localStorage.getItem("health_gender") == "male" ? "male-icon" : "female-icon",
      key: a.target.name,
      checked: a.target.checked,
      type: "adult",
    });
  };
  const inc_son_btn = (a) => {
    a.preventDefault();
    if (daughter_count + son_count >= 4) {
      return;
    }
    const son1 = {
      id: `son${son_count + 1}`,
      image: "son-icon",
      key: `son${son_count + 1}`,
      checked: true,
      type: "kid",
    };
    setSon_count(son_count + 1);
    localStorage.setItem("health_son_count", son_count + 1);
    const incvalue1 = [...son];
    incvalue1.push(son1);
    setSon(incvalue1);
  };
  const dec_son_btn = (a) => {
    a.preventDefault();
    if (son_count > 0) {
      setSon_count(son_count - 1);
      localStorage.setItem("health_son_count", son_count - 1);
      const deletvalue1 = [...son];
      deletvalue1.pop();
      setSon(deletvalue1);
    }
  };
  const inc_dau_btn = (a) => {
    a.preventDefault();
    if (daughter_count + son_count >= 4) {
      return;
    }
    const daughter1 = {
      id: `daughter${daughter_count + 1}`,
      image: "daughter-icon",
      key: `daughter${daughter_count + 1}`,
      checked: true,
      type: "kid",
    };
    setDaughter_count(daughter_count + 1);
    localStorage.setItem("health_daughter_count", daughter_count + 1);
    const incvalue = [...daughter];
    incvalue.push(daughter1);
    setDaughter(incvalue);
  };
  const dec_dau_btn = (a) => {
    a.preventDefault();
    if (daughter_count > 0) {
      setDaughter_count(daughter_count - 1);
      localStorage.setItem("health_daughter_count", daughter_count - 1);
      const deletvalue = [...daughter];
      deletvalue.pop();
      setDaughter(deletvalue);
    }
  };
  const submit = (a) => {
    a.preventDefault();
    if (
      (daughter_count > 0 || son_count > 0) &&
      (!self.checked || self.checked === undefined) &&
      (!spouse.checked || spouse.checked === undefined)
    ) {
      document.getElementById("alert").innerHTML =
        "Please select self or spouse";
    } else if (
      self.checked ||
      spouse.checked ||
      father.checked ||
      mother.checked
    ) {
      const alldata = [{ ...mother }, { ...father }, { ...self }, { ...spouse }];
      alldata.push(...daughter);
      alldata.push(...son);

      console.log("alldata",alldata);
      const formData = {
        daughter_count: daughter_count,
        son_count: son_count,
        daughter: daughter,
        son: son,
        mother: mother,
        father: father,
        spouse: spouse,
        self: self,
      };
      localStorage.setItem("health_plan", JSON.stringify(formData));

      navigate("/members_details", { state: { data: { alldata } } });
    } else {
      document.getElementById("alert").innerHTML =
        "Select one or more members to continue";
    }
  };
  useEffect(() => {
    const data = localStorage.getItem("health_plan");
    localStorage.setItem("health_stepper", 0);
    if (data) {
      setDaughter_count(JSON.parse(data).daughter_count);
      setSon_count(JSON.parse(data).son_count);
      setSon(JSON.parse(data).son);
      setDaughter(JSON.parse(data).daughter);
      setMother(JSON.parse(data).mother);
      setFather(JSON.parse(data).father);
      setSelf(JSON.parse(data).self);
      setSpouse(JSON.parse(data).spouse);
    }

    var localgender = localStorage.getItem("health_gender");
    if (localgender == "male") {
      setName1("Wife");
    } else {
      setName1("Husband");
    }
  }, [genderflag]);
  return (
    <>
      <Stepp />
      <br />
      <div className="health-gender-bx">
        <div className="health-title">
          {" "}
          <h5>Select your gender</h5>
        </div>
        <div className="button-group">
          <ToggleButtonGroup
            type="radio"
            name="options"
            defaultValue={localStorage.getItem("health_gender")}
          >
            <ToggleButton
              id="tbg-radio-1"
              value="male"
              onChange={(e) => {
                localStorage.setItem("health_gender", e.target.value);
                setGenderflag(genderflag + 1);
              }}
            >
              Male
            </ToggleButton>
            <ToggleButton
              id="tbg-radio-2"
              value="female"
              onChange={(e) => {
                localStorage.setItem("health_gender", e.target.value);
                setGenderflag(genderflag + 1);
              }}
            >
              Female
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div>
          <br />
          <h5>Select members you want to insure</h5>
        </div>
        <br />
        <form>
          <div className="health-member-main">
            <div className="health-member-items">
              <input
                className="imagecheckbox"
                type="checkbox"
                id="health-member-cbx5"
                name="self"
                checked={
                  self == undefined || self.checked == false ? false : self.checked
                }
                onChange={funself}
              />
              <label
                htmlFor="health-member-cbx5"
                className="health-member-label"
              >
                <img
                  id="health-gender-icon"
                  src={
                    localStorage.getItem("health_gender") == "male"
                      ? require("../image/healthicons/male-icon.png")
                      : require("../image/healthicons/female-icon.png")
                  }
                  name="self"
                />
                <br />
                <br />
                Self
              </label>
            </div>
            <div id="hh" className="health-member-items">
              <input
                className="imagecheckbox"
                type="checkbox"
                id={`health-member-${name1}`}
                name="spouse"
                checked={
                  spouse == undefined || spouse.checked == false
                    ? false
                    : spouse.checked
                }
                onChange={funspouse}
              />
              <label
                htmlFor={`health-member-${name1}`}
                className="health-member-label"
              >
                <img
                  id="health-gender-icon"
                  src={
                    localStorage.getItem("health_gender") == "male"
                      ? require("../image/healthicons/female-icon.png")
                      : require("../image/healthicons/male-icon.png")
                  }
                  name={name1}
                />
                <br />
                <br />
                {name1}
              </label>
            </div>

            <div className="health-member-items">
              <input
                type="checkbox"
                className="imagecheckbox"
                id="health-member-cbx3"
                disabled={true}
              />
              <label
                htmlFor="health-member-cbx3"
                className="health-member-label"
              >
                <img
                  id="health-gender-icon"
                  src={daughter_icon}
                  name="daughter"
                />
                <br />
                <br />
                Daughter
                {
                  // you.checked || spouse.checked ? (
                  <Afterdaughter
                    dau_count={daughter_count}
                    inc_dau_fun={inc_dau_btn}
                    dec_dau_fun={dec_dau_btn}
                    son_count={son_count}
                  />
                  // ) : ("")
                }
              </label>
            </div>
          </div>
          <br />
          <br />
          <div className="health-member-main">
            <div className="health-member-items">
              <input
                type="checkbox"
                className="imagecheckbox"
                id="health-member-cbx2"
                name="son"
                disabled={true}
              />
              <label
                htmlFor="health-member-cbx2"
                className="health-member-label"
              >
                <img id="health-gender-icon" src={son_icon} />
                <br />
                <br />
                Son
                {
                  // you.checked || spouse.checked ? (
                  <Afterson
                    dau_count={daughter_count}
                    son_count={son_count}
                    inc_son_fun={inc_son_btn}
                    dec_son_fun={dec_son_btn}
                  />
                  // ) : ( ""  )
                }
              </label>
            </div>

            <div className="health-member-items">
              <input
                type="checkbox"
                className="imagecheckbox"
                id="health-member-cbx1"
                name="father"
                checked={father == undefined ? false : father.checked}
                onChange={funfather}
              />
              <label
                htmlFor="health-member-cbx1"
                className="health-member-label"
              >
                <img id="health-gender-icon" src={father_icon} />
                <br />
                <br />
                Father
              </label>
            </div>
            <div className="health-member-items">
              <input
                type="checkbox"
                className="imagecheckbox"
                id="health-member-cbx"
                name="mother"
                checked={mother == undefined ? false : mother.checked}
                onChange={funmother}
              />
              <label
                htmlFor="health-member-cbx"
                className="health-member-label"
              >
                <img id="health-gender-icon" src={mother_icon} />
                <br />
                <br />
                Mother
              </label>
            </div>
          </div>
          <br />
          <span>
            <h6 style={{ color: "red" }} id="alert"></h6>
          </span>
          <br />
          <br />
          <Button
            className="health-plan-btn"
            onClick={submit}
            variant="primary"
            size="lg"
            style={{ width: "200px" }}
          >
            Next
          </Button>
        </form>
      </div>
    </>
  );
}
export default Health_plan;
