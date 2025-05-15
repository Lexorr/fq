import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const ContactSection1 = () => {
  return (
    <div className="p-6 md:p-12 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center md:text-left">
        <p className="text-sm text-emerald-600 font-semibold">Contact us</p>
        <h1 className="text-3xl md:text-5xl font-bold my-2">
          Get in Touch With Uss
        </h1>
        <p className="text-gray-600 mb-10"></p>

        <div className="space-y-8">
          {/* Location */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <FiMapPin className="text-3xl text-emerald-600" />
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold">Headquarter</h2>
              <p className="text-gray-600">2345 Maple Street Springfield, IL 62704 USA</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <FiPhone className="text-3xl text-emerald-600" />
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold">Call Us</h2>
              <div className='flex flex-col mt-2 md:flex-row gap-2'>
                <p className="text-gray-600">+12604077679</p>
                <p className="text-gray-600">+17868994961</p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <FiMail className="text-3xl text-emerald-600" />
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold">Email Us</h2>
              <p className="text-gray-600">support@lexorventures.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection1;
