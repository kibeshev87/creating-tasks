import React, {ChangeEvent, useState} from 'react';

type EditableSpanPropsType = {
    value: string
    callback: (title: string) => void
}

export const EditableSpan = (props: EditableSpanPropsType) => {

    // const [edit, setEdit] = useState(false)
    // const [title, setTitle] = useState(props.value)
    //
    // const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     setTitle(e.currentTarget.value)
    // }
    // const onDoubleClickHandler = () => {
    //     setEdit(true)
    //     setTitle(props.value)
    // }
    // const onBlurHandler = () => {
    //     setEdit(false)
    //     props.callback(title)
    // }


    return (
        <div>

        </div>
        // edit
        //
        //     ? <input value={title} onChange={onChangeHandler} onBlur={onBlurHandler} autoFocus/>
        //
        //     : <span> {props.value} </span>

    )
}

