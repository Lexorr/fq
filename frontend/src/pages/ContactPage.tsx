import Banner from '../ui/Banner';

import ContactSection1 from '../components/ContactSection1';
import ContactForm from '../components/ContactForm';
const ContactPage = () => {
  return (
    <div>
      <Banner
        title="Contact Us"
        subtitle="We'd love to hear from you!"
        
      />
      <ContactSection1 />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
