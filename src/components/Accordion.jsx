import { useState } from "react";
import data from "./../data";
import AccordionItem from "./AccordionItem";

export default function Accordion() {
  const [questions, setQuestions] = useState(data);

  const handleToggle = (id) => {
    const updatedQuestions = questions.map((question) => {
      if (question.id === id) {
        return { ...question, isOpen: !question.isOpen };
      }
      return { ...question, isOpen: false };
    });

    setQuestions(updatedQuestions);
  };
  const renderAccordions = questions.map((question) => {
    return (
      <AccordionItem
        {...question}
        key={question.id}
        handleToggle={handleToggle}
      />
    );
  });
  return <div>{renderAccordions}</div>;
}
