import "./MenuBar.css";
import Dropdown from "../Dropdown/Dropdown";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

export default function MenuBar() {
  return (
    <div className="menu">
      <h1 className="menu-heading">US Universities</h1>
      <div className="buttons">
        <button className="menu-btn">Location ∨</button>
        <button className="menu-btn"> Tution fees less than ∨</button>
      </div>
    </div>
  );
}
