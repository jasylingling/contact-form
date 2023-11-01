import React from 'react';
import Button from '../elements/Button';
import InputBox from '../elements/InputBox';

function ContactForm() {
  const [inputValues, setInputValues] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    checked: false,
  });
  //   const [messageInput, setMessageInput] = React.useState('');
  //   const [checkedInput, setCheckedInput] = React.useState(false);

  function formHandler(e) {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <form
      className="flex flex-col text-left w-4/12 mx-auto gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        if (inputValues.checked) {
          alert(`
          Username: ${inputValues.name}
          Email: ${inputValues.email}
          Phone: ${inputValues.phone}
          Message: ${inputValues.message}
          Agree to the terms: ${inputValues.checked}`);
        } else {
          alert('Please agree to the privacy terms.');
        }
      }}
    >
      <InputBox
        label="Name"
        inputType="text"
        inputName="name"
        formHandler={formHandler}
      ></InputBox>
      <InputBox
        label="Email"
        inputType="email"
        inputName="email"
        formHandler={formHandler}
      ></InputBox>
      <InputBox
        label="Phone"
        inputType="tel"
        inputName="phone"
        formHandler={formHandler}
      ></InputBox>
      <label htmlFor="message">Message</label>
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        value={inputValues.message}
        onChange={(e) => {
          const nextMessage = {
            ...inputValues,
            message: e.target.value,
          };
          setInputValues(nextMessage);
        }}
      ></textarea>
      <div className="privacy-wrapper">
        <input
          type="checkbox"
          name="privacy"
          id="privacy"
          checked={inputValues.checked}
          onChange={() => {
            const nextChecked = {
              ...inputValues,
              checked: !inputValues.checked,
            };
            setInputValues(nextChecked);
          }}
        />
        <label htmlFor="privacy">
          {' '}
          I have read and agree to the website{' '}
          <a href="#" className="underline">
            privacy policy
          </a>
        </label>
      </div>
      <Button>Send</Button>
    </form>
  );
}

export default ContactForm;
