import React from "react";

function QuestionItem({ question, onDeleteItem }) {
  const { id, prompt, answers, correctIndex } = question;

  let options 
  if(answers && answers.map)
  {options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));}


  function handleDeleteClick() {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    })
    .then((response) => response.json())
    .then(() => onDeleteItem(question));
  }

  

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDeleteClick} >Delete Question</button>
    </li>
  );
}

export default QuestionItem;
