import React from "react";
import ExpandableButton from "../components/Expandable-Button";

export default function Home() {
  // QUERY THE DATABASE FOR ALL THE QUESTIONS
  

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
      <br/>
      <ExpandableButton question="What do you feel about cutting down the trees in the middle campus?" answers={['I think it is a good idea!', 'I think it is a bad idea.']} />
      <br/>
      <br/>
      <ExpandableButton question="What do you feel about cutting down the trees in the middle campus?" answers={['I think it is a good idea!', 'I think it is a bad idea.']} />

    </div>
  );
}
