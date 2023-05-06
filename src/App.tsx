import React from 'react';
import './App.css';
import {NewTask} from "components/NewTask";
import {useSelector} from "react-redux";
import {RootStateType} from "store/store";
import {TaskType} from "store/tasksReducer";

function App() {

    const tasks = useSelector<RootStateType, TaskType[]>(state => state.tasks)

    return (
        <div className="App">
            {tasks.map(t => (
                <NewTask key={t.id} task={t}/>
            ))}
        </div>
    )
}

export default App;
