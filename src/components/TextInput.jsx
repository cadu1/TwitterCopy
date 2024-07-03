import { useState } from 'react';
import styles from './TextInput.module.css';

export default function TextInput({
  placeholder = "What's new?", 
  maxLength = 125, 
  ...props
}) {
  const [text, setText] = useState('');

  function onTextChange(event) {
    const text = event.target.value;
    setText(text);
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
    </div>
  )
}