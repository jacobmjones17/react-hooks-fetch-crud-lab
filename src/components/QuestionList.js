import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({}) {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((response) => response.json())
      .then((questions) => setQuestions(questions))
  }, []) 
  
  function handleDeleteItem(deletedQuestion) {
    const updatedQuestions = questions.filter((question) => question.id !==deletedQuestion.id);
    setQuestions(updatedQuestions)
  }


  const questionItems = questions.map((question) => (
    <QuestionItem 
    key={question.id}
    question={question}
    onDeleteItem={handleDeleteItem}
    />
  ))


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul> {questionItems} </ul>
    </section>
  );
}

export default QuestionList;
