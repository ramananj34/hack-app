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
            <form>
                <label for="option1">
                    <input type="checkbox" id="option1" name="option" value="option1" />
                    I think it is a good idea!
                </label>
                <br/>
  
                <label for="option2">
                    <input type="checkbox" id="option2" name="option" value="option2" />
                    I think it is a bad idea.
                </label>
                <br/>
                <p>Colgate Email: </p>
                <br/>
                <input />
                <br />
  
                <input type="submit" value="Submit" />
            </form>
        )}
      </div>
  );
}