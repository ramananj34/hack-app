'use client'

import React, { useState, useEffect } from 'react';
import prisma from '../lib/prisma';

export default function Results({ question, answers, qid}) {

    const [data, setData] = useState([]);

    useEffect(() => {
      fetch('http://localhost:3000/api/questions/')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
    }, []);

    const getRandomEmail = () => {
        let data3 = null;
        let a = data.map((questionData, index) => (
            questionData.id == qid ? data3=questionData.AnswerChoices.map(array => array[1]) : data3=null
        ));
        console.log(data3);
    }

    //getRandomEmail();

    const [isDeleted, setIsDeleted] = useState(false);

    const clickDelete = () => {
        async function postJSON(data) {
            try {
              const response = await fetch('http://localhost:3000/api/questions/', {
                method: "DELETE",
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
          postJSON(JSON.stringify(qid));

          setIsDeleted(true);
    };
    return(
        <div>
        {!isDeleted && (
        <div className="bg-slate-300 w-11/12 p-4 pl-5 pr-5 rounded-lg shadow mx-auto" >
            <h2 className="text-black font-bold mb-2">{question}</h2>
            <ul>
                {answers.map((answer, index) => (
                    <li key={index}>{answer[0]} : {answer[1].length}</li>
                ))}
            </ul>
            <div className="relative flex justify-end items-center">
                <div className="w-min p-2 rounded-lg bg-red-800 cursor-pointer" onClick={clickDelete}>
                    <p className="text-white">Delete</p>
                </div>
            </div>
        </div>
        )}
        {isDeleted && (
            <div className="bg-slate-300 w-11/12 p-4 pl-5 pr-5 rounded-lg shadow mx-auto" >
                You have deleted this survey. 
            </div>
        )}
        </div>
        
    );
    

}