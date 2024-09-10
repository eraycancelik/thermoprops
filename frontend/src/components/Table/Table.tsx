import React from 'react'
import './Table.css'
import InputArea from './InputArea'
import SelectionArea from './SelectionArea'
import Calculate from './Calculate'
const Table = () => {
    return (
        <div className="mainTable">
            <SelectionArea />
            <hr/>
            <InputArea />
            <hr />
            <Calculate/>
        </div>
    )
}

export default Table