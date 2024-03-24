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
  
  return(
      <div className="h-screen w-screen bg-white justify-center items-center">
      <div className="drop-shadow-md flex left-0 top-0 h-32 w-screen bg-red-800 justify-center items-center">
      <h1 className="font-serif text-center text-white text-4xl">Colgate Surveys Admin</h1>
      </div>
      <br/>

      {!isAdmin && (
        <div className="relative bg-slate-400 p-4 pl-5 pr-5 rounded-lg cursor-default">
          <form>
            <p>CUsername:&nbsp;<input id="username" onChange={handleUsernameChange}/></p>
            <p>Password:&nbsp;<input id="password" onChange={handlePasswordChange}/></p>
          </form>
        </div>
      )}

      {isAdmin && (
        <ExpandableButtonAdd />
      )}



    </div>
    );
  }