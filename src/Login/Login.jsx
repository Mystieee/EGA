import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import "./Login.css";

function Login(props) {
  const [data, setData] = useState({});
  const [validUser, setValidUser] = useState();
  const navigate = useNavigate();

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitLoginForm = e => {
    e.preventDefault();
    validateUser(data.loginName, data.password);

    if (validUser) {
      navigate("/userAccoutDetails", { state: { loginName: data.loginName } });
    }
  };

  const validateUser = async (loginName, password) => {
    try {
      const response = await axios
        .get(`http://localhost:9091/api/users/find?loginName=${loginName}`)
        .then(response => {
          const data = response.data;
          const db_loginname = data.loginName;
          const db_password = data.password;

          console.log("DB", db_loginname, db_password);
          if (loginName !== "" && db_loginname === loginName) {
            console.log("login name matches");
            if (password !== "" && db_password === password) {
              console.log("paswword matches");
              setValidUser(true);
            }
          }
        })
        .catch(error => {
          setValidUser(false);
          if (error.response) {
            console.log("Error in Response", error.response.data);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error Message: " + error);
          }
        });
    } catch (err) {
      setValidUser(false);
      console.log("err");
    }
  };
  return (
    <div className="container login">
      <div className="loginTitle mb-3">Welcome to Emirates Global Bank</div>
      <br />
      <div className="row">
        <div className="col s12 yellow ">
          <div className="form-container">
            <form
              className="form-horizontal"
              onSubmit={data1 => submitLoginForm(data1)}
            >
              <div className="form-group row">
                <label htmlFor="loginName" className="control-label col-sm-3">
                  Login Name
                </label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    name="loginName"
                    placeholder="john.doe"
                    value={data.loginName}
                    onChange={e => handleChange(e)}
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="password" className="control-label col-sm-3">
                  Password
                </label>
                <div className="col-sm-6">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="**********"
                    value={data.password}
                    onChange={e => handleChange(e)}
                    required
                  />
                </div>
              </div>

              <button className="btn btn-primary loginButton" type="submit">
                Login
              </button>
              <br />
              <br />
              <Link to="/register">
                <span className="text-uppercase registerText">
                  Register for online banking
                </span>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
