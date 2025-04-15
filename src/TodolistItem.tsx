import { Task } from "./App"
import { Button } from "./Button"

type TodolistItemProps = {
    title: string
    tasks: Task[]
    date?: string
}




export const TodolistItem = ({ title, tasks, date }: TodolistItemProps) => {
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
                                </li>
                            )
                        })}
                    </ul>
                )}
                <div>
                    <Button title={'All'} />
                    <Button title={'Active'} />
                    <Button title={'Completed'} />
                </div>
            </div>
            <div>{date}</div>
        </div>
    )
}