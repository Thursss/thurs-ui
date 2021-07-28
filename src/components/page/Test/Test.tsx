import React, { useState } from 'react'

export const Test: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <button
      onClick={() => {
        setCount(count + 1)
      }}
    >
      {count}
    </button>
  )
}
