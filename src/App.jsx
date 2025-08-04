import { useEffect, useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Title from "./components/Title";
import Enveloper from "./components/Enveloper";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // useEffect(() => {
  //   //async
  //   async function fetchTasks() {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos?_limit=10",
  //       { method: "GET" }
  //     );
  //     const data = await response.json();
  //     setTasks(data);
  //   }
  //   // Se quiser chamar API
  //   fetchTasks();
  // }, []);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onTaskDelete(taskId) {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  }

  function onAddTask(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <Enveloper>
      <Title>Gerenciador de tarefas</Title>
      <AddTask onAddTask={onAddTask} />
      <Tasks
        tasks={tasks}
        onTaskClick={onTaskClick}
        onTaskDelete={onTaskDelete}
      />
    </Enveloper>
  );
}

export default App;
