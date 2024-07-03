import styles from './TextInput.module.css';

export default function TextInput({
  placeholder = "What's new?", 
  maxLength = 125, 
  ...props
}) {
  return (
    <div>
      <textarea 
        placeholder={placeholder} 
        maxLength={maxLength} 
        {...props} 
        className={styles.input}
      >
      </textarea>
    </div>
  )
}