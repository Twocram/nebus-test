export type Note = {
  id: number;
  title: string;
  todos: Todo[];
};

export type Todo = {
  id: number;
  title: string;
  isCompleted: boolean;
};
