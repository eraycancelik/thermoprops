import React from 'react'
import './SelectionArea.css'
const SelectionArea = () => {
    return (
        <div>
            <h3>Selection of fluid and calculation mode</h3>
            <div className='selectionContainer'>
                <div className='labelOptionContainer'>
                    <label>Fluid</label>
                    <label>Calculation Mode</label>
                </div>
                <div className='labelOptionContainer'>
                    <select>
                        <option>Water</option>
                        <option>Gasoline</option>
                        <option>Oil</option>
                        <option>Steam</option>
                    </select>
                    <select>
                        <option>Standard</option>
                        <option>Actual</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default SelectionArea