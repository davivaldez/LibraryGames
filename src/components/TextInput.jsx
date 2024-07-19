import PropTypes from "prop-types";

TextInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  setPlaceholder: PropTypes.func,
  value: PropTypes.string,
  setValue: PropTypes.func
};

export default function TextInput({ id, label, placeholder, setPlaceholder, value, setValue }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input 
        type="text" 
        name={id} 
        id={id}
        placeholder={placeholder}
        value={value} 
        onChange={(ev) => {
          if (ev.target.name === "title") {
            setPlaceholder("Nome do jogo");
          } else {
            setPlaceholder("Capa do jogo");
          }
          setValue(ev.target.value);
        }} 
      />
    </div>
  );
}
