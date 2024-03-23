import React from "react";
import ExpandableButton from "../components/Expandable-Button";

export default function Home() {


  return (
    <div className="h-screen w-screen bg-white justify-center items-center">
      <div className="drop-shadow-md flex left-0 top-0 h-32 w-screen bg-red-800 justify-center items-center">
        <h1 className="font-serif text-center text-white text-4xl">Colgate Surveys</h1>
      </div>
      <br/>
      <br/>
      <br/>
      <ExpandableButton />
      <br/>
      <br/>
      <ExpandableButton />

    </div>
  );
}
