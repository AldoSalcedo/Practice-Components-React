import { Title } from "./components/Title";
import { Buttons } from "./components/Buttons";
import { useState } from "react";

import './styles/App.css'

function App() {
  const [ activeButton, setActiveButton] = useState(null)
  const [isActivebackground, setIsActivebackground] = useState(false)

  const changeBackgroundColor = () => {
    setIsActivebackground(current => !current)
  }

  return (
    <div className="container" style={{backgroundColor: isActivebackground ? activeButton : false}}>
      <Title />
      { activeButton === null &&
      <>
        <Buttons setActiveButton={setActiveButton} />
      </>
      }
      { activeButton !== null &&
      <>
        <div className="buttons">
          <button key={`${activeButton}`} type='button' className={`btn-${activeButton}`} onClick={changeBackgroundColor} >{activeButton}</button>
        </div>
        <div className="return-container">
          <button type='button' onClick={() => setActiveButton(null)} className='btn-back'>Back to Buttons</button>
        </div>
      </>
      }
    </div>
  );
}

export default App;
