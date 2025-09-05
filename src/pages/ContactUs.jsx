import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/global/Footer";
import ContactUsHero from "../components/sections/Contact/ContactUsHero";
import emailIcon from "../assets/icons/email-icon.png";
import timeIcon from "../assets/icons/time-icon.png";
import emailjs from '@emailjs/browser';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Your EmailJS credentials
    const serviceID = 'service_dib1725';
    const templateID = 'template_m8zvpi3';
    const userID = 'w9I6mR0Buu2TFldsV';

    try {
      emailjs.init(userID);
      
      const response = await emailjs.send(serviceID, templateID, {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        subject: formData.subject,
        message: formData.message,
        to_email: 'enquiries@yieldplugtech.com', // Updated to company email
        time: new Date().toLocaleString()
      }, userID);

      console.log('EmailJS response:', response);
      
      setSubmitStatus({ 
        type: 'success', 
        message: 'Message sent successfully! We\'ll get back to you shortly.' 
      });
      
      setFormData({ 
        name: "", 
        email: "", 
        company: "", 
        subject: "", 
        message: "" 
      });
      
    } catch (error) {
      console.error('Full error details:', error);
      
      if (error.status === 400) {
        setSubmitStatus({ 
          type: 'error', 
          message: 'Configuration error. Please check your EmailJS settings.' 
        });
      } else if (error.status === 0) {
        setSubmitStatus({ 
          type: 'error', 
          message: 'Network error. Please check your internet connection.' 
        });
      } else {
        setSubmitStatus({ 
          type: 'error', 
          message: `Failed to send message. Please email us directly at enquiries@yieldplugtech.com` 
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-white pt-16">
      <Header />
      <ContactUsHero />

      <section className="w-full py-16 flex justify-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 px-4 md:px-0">
          {/* Left: Contact Form */}
          <div className="bg-sky-50 flex flex-col gap-6 p-6 md:mr-auto md:ml-[40px] ml-0 w-full max-w-[700px]">
            <div className="text-blue-800 text-2xl font-semibold font-montserrat leading-loose -mt-6">
              Let's Talk About Your Business Needs
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Form fields remain the same as before */}
              <div className="relative">
                <label htmlFor="names" className="text-blue-800 text-xl font-bold font-montserrat leading-relaxed">
                  Names
                </label>
                <input
                  type="text"
                  id="names"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 h-14 w-full bg-white rounded-xl outline outline-2 outline-offset-[-2px] outline-black/10 px-6 flex items-center text-black text-xl font-semibold font-montserrat placeholder:text-base md:placeholder:text-lg placeholder:text-gray-400"
                  placeholder="Your full names"
                />
              </div>

              <div className="relative">
                <label htmlFor="email" className="text-blue-800 text-xl font-bold font-montserrat leading-relaxed">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 h-14 w-full bg-white rounded-xl outline outline-2 outline-offset-[-2px] outline-black/10 px-6 flex items-center text-black text-xl font-semibold font-montserrat placeholder:text-base md:placeholder:text-lg placeholder:text-gray-400"
                  placeholder="We'll get back to you here"
                />
              </div>

              <div className="relative">
                <label htmlFor="company" className="text-blue-800 text-xl font-bold font-montserrat leading-relaxed">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="mt-2 h-14 w-full bg-white rounded-xl outline outline-2 outline-offset-[-2px] outline-black/10 px-6 flex items-center text-black text-xl font-semibold font-montserrat placeholder:text-sm md:placeholder:text-lg placeholder:text-gray-400"
                  placeholder="Let us know who you represent"
                />
              </div>

              <div className="relative">
                <label htmlFor="subject" className="text-blue-800 text-xl font-bold font-montserrat leading-relaxed">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-2 h-14 w-full bg-white rounded-xl outline outline-2 outline-offset-[-2px] outline-black/10 px-6 flex items-center text-black text-xl font-semibold font-montserrat placeholder:text-base md:placeholder:text-lg placeholder:text-gray-400"
                  placeholder="What's this about?"
                />
              </div>

              <div className="relative">
                <label htmlFor="message" className="text-blue-800 text-xl font-bold font-montserrat leading-relaxed">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="mt-2 w-full bg-white rounded-xl outline outline-2 outline-offset-[-2px] outline-black/10 px-6 py-3 text-black text-xl font-semibold font-montserrat placeholder:text-base md:placeholder:text-lg placeholder:text-gray-400"
                  placeholder="Tell us how we can help"
                />
              </div>

              {/* Status Message */}
              {submitStatus && (
                <div className={`text-center p-3 rounded-lg ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-100 text-green-800 border border-green-200' 
                    : 'bg-red-100 text-red-800 border border-red-200'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`mt-4 h-14 w-full rounded-xl flex items-center justify-center text-white text-xl font-semibold font-montserrat transition-colors ${
                  isSubmitting 
                    ? 'bg-blue-500 cursor-not-allowed' 
                    : 'bg-blue-800 hover:bg-blue-900'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send message'
                )}
              </button>
            </form>
          </div>

          {/* Right: Contact Info + Map */}
          <div className="flex flex-col gap-6 px-4 md:px-0 ml-[-10px] md:ml-[-25px] lg:ml-0">
            <div className="justify-start text-blue-800 text-2xl font-bold font-montserrat leading-loose">
              Prefer a Direct Approach?
            </div>

            <div className="flex items-center gap-3">
              <img src={emailIcon} alt="Email Icon" className="w-6 h-6" />
              <a href="mailto:enquiries@yieldplugtech.com" className="justify-start text-gray-900/60 text-xl font-semibold font-montserrat underline leading-relaxed hover:text-blue-800">
                enquiries@yieldplugtech.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <img src={timeIcon} alt="Time Icon" className="w-6 h-6" />
              <div className="justify-start text-black/60 text-xl font-semibold font-montserrat leading-relaxed">
                Monday to Friday, 9 AM - 5 PM
              </div>
            </div>

            <div className="flex-1 w-full mx-auto md:mx-0 md:mr-[40px] md:ml-0 max-w-[900px] md:w-[700px] h-[300px] md:h-[400px]">
              <iframe
                title="Our Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.469678785225!2d28.094219515158146!3d-25.98534298303178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9569226312e99b%3A0x6f7651fa2bc4adf2!2s208%20Coubrough%20Rd%2C%20Noordwyk%2C%20Midrand%2C%20Johannesburg%2C%201687!5e0!3m2!1sen!2sza!4v1693221200000!5m2!1sen!2sza"
                width="100%"
                height="100%"
                className="rounded-lg border"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}