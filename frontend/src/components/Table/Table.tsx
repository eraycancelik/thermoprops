import React from 'react'
import './Table.css'
import InputArea from './InputArea'
import SelectionArea from './SelectionArea'
const Table = () => {
    return (
        <div className="mainTable">
            <SelectionArea />
            <hr />
            <InputArea />
        </div>
    )
}

export default Table