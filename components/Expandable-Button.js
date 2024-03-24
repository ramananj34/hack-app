'use client'


import React, { useState } from 'react';

export default function ExpandableButton({ question, answers, id }) {
  const [expanded, setExpanded] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasSelected, setHasSelected] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const handleInnerClick = (event) => {
    event.stopPropagation();
  };

  const handleOptionChange = (event) => {
    setHasSelected(true);
    setSelectedOption(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmailInput(event.target.value);
  };

  const clickSubmit = () => {
    if (emailInput !== "" && hasSelected) {
      toggleExpanded();
      setIsSubmitted(true);
      const sendData = {
        "id":id,
        "emailInput":emailInput,
        "selectedOption":selectedOption
      }
      postJSON(JSON.stringify(sendData));
    }
  };
  async function postJSON(data) {
    try {
      const response = await fetch('http://localhost:3000/api/questions/', {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      });

      const result = await response.json();
      console.log("Sucsess:", result);
    } catch (error) {
      console.error("Error: ", error);
    }
  }
  if (isSubmitted) {
    return (
      <div className="bg-green-200 w-11/12 p-4 pl-5 pr-5 rounded-lg shadow mx-auto" onClick={toggleExpanded}>
        <h2 className="text-black font-bold mb-2">Thank you for submitting the survey!</h2>
      </div>
    );
  } else {
    return (
      <div className="bg-slate-300 w-11/12 p-4 pl-5 pr-5 rounded-lg shadow cursor-pointer mx-auto" onClick={toggleExpanded}>
        <h2 className="text-black font-bold mb-2">{question}</h2>
        {expanded && (
          <div className="relative bg-slate-400 p-4 pl-5 pr-5 rounded-lg cursor-default" onClick={handleInnerClick}>
            <form>
              {answers.map((answer, index) => (
                <label key={index} htmlFor={`option${index + 1}`}>
                  <input type="radio" id={`option${index + 1}`} name="option" value={answer} className="accent-red-800" checked={selectedOption === answer} onChange={handleOptionChange} />
                  <span className="inline-flex">&nbsp;{answer}</span>
                  <br/>
                </label>
              ))}
              <br/>
              <p>Colgate Email:&nbsp;<input id="email" onChange={handleEmailChange}/></p>
              <br />
              <div className="absolute w-min p-2 rounded-lg bg-red-800 bottom-2 right-2 cursor-pointer" onClick={clickSubmit}>
                <p className="text-white">Submit</p>
              </div>
            </form>
          </div>
        )}
      </div>
    );
  }
}