import './Game.css';

export const GameCircle = ({ id, children, className, onCircleClicked }) => {

  return (
    <div className={`gamecircle ${className} `} onClick={() => onCircleClicked(id)}>
      { children }
    </div>
  )
}