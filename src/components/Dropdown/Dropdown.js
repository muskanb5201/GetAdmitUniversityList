import './Dropdown.css'

const Dropdown = ({ value, options, onChange }) => {
  return (
    <div className="dropdown-container ">
      <select className='dropdown' value={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
