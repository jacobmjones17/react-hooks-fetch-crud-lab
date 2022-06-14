import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm /> : <QuestionList />}
    </main>
  );
}

export default App;


// //Action Plan:
// 1) In your QuestionList component we should render QuestionItem component
// A) using props to pass down state from App component to QuestionList component
// B) then destructure the props in QuestionItem to render our data in the QuestionItem component
