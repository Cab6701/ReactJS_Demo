import { useState } from "react";
import TodoData from "./todo.data";
import TodoInput from "./todo.input";

interface ITodo {
    id: number;
    title: string;
    isComplete: boolean;
}
const TodoList = () => {
    const [listTodo, setListTodo] = useState<ITodo[]>([]);
    const addNewTodo = (todo: ITodo) => {
        setListTodo([...listTodo, todo]);
    }
    const deleteTodo = (id: number) => {
        setListTodo(listTodo.filter((value) => value.id != id));
    }

    return (
        <>
            <div style={{
                width: "600px",
                margin: "50px auto",
                border: "1px solid #ccc",
                borderRadius: 10,
                padding: 10
            }}>
                <div
                    style={{
                        padding: "10px 0",
                        borderBottomWidth: 1,
                        borderBottomColor: "#ccc",
                        borderBottomStyle: "solid"
                    }}>
                    My Todo List:
                </div>
                <br />
                <TodoInput addNewTodo={addNewTodo} />
                <TodoData
                    todos={listTodo}
                    deleteTodo={deleteTodo}
                />
            </div>
        </>
    )
}

export default TodoList;