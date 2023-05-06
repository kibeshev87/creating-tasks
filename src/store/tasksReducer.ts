import avatar from "../images/icon-avatar.png";


const initialState: TaskType[] = [
    {id: '1', title: '', avatar, data: '1 мая 2023', isCompleted: true},
    // {id: '2', avatar, data: '2 мая 2023', isCompleted: false, priority: 'Низкий'},
    // {id: '3', avatar, data: '3 мая 2023', isCompleted: true, priority: 'Средний'},
    // {id: '4', avatar, data: '4 мая 2023', isCompleted: false, priority: 'Высокий'}
]

export type PriorityTaskType = 'Низкий' | 'Средний' | 'Высокий'


export type TaskType = {
    id: string
    title: string
    avatar: string
    data: string
    // description: string
    priority?: PriorityTaskType
    isCompleted: boolean
}


export const tasksReducer = (state: TaskType[] = initialState, action: tasksReducerActionType): TaskType[] => {
    switch (action.type) {
        case 'FETCH-TASKS': {
            return action.tasks
        }
        case "CREATE-TASK": {
            const newTask = {id: '2', title: action.title, avatar, data: '', isCompleted: false }
            return [...state, newTask]
        }

        case "CHANGE-TASK-TITLE": {
            return state.map(el => el.id === action.id ? {...el, description: action.description} : el)
        }
        case "IS-COMPLETED-TASKS": {
            return state.map(el => el.id === action.id ? {...el, isCompleted: action.isCompleted} : el)
        }
        case "DELETE-TASKS": {
            return state.filter(el => el.id !== action.id)
        }
        default:
            return state
    }
}
type tasksReducerActionType = FetchTasksACType
    | CreatTaskACType
    | DeleteTasksACType
    | ChangeTaskTitleACType
    | IsCompletedTasksACType

export type FetchTasksACType = ReturnType<typeof fetchTasksAC>
export const fetchTasksAC = (tasks: TaskType[]) =>
    ({type: 'FETCH-TASKS', tasks} as const)

export type CreatTaskACType = ReturnType<typeof creatTaskAC>
export const creatTaskAC = (title: string) =>
    ({type: 'CREATE-TASK', title} as const)

export type DeleteTasksACType = ReturnType<typeof deleteTasksAC>
export const deleteTasksAC = (id: string) =>
    ({type: 'DELETE-TASKS', id} as const)

export type ChangeTaskTitleACType = ReturnType<typeof changeTaskTitleAC>
export const changeTaskTitleAC = (id: string, description: string) =>
    ({type: 'CHANGE-TASK-TITLE', id, description} as const)

export type IsCompletedTasksACType = ReturnType<typeof isCompletedTasksAC>
export const isCompletedTasksAC = (id: string, isCompleted: boolean) =>
    ({type: 'IS-COMPLETED-TASKS', id, isCompleted} as const)






















