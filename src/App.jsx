// import Accordion from "./components/Accordion";
import QuestionsList from './QuestionsList'
import data from './data'

const App = () => {
  return (
    <main>
      {/* <Accordion /> This was a question implementation */}
      <QuestionsList questions={data} />
    </main>
  )
}
export default App
