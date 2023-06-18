import React, { useState } from 'react'
import './Todo.css'
const Todo = () => {

    const [input, setInput] = useState('');
    const [inputData, setInputData] = useState([]);
    const [edit_Id, setedit_Id] = useState(null)

    const inputHandler = ({ target: { value } }) => {
        setInput(value)
    }

    const inputDataHandler = () => {
        if (input === '') {
            alert("Input Should Not be Empty");
        }
        else {
            if (edit_Id === null) {
                setInputData([...inputData, { id: inputData.length, value: input }]);
                setInput('')
            }
            else {
                setInputData(inputData.map((prevData) => edit_Id === prevData.id ? { value: input } : prevData));
                setInput('');
                setedit_Id(null)
            }
        }
    }

    const deleteHandler = (id) => {
        setInputData(inputData.filter((a) => a.id !== id));
        setedit_Id(null)
        setInput('')
    }
    const editHandler = (value, id) => {
        setInput(value)
        setedit_Id(id)
    }

    return <>
        <h1>Todo List</h1>
        <div className="main-container">
            <div className="input-container">
                <input type="text" placeholder='Enter the Text' value={input} onChange={inputHandler} />
                <button onClick={inputDataHandler} id='btn'>{edit_Id === null ? "Submit" : "Update"}</button>
            </div>
            <div className="display-container">
                {
                    inputData.map((eachObject) => {
                        const { id, value } = eachObject
                        return <React.Fragment key={id}>
                            <div className="action-container">
                                <h5>{value}</h5>
                                <div className="btn-container">
                                    <i className="fa-solid fa-pen-to-square" onClick={() => editHandler(value, id)}></i>
                                    <i className="fa-solid fa-trash" onClick={() => deleteHandler(id)}></i>
                                </div>
                            </div>
                        </React.Fragment>
                    })
                }
            </div>
        </div>
    </>
}

export default Todo