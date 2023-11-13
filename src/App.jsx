import Header from './components/Header';
import ContactForm from './components/ContactForm';
import contactLogo from './assets/img/contact.svg';

function App() {
  return (
    <main>
      <Header
        heading="Contact"
        subheading="Let's get in touch! 💌"
      ></Header>
      <img
        src={contactLogo}
        className="sm:w-96 w-5/6 mx-auto mb-12"
        alt="contact logo"
      />
      <ContactForm></ContactForm>
    </main>
  );
}

export default App;
