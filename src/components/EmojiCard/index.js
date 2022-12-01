import './index.css'

const EmojiCard = props => {
  const {shuffleList, onClickEmojiChange, emojiName} = props
  const {id, emojiUrl} = shuffleList

  const onClickEmoji = () => {
    onClickEmojiChange(id)
  }

  return (
    <li className="list_item">
      <button type="button" className="emoji-button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} />
        {id}
      </button>
    </li>
  )
}
export default EmojiCard
