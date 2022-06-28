import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TransferFunds.css";

function TransferFunds(props) {
  const [data, setData] = useState({});
  const [success, setSuccess] = useState(false);

  const [depositForm, setDepositForm] = useState();
  const navigate = useNavigate();

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const backClick = e => {
    e.preventDefault();
    navigate("/userAccoutDetails");
  };
  const continueClicked = e => {
    e.preventDefault();
    //if successfully insered into db , success alert a true else false.
    setSuccess(true);
  };

  return (
    <div className="container login">
      <div className="loginTitle mb-3">Transfer Details</div>
      <br />

      <br />
      <div className="row">
        <div className="col s12 yellow ">
          <div className="form-container">
            <form className="form-horizontal">
              <div className="form-group row">
                <label htmlFor="loginName" className="control-label col-sm-3">
                  Action
                </label>
                <div className="col-sm-6">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Choose an action</option>
                    <option value="1">Deposit</option>
                    <option value="2">Withdrawal</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="loginName" className="control-label col-sm-3">
                  Amount
                </label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    name="loginName"
                    placeholder="AED"
                    value={data.loginName}
                    onChange={e => handleChange(e)}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="password" className="control-label col-sm-3">
                  Description
                </label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    name="password"
                    placeholder=""
                    value={data.password}
                    onChange={e => handleChange(e)}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="password" className="control-label col-sm-3">
                  Transfer Type
                </label>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    name=""
                    placeholder=""
                    value={data.password}
                    onChange={e => handleChange(e)}
                  />
                </div>
              </div>

              <button
                className="btn btn-primary button1"
                type="submit"
                onClick={e => continueClicked(e)}
              >
                Continue
              </button>
              <button
                className="btn btn-primary button2"
                type="submit"
                onClick={e => backClick(e)}
              >
                Back
              </button>
              <br />
              <br />
            </form>
            {success ? (
              <div class="alert alert-success" role="alert">
                Transaction Successful!
              </div>
            ) : (
              <div class="alert alert-danger" role="alert">
                Transaction Failed. Please try again!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransferFunds;
