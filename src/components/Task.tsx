interface ITask {
  id: number;
  title: string;
  isDone: boolean;
}
export class Task implements ITask {
  id: number;
  title: string;
  isDone: boolean;
  private static _quantity = 0;
  constructor(title: string, isDone: boolean = false) {
    this.id = Task.quantity;
    Task.quantity = 1;
    this.title = title;
    this.isDone = isDone;
  }

  static get quantity(): number {
    return Task._quantity;
  }
  static set quantity(incr: number) {
    Task._quantity += incr;
  }
}

interface TaskTagProps {
  task: Task;
}

export default function TaskTag({ task, ...props }: TaskTagProps) {
  const ActionButton = () => {
    return (
      <div className="action-btn">{task.isDone ? <p>❌</p> : <p>✔️</p>}</div>
    );
  };
  const className = "task " + (task.isDone ? "task-done" : "");
  return (
    <div className={className}>
      {task.title}
      <ActionButton></ActionButton>
    </div>
  );
}
