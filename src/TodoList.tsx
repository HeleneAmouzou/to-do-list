import TodoItem from "./TodoItem";
import { TodoType } from "./TodoType";

interface TodoListProps {
    todos: TodoType[];
    toggleTodo: (id: string, completed: boolean) => void;
    deleteTodo: (id: string) => void;
}

function TodoList ({todos, toggleTodo, deleteTodo}: TodoListProps) {

    return (
        <>
            <ul className="list">
            {todos.length === 0 && "No Todos"}
            {todos.map(todo => {
                return ( 
                    <TodoItem 
                        {...todo} 
                        key={todo.id} 
                        toggleTodo={toggleTodo} 
                        deleteTodo={deleteTodo}
                    />
                )
            })}
            </ul>
        </>
    )
}

export default TodoList;