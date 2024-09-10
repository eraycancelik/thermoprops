import "./InputArea.css"
const InputArea = () => {
    return (
        <div className='inputContainer'>
            <h3>Point properties</h3>
            <div className='inputArea'>
                    <label>temperature T (°C)</label>
                    <input type="number" placeholder="Enter temperature" />
                    <label>Pressure (bar)</label>
                    <input type="number" placeholder="Enter pressure" />
                    <label>enthalpy h (kJ/kg)</label>
                    <input type="number" placeholder="Enter enthalpy" />
                    <label>internal energy</label>
                    <input type="number" placeholder="Enter internal energy" />
                    <label>specific volume</label>
                    <input type="number" placeholder="Enter specific volume" />
                </div>
            </div>
    )
}

export default InputArea