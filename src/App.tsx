import TaskTag, { Task } from "./components/Task";

export default function App() {
  let tasks: Task[] = [
    new Task("Create todo-react-app"),
    new Task("Make a react project"),
    new Task("Create a class with titles"),
  ];

  return (
    <div className="App">
      <h1 className="top">Active tasks: {Task.quantity / 2}</h1>
      {/**because there is copy consctuctor who call for quaintity setter and whats why this variable doubles itself
       * maybe it easier to change getter and add division there
       */}
      {tasks.map((task) => (
        <TaskTag task={task} key={task.id}></TaskTag>
      ))}
    </div>
  );
}
