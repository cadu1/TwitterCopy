export default function TextInput({
  placeholder = "What's new?", 
  maxLength = 125, 
  ...props
}) {
  return (
    <div>
      <textarea placeholder={placeholder} maxLength={maxLength} {...props}></textarea>
    </div>
  )
}