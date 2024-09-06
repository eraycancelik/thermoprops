import logo from "../../assets/thermoprops.png";
import "./Icon.css";
export const Icon = () => {
    return (
        <div className="iconwrapper">
            <img className="icon" src={logo} alt="" />
        </div>
    );
}
export default Icon;