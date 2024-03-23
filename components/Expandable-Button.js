'use client'

import { useState } from 'react';

export default function ExpandableButton() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (

    <div className="bg-slate-300 w-11/12 p-4 rounded-lg shadow cursor-pointer mx-auto" onClick={toggleExpanded}>
        <h2 class="text-black font-bold mb-2">What do you feel about cutting down the trees in the middle campus?</h2>
        {expanded && ( 
        <div class="content">
          Hello World!
        </div>
        )}
      </div>
  );
}