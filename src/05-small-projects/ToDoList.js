import {useEffect, useState } from "react";

function ToDoList() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => setToDo(event.target.value);
    useEffect(() => console.log(toDos), [toDos]);
    return (
        <div>
            <h1>My To-Dos ({toDos.length})</h1>
            <form onSubmit={(event) => {
                event.preventDefault();
                if (toDo === "") {
                    return;
                }
                setToDo("");
                setToDos((prevArray) => [toDo, ...prevArray]);
            }}>
                <input onChange={onChange} value={toDo} type="text" placeholder="Write your to-do..."></input>
                <button>Add To-Do</button>
            </form>
            <hr />
            <ul>
                {toDos.map((item, index) => <li key={index}>{item}</li>)}
            </ul>

        </div>
    )
}

export default ToDoList;
