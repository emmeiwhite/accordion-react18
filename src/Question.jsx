import { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

export default function Question({ title, info }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button
          className="question-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>

      {isOpen && <p>{info}</p>}
    </article>
  )
}
