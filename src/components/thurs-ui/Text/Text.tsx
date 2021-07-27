import './text.css'

interface TextProps {
  text: string
}

export const Text = ({ text }: TextProps) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}
