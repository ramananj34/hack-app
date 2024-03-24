'use client'

import React, { useState, useEffect } from 'react';
import ExpandableButtonAdd from "../../components/Expandable-Button-Add.js";
import Results from '@/components/Results.js';

export default function Page() {

  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/questions/')
    .then(response => response.json())
    .then(json => setData(json))
    .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/api/authentication/')
    .then(response => response.json())
    .then(json => setData2(json))
    .catch(error => console.error(error));
  }, []);

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
  
  if (usernameInput === data2[0].username && passwordInput === data2[0].password) {
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
        <div>
          <ExpandableButtonAdd />
          <br/>
          <br/>
          {
        data.map((questionData, index) => (
          <div>
            <Results question={questionData.QuestionName} answers={questionData.AnswerChoices} />
            <br/>
            <br/>
          </div>
        ))
      }
        </div>
      )}

      
      


    </div>
    );
  }