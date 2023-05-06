import React, {ChangeEvent} from 'react';
import style from '../style/taskPrioritySelection.module.css'

export const TaskPrioritySelection = () => {

    const arr = [
        {id: '1', value: 'Низкий'},
        {id: '2', value: 'Средний'},
        {id: '3', value: 'Высокий'}
    ]

    // const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     console.log(e.currentTarget.value)
    // }
    const onChangeSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        console.log(e.currentTarget.value)
    }


    const selectPriority = arr.map(pr => (
        <option id={pr.id} value={pr.value}> {pr.value} </option>
    ))

    return (
        <div>
            <span>Выбрать приоритет</span>
            <div className={style.changePriority}>
                <select className={style.changePriority} onChange={onChangeSelectHandler}>{selectPriority}</select>
                {/*{arr.map(el => (
                    <label key={el.id}>
                        <input className={style.onePriority} type="radio" value={el.value} onChange={onChangeHandler}/>

                        <span>{el.value}</span>
                    </label>
                ))
                }*/}
            </div>

        </div>
    )
}