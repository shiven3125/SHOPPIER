"use client";
import React from "react";

import "./login.css";

export default function login() {
  return (
    <div className="login">
      <div className="up">
        <div className="new">
          <div className="newtxt">I'm new here</div>
          <input placeholder="First Name" type="text" className="newinp" />
          <input placeholder="Last Name" type="text" className="newinp" />
          <input placeholder="Email Address" type="email" className="newinp" />
          <input placeholder="Password" type="password" className="newinp" />
          <button className="nbtn1">CREATE AN ACCOUNT</button>
        </div>
      </div>
      <div className="down">
        <div className="back">
          <div className="backtxt">Welcome back</div>
          <input placeholder="Enter Email" type="email" className="backinp" />
          <input
            placeholder="Enter Password"
            type="password"
            className="backinp"
          />
          <button className="bbtn2">LOG IN</button>
          <div className="box">
            <label class="container">
              Remember Me?
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>

            <div className="backd">Forgot Password</div>
          </div>
        </div>
      </div>
    </div>
  );
}
