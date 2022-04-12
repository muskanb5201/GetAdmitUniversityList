import Dropdown from "../Dropdown/Dropdown";
import './DropdownMenu.css'

const DropdownMenu = ({label, value, options, onClickHandler}) => {

  return (
    <div>
      <Dropdown
        label={label}
        options={options}
        value={value}
        onChange={(e) => onClickHandler(e)}
      />
    </div>
  );
};

export default DropdownMenu;
