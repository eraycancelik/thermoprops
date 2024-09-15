import "./InputArea.css"
const InputArea = () => {
    return (
        <div className='inputContainer'>
            <h3>Point properties</h3>
            <div className='inputArea'>
                    <label>temperature T (°C)</label>
                    <label className="resultLabel">-</label>
                    <label>Pressure (bar)</label>
                    <label className="resultLabel">-</label>
                    <label>enthalpy h (kJ/kg)</label>
                    <label className="resultLabel">-</label>
                    <label>internal energy</label>
                    <label className="resultLabel">-</label>
                    <label>specific volume</label>
                    <label className="resultLabel">-</label>
                </div>
            </div>
    )
}

export default InputArea