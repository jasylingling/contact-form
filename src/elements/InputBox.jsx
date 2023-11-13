import React from 'react';

function InputBox({
  requiredInput,
  placeholder,
  label,
  inputType,
  inputName,
  inputValue,
  onBlur,
  onChange,
  inputError,
}) {
  const uniqueId = React.useId();
  const styleInput = 'rounded py-2 px-3 shadow-lg shadow-pink-300/50';

  return (
    <>
      <label htmlFor={uniqueId} className="mt-3">
        {label}
        {requiredInput && (
          <span className="text-red-500" title="Required field">
            *
          </span>
        )}
      </label>
      {inputType === 'textarea' ? (
        <textarea
          placeholder={placeholder}
          type={inputType}
          name={inputName}
          id={uniqueId}
          cols="30"
          rows="10"
          value={inputValue}
          onBlur={onBlur}
          onChange={onChange}
          className={styleInput}
        />
      ) : (
        <input
          placeholder={placeholder}
          type={inputType}
          name={inputName}
          id={uniqueId}
          value={inputValue}
          onBlur={onBlur}
          onChange={onChange}
          className={styleInput}
        />
      )}
      <span className="error text-red-500 text-sm">{inputError}</span>
    </>
  );
}

export default InputBox;
