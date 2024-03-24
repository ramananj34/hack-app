'use client'


import { useState } from 'react';


export default function ExpandableButton() {
  const [expanded, setExpanded] = useState(false);
  const [isSubmitted, setHasSubmitted] = useState(false);

  const [question, setQuestions] = useState("");

  const [numAdditionalInputs, setNumAdditionalInputs] = useState(0);
  const [additionalInputs, setAdditionalInputs] = useState([]);

  const [questionArray, setQuestionArray] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("");

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };


  const handleInnerClick = (event) => {
    event.stopPropagation();
  };


  const handleNumInputsChange = (event) => {

    const num = parseInt(event.target.value);
    if(additionalInputs + num < 0 ){return} 
    setNumAdditionalInputs(num);
    setAdditionalInputs(Array.from({ length: num }, (_, index) => index + 1));
  };

  const handleAddQuestion = () => {
    if (currentQuestion.trim() !== "") {
      setQuestions([...questions, { question: currentQuestion, options: [] }]);
      setCurrentQuestion("");
      setNumAdditionalInputs(0);
      setAdditionalInputs([]);
      toggleExpanded();
      setHasSubmitted(true);
    }
  };

  const handleOptionChange = (index, event) => {
    const newQuestions = [...questions];
    newQuestions[index].options[event.target.dataset.index] = event.target.value;
    setQuestions(newQuestions);
  };

  const handleQuestionChange = (event) => {
    setCurrentQuestion(event.target.value);
  };

  const clickSubmit = () => {
    if (numAdditionalInputs > 0 && question !== "") {
      // Create an array to store the options
      const options = [];
      console.log(additionalInputs);     
      // Iterate over the additionalInputs to collect the options
      additionalInputs.forEach((index) => {
        const optionInput = document.getElementById(`option-${index}`);

        if (optionInput) {
          console.log("input");
          console.log(optionInput.value,"value");

          options.push(optionInput.value);
        }
      });
  
      // Create an object to represent the question and its options
      const newQuestion = {
        question: question,
        options: options
      };
      console.log(newQuestion);

      const obj = JSON.stringify(newQuestion);
      async function postJSON(data) {
        try {
          const response = await fetch('/api/questions/', {
            method: "POST",
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
      postJSON(obj);

  
      // Add the new question to the questionArray
      setQuestionArray([...questionArray, newQuestion]);
  
      // Reset form state
      setQuestions("");
      setNumAdditionalInputs(0);
      setAdditionalInputs([]);
  
      // Toggle expansion and set submission state
      toggleExpanded();
      setHasSubmitted(true);


    }
  };


    return (
        <div className="bg-slate-300 w-11/12 p-4 pl-5 pr-5 rounded-lg shadow cursor-pointer mx-auto" onClick={toggleExpanded}>
            <h2 className="text-black font-bold mb-2">Add New Survey</h2>
        
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
                              <p>Option {index}: &nbsp;<input type="text" id={`option-${index}`} /></p>
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
