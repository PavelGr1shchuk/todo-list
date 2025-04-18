import { FilterValues, Task } from "./App"
import { Button } from "./Button"

type TodolistItemProps = {
    title: string
    tasks: Task[]
    date?: string
    deleteTask: (taskId: number) => void
    changeFilter: (filter: FilterValues) => void
}




export const TodolistItem = ({ title, tasks, date, deleteTask, changeFilter }: TodolistItemProps) => {
    return (
        <div className="app">
            <div>
                <h3>{title}</h3>
                <div>
                    <input />
                    <Button title={'+'} />
                </div>
                {tasks.length === 0 ? (
                    <p>Тасок нет</p>
                ) : (
                    <ul>
                        {tasks.map(task => {
                            return (
                                <li key={task.id}>
                                    <input type="checkbox" checked={task.isDone} />
                                    <span>{task.title}</span>
                                    <Button title={'x'} onClick={() => deleteTask(task.id)} />
                                </li>
                            )
                        })}
                    </ul>
                )}
                <div>
                    <Button title={'All'} onClick={() => changeFilter("all")} />
                    <Button title={'Active'} onClick={() => changeFilter("active")} />
                    <Button title={'Completed'} onClick={() => changeFilter("completed")} />
                </div>
            </div>
            <div>{date}</div>
        </div>
    )
}