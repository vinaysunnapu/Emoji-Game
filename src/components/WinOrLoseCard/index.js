import './index.css'

const WinOrLoseCard = props => {
  const {lose, score, playAgain} = props
  const win = score === 12

  const winOrlose = !win ? 'You Lose' : 'You Won'
  const imgUrl = !win
    ? 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

  const onClickplayAgain = () => {
    playAgain()
  }

  return (
    <div className="result-card">
      <div className="score-card">
        <h1>{winOrlose}</h1>
        <p>Best Score</p>
        <p>{score}/12</p>
        <button
          type="button"
          className="play-again-button"
          onClick={onClickplayAgain}
        >
          Play Again
        </button>
      </div>
      <img src={imgUrl} alt="win or lose" className="image-style" />
    </div>
  )
}

export default WinOrLoseCard
