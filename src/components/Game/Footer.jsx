import './Game.css';

import { GAME_STATE_PLAYING } from '../../Constants';

export const Footer = ({ resetGame, suggestClick, gameState }) => {
  return (
    <div className="panel_footer">
    {
      gameState === GAME_STATE_PLAYING &&
      <button className='footer_button' onClick={suggestClick}>Suggest</button>
    }
    {
      gameState !== GAME_STATE_PLAYING &&
      <button type='button' className='footer_button' onClick={resetGame} >New Game</button>
    }
    </div>
  )
}