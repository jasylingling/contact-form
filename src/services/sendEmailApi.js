import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_ekv2kzg';
const TEMPLATE_ID = 'template_6twi2i6';
const PUBLIC_KEY = 'i6Qt0BlUppZLyEcqj';

async function sendEmailApi(form) {
  const response = await emailjs.sendForm(
    SERVICE_ID,
    TEMPLATE_ID,
    form.current,
    PUBLIC_KEY
  );
  if (response.text === 'OK') {
    return 'success';
  } else {
    return 'error';
  }
}

export default sendEmailApi;
