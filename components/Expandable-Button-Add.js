'use client'


import { useState } from 'react';


export default function ExpandableButton() {
  const [expanded, setExpanded] = useState(false);
  const [isSubmitted, setHasSubmitted] = useState(false);

  const [question, setQuestions] = useState("");

  const [numAdditionalInputs, setNumAdditionalInputs] = useState(0);
  const [additionalInputs, setAdditionalInputs] = useState([]);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };


  const handleInnerClick = (event) => {
    event.stopPropagation();
  };


  const handleNumInputsChange = (event) => {
    const num = parseInt(event.target.value);
    setNumAdditionalInputs(num);
    setAdditionalInputs(Array.from({ length: num }, (_, index) => index + 1));
  };

  const clickSubmit = () => {
    if (numAdditionalInputs > 0 && question!="") {toggleExpanded(); setHasSubmitted(1);}

  };


    return (
        <div className="bg-slate-300 w-11/12 p-4 pl-5 pr-5 rounded-lg shadow cursor-pointer mx-auto" onClick={toggleExpanded}>
            <h2 class="text-black font-bold mb-2">Add New Survey</h2>
        
            {expanded && (
                <div className="relative bg-slate-400 p-4 pl-5 pr-5 rounded-lg cursor-default" onClick={handleInnerClick}>
                    <form>
                        
                        
                        <p>Question&nbsp;<input id="question" onChange= {(event)=> setQuestions(event.target.value)}/></p>
                        <br />
                        <p>How Many Choices?&nbsp;<input id="numChoices" type="number" value={numAdditionalInputs} onChange={handleNumInputsChange}/></p>
                        <br />

                        <div>
                            {additionalInputs.map((index) => (
                            <div key={index}>
                                <p>Option {index}: &nbsp;<input type="text" /></p>
                                <br />

                            </div>
                            ))}
                        </div>
    
                        <div className="absolute w-min p-2 rounded-lg bg-red-800 bottom-2 right-2 cursor-pointer" onClick={clickSubmit}>
                            <p className="text-white">Confirm</p>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
 }
