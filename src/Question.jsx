import { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

export default function Question({ id, title, info, currentIndex, handleClick }) {
  //   const [isOpen, setIsOpen] = useState(false)
  const isOpen = id === currentIndex
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button
          className="question-btn"
          onClick={() => handleClick(id)}
        >
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>

      {isOpen && <p>{info}</p>}
    </article>
  )
}
