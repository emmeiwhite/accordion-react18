import { useState } from 'react'
import Question from './Question'
export default function QuestionsList({ questions }) {
  const [currentSelectedIndex, setCurrentSelectedIndex] = useState(-1)

  const handleClick = id => {
    console.log(id)
    if (id !== currentSelectedIndex) {
      setCurrentSelectedIndex(id)
    } else {
      setCurrentSelectedIndex(-1)
    }
  }
  return (
    <section className="container">
      {questions.map((question, index) => {
        return (
          <Question
            {...question}
            key={question.id}
            currentIndex={currentSelectedIndex}
            handleClick={handleClick}
          />
        )
      })}
    </section>
  )
}
