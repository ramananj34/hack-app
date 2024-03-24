'use client'



import React, { useState } from 'react';

export default function Results({ question, answers }) {
    const clickDelete = () => {
        console.log("heyyyy");
    };
    return(
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


        
    );
    

}