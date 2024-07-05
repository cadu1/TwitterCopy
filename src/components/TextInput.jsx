import { useState } from 'react';
import styles from './TextInput.module.css';

export default function TextInput({
  placeholder = "What's new?", 
  maxLength = 125, 
  ...props
}) {
  const [text, setText] = useState('');
  const [tweetList, setTweetList] = useState([]);

  function onTextChange(event) {
    const text = event.target.value;
    setText(text);
  }

  function sendTweet() {
    setTweetList([...tweetList, text]);
    setText('');
  }

  return (
    <div>
      <textarea 
        placeholder={placeholder} 
        maxLength={maxLength} 
        className={styles.input}
        onChange={onTextChange}
        value={text}
        {...props} 
      />
      <p>{text.length} / {maxLength}</p>
      <button onClick={sendTweet}>Send</button>
      {tweetList.map(tweet => {
        return (
          <p>{tweet}</p>
        )
      })}
    </div>
  )
}