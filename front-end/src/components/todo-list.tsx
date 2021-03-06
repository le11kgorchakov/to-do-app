import { Todo } from "../entities/todos";
import { TodoItem } from "./todo-item"
import './todo-list.scss';

type Props = {
    todos: Todo[]
}

export const TodoList: React.FC<Props> = ({ todos }) => {
    return (
        <ul className="todo-list">
            {
                todos.map((todo, i) => (
                    <li key={i}><TodoItem title={todo.title} description={todo.description} isCompleted={todo.isCompleted} /></li>
                ))
            }
        </ul>
    )
}