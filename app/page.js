'use client'

import ExpandableButton from "../components/Expandable-Button";
import React, { useState, useEffect } from 'react';

export default function Home() {
  // QUERY THE DATABASE FOR ALL THE QUESTIONS

    const [data, setData] = useState([]);

    useEffect(() => {
      fetch('http://localhost:3000/api/questions/')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
    }, []);


  return (
    <div className="h-screen w-screen bg-white justify-center items-center">
      <div className="drop-shadow-md flex left-0 top-0 h-32 w-screen bg-red-800 justify-center items-center">
        <h1 className="font-serif text-center text-white text-4xl">Colgate Surveys</h1>
      </div>
      <a href = "/admin">
        <div className="absolute w-min p-2 rounded-lg bg-slate-400 top-4 right-4 cursor-pointer">
          <p className="text-white">Admin</p>
        </div>
      </a>
      <br/>
      <br/>
      {
        data.map((questionData, index) => (
          <div key={questionData.id}>
            <ExpandableButton key={questionData.id} question={questionData.QuestionName} answers={questionData.AnswerChoices.map(array => array[0])} id={questionData.id} />
            <br/>
            <br/>
          </div>
        ))
      }
    </div>
  );
}
