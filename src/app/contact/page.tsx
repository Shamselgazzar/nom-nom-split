import MaxWidthWrapper from '@/components/MaxWidthWrapper';

const ContactPage = () => {
  return (
    <div className="bg-slate-50">
      <MaxWidthWrapper className="py-16 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
          <h1 className='relative w-fit font-bold !leading-tight text-balance tracking-tight
            text-gray-800 text-5xl md:text-6xl lg:text-7xl'>
            Contact Us
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed text-center lg:text-left">
            We'd love to hear from you! Whether you have questions, feedback, or
            just want to say hello, feel free to reach out to us using the
            contact form below or via email at <span className="font-bold">contact@nomnomsplit.com</span>.
          </p>
        </div>
        <div className="lg:w-1/2">
          <form className="max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">Name</label>
              <input type="text" id="name" name="name" placeholder="Your name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Email</label>
              <input type="email" id="email" name="email" placeholder="Your email address" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-1">Message</label>
              <textarea id="message" name="message" rows={4} placeholder="Your message" className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-blue-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Send Message</button>
          </form>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ContactPage;
