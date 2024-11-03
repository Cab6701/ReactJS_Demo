interface IProps {
    todos: {
        id: number;
        title: string;
        isComplete: boolean;
    }[];
    owner?: string;
    age?: number;
    isDeveloper?: boolean;
    deleteTodo: (id: number) => void;
}

const TodoData = (props: IProps) => {
    const { todos, owner = "Unknown", deleteTodo } = props;
    const deleteFunction = (id: number) => {
        deleteTodo(id);
    }
    return (
        <div >
            {todos.map(item => {
                return (
                    <div key={item.id}>
                        <div style={{ padding: "10px 0" }}>
                            {item.id} - {item.title}
                            &nbsp; <button onClick={() => deleteFunction(item.id)}>Delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoData;