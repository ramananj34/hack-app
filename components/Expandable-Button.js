'use client'


import { useState } from 'react';


export default function ExpandableButton() {
  const [expanded, setExpanded] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasSelected, setHasSelected] = useState(false);
  const [isSubmitted, setHasSubmitted] = useState(false);

  const [emailInput, setEmailInput] = useState("");


  const toggleExpanded = () => {
    setExpanded(!expanded);
  };


  const handleInnerClick = (event) => {
    event.stopPropagation();
  };


  const handleOptionChange = (event) => {
    setHasSelected(1);
    setSelectedOption(event.target.value);
  };

  const clickSubmit = () => {
    if (emailInput!="" && hasSelected) {toggleExpanded(); setHasSubmitted(1);}

  };

  if (isSubmitted) {
    return (
        <div className="bg-slate-300 w-11/12 p-4 pl-5 pr-5 rounded-lg shadow mx-auto" onClick={toggleExpanded}>
            <h2 class="text-black font-bold mb-2">Thank you for submitting the survey!</h2>
        </div>
    );
  } else {
    return (
        <div className="bg-slate-300 w-11/12 p-4 pl-5 pr-5 rounded-lg shadow cursor-pointer mx-auto" onClick={toggleExpanded}>
            <h2 class="text-black font-bold mb-2">What do you feel about cutting down the trees in the middle campus?</h2>
        
            {expanded && (
                <div className="relative bg-slate-400 p-4 pl-5 pr-5 rounded-lg cursor-default" onClick={handleInnerClick}>
                    <form>
                        <label for="option1">
                            <input type="radio" id="option1" name="option" value="option1" className="accent-red-800" checked={selectedOption === "option1"} onChange={handleOptionChange}/>
                            <p className="inline-flex">&nbsp;I think it is a good idea!</p>
                        </label>
                        <br/>
    
                        <label for="option2">
                            <input type="radio" id="option2" name="option" value="option2" className="accent-red-800" checked={selectedOption === "option2"} onChange={handleOptionChange}/>
                            <p className="inline-flex">&nbsp;I think it is a bad idea.</p>
                        </label>


                        <br/>
                        <br/>
                        <p>Colgate Email:&nbsp;<input id="email" onChange= {(event)=> setEmailInput(event.target.value)}/></p>
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