'use client'

import React, { useState } from 'react';
import ExpandableButtonAdd from "../../components/Expandable-Button-Add.js";

export default function Page() {

const [isAdmin, setIsAdmin] = useState(false);
const [usernameInput, setUsernameInput] = useState("");
const [passwordInput, setPasswordInput] = useState("");

const handleUsernameChange = (event) => {
  setUsernameInput(event.target.value);
};

const handlePasswordChange = (event) => {
  setPasswordInput(event.target.value);
};
const clickLogin = () => {
  if (usernameInput == "admin" && passwordInput== "admin") {
    setIsAdmin(true);
  }
};
  
  return(
      <div className="h-screen w-screen bg-white justify-center items-center">
      <div className="drop-shadow-md flex left-0 top-0 h-32 w-screen bg-red-800 justify-center items-center">
      <h1 className="font-serif text-center text-white text-4xl">Colgate Surveys Admin</h1>
      <a href = "/">
        <div className="absolute w-min p-2 rounded-lg bg-slate-400 top-4 right-4 cursor-pointer">
          <p className="text-white">Back</p>
        </div>
      </a>
      </div>
      <br/>

      {!isAdmin && (
        <div className="flex justify-center">
          <div className="relative bg-slate-400 w-3/6 p-4 pl-5 pr-5 rounded-lg cursor-default items-center">
            <form>
              <p>Username:&nbsp;<input id="username" onChange={handleUsernameChange}/></p>
              <br/>
              <p>Password:&nbsp;<input type="password" id="password" onChange={handlePasswordChange}/></p>
            </form>
            
              <div className="absolute w-min p-2 top-8 right-8 rounded-lg bg-red-800 cursor-pointer" onClick={clickLogin}>
                <p className="text-white">Login</p>
              </div>
          </div>
        </div>
      )}

      {isAdmin && (
        <ExpandableButtonAdd />
      )}



    </div>
    );
  }