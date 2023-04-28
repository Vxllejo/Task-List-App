import "./App.css";
import TasksForm from "./app/components/TaskForm";
import TasksList from "./app/components/TasksList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App bg-zinc-900 h-screen text-white flex items-center justify-center">
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<TasksList />} />
              <Route path="/create-task" element={<TasksForm />} />
              <Route path="/edit-task/:id" element={<TasksForm />} />
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
