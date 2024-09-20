import "./Icon.css";
const logo = require('../../assets/thermoprops.png');
export const Icon = () => {
    return (
        <div className="iconwrapper">
            <img className="icon" src={logo} alt="" />
        </div>
    );
}
export default Icon;