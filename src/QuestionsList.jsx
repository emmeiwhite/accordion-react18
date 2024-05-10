import Question from './Question'
export default function QuestionsList({ questions }) {
  return (
    <section className="container">
      {questions.map(question => {
        return (
          <Question
            {...question}
            id={question.id}
          />
        )
      })}
    </section>
  )
}
