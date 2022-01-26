import React, {useEffect, useState} from "react";
import Input from "../../Component/Input/Input";
import Display from "./Display";
import "./LoginForm.css";

export const LoginForm = () => {
  const [show, setshow] = useState(false);
  const [profile, setProfile] = useState({});
  const [data, setdata] = useState({
    name: "",
    city: "",
    state: "",
    contry: "",
    email: "",
    github: "",
    photo: "",
    password: "",
  });
  const _Onchange = (e: any) => {
    const {name, value} = e.target;
    setdata({...data, [name]: value});
  };
  const OnSubmit = () => {
    setProfile(data);
    setshow(true);
  };
  const OnReset = () => {
    setdata({
      name: "",
      city: "",
      state: "",
      contry: "",
      email: "",
      github: "",
      photo: "",
      password: "",
    });
  };
  return (
    <>
      <div className="form-wraper">
        <div className="input">
          <Input
            type="text"
            value={data.name}
            placeholder="Enter Name"
            label="Name :-"
            name="name"
            onChange={(e: any) => _Onchange(e)}
          />
        </div>
        <div className="Drop-down-list">
          <label form="City">City :-</label>
          <select name="city" id="City" onChange={(e: any) => _Onchange(e)}>
            <option value="Indore">Indore</option>
            <option value="Bhopal">Bhopal</option>
            <option value="Ujjain">Ujjain</option>
            <option value="Jabalpur">Jabalpur</option>
          </select>
        </div>
        <div className="Drop-down-list">
          <label form="state">State :-</label>
          <select name="state" id="State" onChange={(e: any) => _Onchange(e)}>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Delhi">Delhi</option>
            <option value="Goa">Goa</option>
          </select>
        </div>
        <div className="Drop-down-list">
          <label form="contry">Contry :-</label>
          <select name="contry" id="Contry" onChange={(e: any) => _Onchange(e)}>
            <option value="India">India</option>
            <option value="Australia">Australia</option>
            <option value="England">England</option>
          </select>
        </div>
        <div className="input">
          <Input
            type="email"
            placeholder="Enter Email"
            label="Email :-"
            name="email"
            onChange={(e: any) => _Onchange(e)}
          />
        </div>
        <div className="input">
          <Input
            type="text"
            placeholder="Enter Email"
            label="Github URL :-"
            name="github"
            onChange={(e: any) => _Onchange(e)}
          />
        </div>
        <div className="input">
          <Input
            type="file"
            placeholder="Select Photo"
            label="Photo :-"
            name="photo"
            onChange={(e: any) => _Onchange(e)}
          />
        </div>
        <div className="input">
          <Input
            type="password"
            placeholder="Enter Password"
            label="Password :-"
            name="password"
            onChange={(e: any) => _Onchange(e)}
          />
        </div>
        <div className="input">
          <button onClick={OnSubmit}>Submit</button>
          <button onClick={OnReset}>Reset</button>
        </div>
        <div className="input">{show ? <Display data={profile} /> : null}</div>
      </div>
      <div></div>
    </>
  );
};
export default LoginForm;
