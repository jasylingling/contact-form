import React from 'react';
import Button from '../elements/Button';
import InputBox from '../elements/InputBox';
import SuccessBanner from '../elements/SuccessBanner';
import ErrorBanner from '../elements/ErrorBanner';
import sendEmailApi from '../services/sendEmailApi';
import {
  validateEmail,
  validatePhoneNumber,
} from '../utilities/formValidation';

function ContactForm() {
  const [submitStatus, setSubmitStatus] = React.useState('');

  const [inputValues, setInputValues] = React.useState({
    from_name: '',
    email: '',
    phone: '',
    message: '',
    checked: false,
  });

  const [inputErrors, setInputErrors] = React.useState({
    from_name: '',
    email: '',
    phone: '',
    message: '',
    checked: false,
  });

  const form = React.useRef();

  function submitHandler(e) {
    e.preventDefault();
    setSubmitStatus('loading');

    // check for empty required fields
    if (!inputValues.from_name) {
      setInputErrors((prevErrors) => ({
        ...prevErrors,
        from_name: 'Your name is required',
      }));
    }

    if (!inputValues.email) {
      setInputErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Invalid email address',
      }));
    }

    if (!inputValues.message) {
      setInputErrors((prevErrors) => ({
        ...prevErrors,
        message: 'Message is required',
      }));
    }

    if (!inputValues.checked) {
      setInputErrors((prevErrors) => ({
        ...prevErrors,
        checked: 'Please agree to the privacy policy.',
      }));
    } else if (inputValues.checked) {
      setInputErrors((prevErrors) => ({
        ...prevErrors,
        checked: '',
      }));
    }

    // submit the form only if there are no errors
    if (
      !inputValues.from_name ||
      !validateEmail(inputValues.email) ||
      !inputValues.message ||
      !inputValues.checked ||
      (inputValues.phone !== '' &&
        !validatePhoneNumber(inputValues.phone))
    ) {
      setSubmitStatus('error');
    } else {
      sendEmailApi(form).then((result) => {
        if (result === 'success') {
          setSubmitStatus('success');
          setInputValues({
            from_name: '',
            email: '',
            phone: '',
            message: '',
            checked: false,
          });
        } else {
          setSubmitStatus('error');
        }
      });
    }
  }

  function blurHandler(field) {
    if (field === 'from_name' && !inputValues.from_name.trim()) {
      setInputErrors((prevErrors) => ({
        ...prevErrors,
        from_name: 'Your name is required',
      }));
    } else if (
      field === 'email' &&
      !validateEmail(inputValues.email.trim())
    ) {
      setInputErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Invalid email address',
      }));
    } else if (
      field === 'phone' &&
      inputValues.phone !== '' &&
      !validatePhoneNumber(inputValues.phone.trim())
    ) {
      setInputErrors((prevErrors) => ({
        ...prevErrors,
        phone: 'Invalid phone number',
      }));
    } else if (field === 'message' && !inputValues.message.trim()) {
      setInputErrors((prevErrors) => ({
        ...prevErrors,
        message: 'Message is required',
      }));
    } else {
      setInputErrors((prevErrors) => ({
        ...prevErrors,
        [field]: '',
      }));
    }
  }

  function changeHandler(e) {
    const { name, value } = e.target;
    setInputValues((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  }

  return (
    <>
      {submitStatus === 'success' && <SuccessBanner></SuccessBanner>}
      {submitStatus === 'error' && <ErrorBanner></ErrorBanner>}
      <form
        ref={form}
        className="flex flex-col text-left xl:w-1/3 md:w-1/2 sm:w-3/4 w-5/6 mx-auto gap-1 mb-8"
        onSubmit={submitHandler}
      >
        <InputBox
          requiredInput={true}
          placeholder="Your name"
          label="Name"
          inputType="text"
          inputName="from_name"
          inputValue={inputValues.from_name}
          onBlur={() => blurHandler('from_name')}
          onChange={changeHandler}
          inputError={inputErrors.from_name}
        ></InputBox>
        <InputBox
          requiredInput={true}
          placeholder="example@domain.com"
          label="Email"
          inputType="email"
          inputName="email"
          inputValue={inputValues.email}
          onBlur={() => blurHandler('email')}
          onChange={changeHandler}
          inputError={inputErrors.email}
        ></InputBox>
        <InputBox
          placeholder="e.g. Switzerland (+41 00 000 00 00)"
          label="Phone (optional)"
          inputType="tel"
          inputName="phone"
          inputValue={inputValues.phone}
          onBlur={() => blurHandler('phone')}
          onChange={changeHandler}
          inputError={inputErrors.phone}
        ></InputBox>
        <InputBox
          requiredInput={true}
          placeholder="Enter your message... :)"
          label="Message"
          inputType="textarea"
          inputName="message"
          inputValue={inputValues.message}
          onBlur={() => blurHandler('message')}
          onChange={changeHandler}
          inputError={inputErrors.message}
        ></InputBox>
        <div className="privacy-wrapper mt-3">
          <input
            type="checkbox"
            name="privacy"
            id="privacy"
            checked={inputValues.checked}
            onBlur={() => blurHandler('privacy')}
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
            <span className="text-red-500" title="Required field">
              *
            </span>
          </label>
          <span className="error text-red-500 text-sm block">
            {inputErrors.checked}
          </span>
        </div>
        {submitStatus === 'loading' && (
          <img
            className="mx-auto mt-3 w-1/6"
            src="./src/assets/img/loading-spinner.gif"
            alt="loading spinner"
          />
        )}
        <Button>Submit</Button>
      </form>
    </>
  );
}

export default ContactForm;
