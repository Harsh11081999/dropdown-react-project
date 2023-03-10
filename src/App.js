import React, { useState } from 'react'
import "./App.css"
import { Dropdown_Options } from './common/data/dropdown';
import Dropdown from './components/dropdown';
const App =()=>{

  const  [selectedOption,setSelectedOption] = useState(Dropdown_Options[0]);
  return (
    <div className='app'>
      <Dropdown 
       options={Dropdown_Options}
       selectedOption={selectedOption}
       setSelectedOption={setSelectedOption}
       label={"Why do you like the coding ninjas"}
      />
    </div>
  )
}
export default App;