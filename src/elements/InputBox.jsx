import React from 'react';

function InputBox({
  label,
  inputType,
  inputName,
  inputValue,
  formHandler,
}) {
  const uniqueId = React.useId();

  return (
    <>
      <label htmlFor={uniqueId}>{label}</label>
      <input
        type={inputType}
        name={inputName}
        id={uniqueId}
        value={inputValue}
        onChange={formHandler}
      />
    </>
  );
}

export default InputBox;
