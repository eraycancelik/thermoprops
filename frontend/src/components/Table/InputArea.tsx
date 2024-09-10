import "./InputArea.css"
const InputArea = () => {
    return (
        <div className='inputArea'>
            <h3>Point properties</h3>
            <div className='inputMiniArea'>
                <div className="mateArea">
                    <label>temperature T (°C)</label>
                    <label>Pressure (bar)</label>
                    <label>enthalpy h (kJ/kg)</label>
                    <label>internal energy</label>
                    <label>specific volume</label>
                </div>
                <div className="mateArea">
                    <input type="number" placeholder="Enter temperature" />
                    <input type="number" placeholder="Enter pressure" />
                    <input type="number" placeholder="Enter enthalpy" />
                    <input type="number" placeholder="Enter internal energy" />
                    <input type="number" placeholder="Enter specific volume" />
                </div>
            </div>
        </div>
    )
}

export default InputArea