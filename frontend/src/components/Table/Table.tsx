import React from 'react'
import './Table.css'
import InputArea from './InputArea'
import SelectionArea from './SelectionArea'
import TableButtons from './TableButtons'
const Table = () => {
    return (
        <div className="mainTable">
            <SelectionArea />
            <hr/>
            <InputArea />
            <hr />
            <TableButtons/>
        </div>
    )
}

export default Table