import '../styles/Buttons.css'

export const Buttons = ({setActiveButton}) => {

  const colors = ['pink', 'yellow', 'orange', 'red', 'green', 'blue']
  const mapColors = colors.map((color) => { 
    return (
      <>
        <button key={`${color}`} onClick={() => setActiveButton(color)} className={`btn-${color}`}>{color}</button>
      </>
    )
  })

  return (
    <>
      <div className="buttons">
        {mapColors}
      </div>
    </>
  )
}