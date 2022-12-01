/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

import './index.css'

import Navbar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    condition: true,

    score: 0,
    topScore: 0,
    emojiList: [],
    lose: true,
  }

  playAgainFunction = () => {
    const {score, topScore} = this.state
    this.setState({
      condition: true,
      score: 0,
      emojiList: [],
      lose: true,
    })
    if (topScore < score) {
      this.setState({topScore: score})
    }
  }

  onClickEmojiChange = id => {
    const {emojiList, topScore, score} = this.state

    if (emojiList.includes(id)) {
      this.setState(prevState => ({
        condition: !prevState.condition,
        lose: !prevState.lose,
      }))
    } else {
      this.setState(prevState => ({
        emojiList: [...prevState.emojiList, id],
        score: prevState.score + 1,
      }))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {condition, emojiList, score, topScore, lose} = this.state
    const shuffledList = this.shuffledEmojisList()

    return (
      <div className="emoji-game-container">
        <Navbar score={score} topScore={topScore} lose={lose} />
        {condition ? (
          <ul className="emoji-card-container">
            {shuffledList.map(eachList => (
              <EmojiCard
                shuffleList={eachList}
                onClickEmojiChange={this.onClickEmojiChange}
                key={eachList.id}
                emojiName={eachList.emojiName}
              />
            ))}
          </ul>
        ) : (
          <WinOrLoseCard
            lose={lose}
            score={score}
            playAgain={this.playAgainFunction}
          />
        )}
      </div>
    )
  }
}
export default EmojiGame
