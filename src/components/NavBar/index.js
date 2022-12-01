import './index.css'

const Navbar = props => {
  const {score, topScore, lose} = props
  const display = !lose ? 'display-card' : ''

  return (
    <div className="navbar-container">
      <div className="heading-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      <div className={`score-container ${display}`}>
        <p>Score: {score}</p>
        <p>Top Score: {topScore}</p>
      </div>
    </div>
  )
}

export default Navbar
