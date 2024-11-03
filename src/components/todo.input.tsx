import { useState } from "react";

interface ITodo {
    id: number;
    title: string;
    isComplete: boolean;
}

interface IProps {
    name?: string;
    addNewTodo: (value: ITodo) => void;
}

const TodoInput = (props: IProps) => {
    const [todo, setTodo] = useState<string>("");
    const { addNewTodo } = props;

    function randomInteger(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleClick = () => {
        if (!todo) {
            alert("Empty Todo");
            return;
        }
        addNewTodo({
            id: randomInteger(1, 100),
            title: todo,
            isComplete: false,
        });
        setTodo("");
    }

    return (
        <div style={{ display: "flex", gap: 15, marginBottom: 20 }}>
            <input value={todo} type="text" onChange={(event) => setTodo(event.target.value)} />
            <button onClick={handleClick}>Add Todo</button>
        </div>
    )
}

export default TodoInput