import { Title } from "./components/Title"
import { Buttons } from "./components/Buttons"
import { useState } from "react"
import { DisplayImage } from './components/DisplayImage'
import { List } from "./components/List"
import { GameBoard } from "./components/Game/GameBoard"

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
          <button style={{cursor: 'pointer'}} key={`${activeButton}`} type='button' className={`btn-${activeButton}`} onClick={changeBackgroundColor} >{activeButton}</button>
        </div>
      { activeButton === 'pink' &&
        <div className="img" style={{display: isActivebackground ? 'flex' : 'none' }}>
          <DisplayImage />
        </div>
      }
      { activeButton === 'yellow' &&
        <div className="input-container" style={{display: isActivebackground ? 'flex' : 'none' }}>
        <List />
        </div>
      }
      { activeButton === 'orange' &&
        <div className="gameboard-container" style={{display: isActivebackground ? 'flex' : 'none' }}>
        <GameBoard />
        </div>
      }
        <div className="return-container">
          <button style={{cursor: 'pointer'}} type='button' onClick={() => setActiveButton(null)} className='btn-back'>Back to Buttons</button>
        </div>
      </>
      }
    </div>
  );
}

export default App;
