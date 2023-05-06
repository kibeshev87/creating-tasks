import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import style from '../style/createNewTask.module.css'
import {MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBIcon} from 'mdb-react-ui-kit';
import {changeTaskTitleAC, creatTaskAC, TaskType} from "store/tasksReducer";
import {useDispatch} from "react-redux";
import {TaskPrioritySelection} from "components/TaskPrioritySelection";

type TaskPropsType = {
    task: TaskType
}

export const NewTask = ({task}: TaskPropsType) => {

    const {id, avatar, priority, data, isCompleted} = task
    const dispatch = useDispatch()

    const [edit, setEdit] = useState(true)
    const [title, setTitle] = useState('') // возьмем из стейта таски


    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setEdit(false)
        }
    }

    const changeTaskHandler = () => {
        dispatch(changeTaskTitleAC(id, title))
        setEdit(!edit)
    }

    const createTaskHandler = () => {
        // dispatch(creatTaskTC(title))
        dispatch(creatTaskAC(title))
        alert('Task Creat')
    }


    return (

        <div className={style.cardAndBtnWrapper}>
            <MDBCard className={style.cardWrapper}>
                <MDBCardBody>
                    {/*      <MDBCardTitle className={style.cardTitle}>
                    <MDBIcon fas icon="ellipsis-v"/>

                    <MDBBadge pill light>{`Задача #${id}`}</MDBBadge>

                    {priority === 'Низкий'
                        ? <MDBBadge pill color='success' light>{priority}</MDBBadge>
                        : priority === 'Средний'
                            ? <MDBBadge pill color='warning' light>{priority}</MDBBadge>
                            : priority === 'Высокий'
                                ? <MDBBadge pill className='mx-2' color='danger' light>{priority}</MDBBadge>
                                : ''
                    }

                </MDBCardTitle>*/}

                    <TaskPrioritySelection/>

                    <div>
                        <img className={style.avatar} src={avatar} alt=""/>
                    </div>

                    {edit

                        ? <input placeholder={'Текст нового задания'} value={title} onChange={onChangeInputHandler}
                                 onKeyPress={onKeyPressHandler} autoFocus/>

                        : <span className={style.description}> {title} </span>}

                    <div className={style.lineAndBossName}>
                        <MDBCardTitle className={style.bossName}>Проверяет: Руководитель проекта</MDBCardTitle>
                        <hr/>
                    </div>

                    <div className={style.createTaskButtons}>

                        <MDBBtn color='warning' tag='a' floating onClick={changeTaskHandler}>
                            <MDBIcon fas icon="pen"/>
                        </MDBBtn>

                    </div>

                </MDBCardBody>
            </MDBCard>

            <MDBBtn onClick={createTaskHandler}>Create New Task</MDBBtn>
        </div>
    )
}


