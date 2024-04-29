import { useState } from "react";
import data from "./../data";
import AccordionItem from "./AccordionItem";

export default function Accordion() {
  const [questions, setQuestions] = useState(data);

  const renderAccordions = questions.map((question) => {
    return (
      <AccordionItem
        {...question}
        key={question.id}
      />
    );
  });
  return <div>{renderAccordions}</div>;
}
