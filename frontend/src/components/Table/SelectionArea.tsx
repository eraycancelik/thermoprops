import './SelectionArea.css'
const SelectionArea = () => {
    return (
        <div className='selectionContainer'>
            <h3>Selection of fluid and calculation mode</h3>
            <div className='specContainer'>
                <div className='propContainer'>
                    <label htmlFor="fluid">Fluid &#10230;</label>
                    <div className='select'>
                        <select id='fluid'>
                            <option>Water</option>
                            <option>R134</option>
                            <option>R404</option>
                            <option>Steam</option>
                        </select>
                    </div>
                </div>
                <div></div>
                <div className='propContainer'>
                    <label htmlFor="property_1">Property 1 &#10230;</label>
                    <select name="property1">
                        <option>Pressure</option>
                        <option>Temperature</option>
                        <option>Enthalpy</option>
                        <option>Entropy</option>
                        <option>volume</option>
                    </select>
                </div>
                <div className='arrowedInput'>
                    <p>&#10230;</p>
                    <input className='fluidInput' type="number" />
                </div>

                <div className='propContainer'>
                    <label htmlFor="property_2">Property 2 &#10230;</label>
                    <select name="property2">
                        <option>Pressure</option>
                        <option>Temperature</option>
                        <option>Enthalpy</option>
                        <option>Entropy</option>
                    </select>
                </div>
                <div className='arrowedInput'>
                    <p>&#10230;</p>
                    <input className='fluidInput' type="number" />
                </div>
                <div className='quality'>
                    <label htmlFor="calculationMode">Fluid quality</label>
                    <div className="checkbox-wrapper-18"><div className="round"><input type="checkbox" id="checkbox-18" /><label htmlFor="checkbox-18"></label></div></div>
                </div>
                <div className='arrowedInput'>
                    <p>&#10230;</p>
                    <input className='fluidInput' type="number" />
                </div>
            </div>
        </div>
    )
}

export default SelectionArea