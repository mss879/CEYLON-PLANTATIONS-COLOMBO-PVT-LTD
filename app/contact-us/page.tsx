'use client';

import Navbar from '@/components/Navbar';
import { useState } from 'react';
import Head from 'next/head';

// Note: For client components, we'll handle SEO via the layout or other means
export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log(formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-2">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <div className="max-w-[476px] mx-auto">
              <h1 className="text-5xl md:text-6xl font-light mb-4 text-gray-900">Contact us</h1>
              <p className="text-lg text-gray-600">
                Get in touch with Ceylon Plantations Colombo. We&apos;re here to answer your questions and discuss how we can serve you with the finest Ceylon tea.
              </p>
            </div>
          </div>

          {/* Form and Image Grid */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-24 mb-20">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden h-[400px] md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&h=600&fit=crop"
                alt="Tea plantation"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Carter"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@youremail.com"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(123) 456 - 7890"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="ex. Google"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-6 rounded-lg transition"
                  >
                    Send message
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-medium mb-2 text-gray-900">Thank you! We&apos;ll get back to you soon</h3>
                  <p className="text-gray-600">
                    We have received your message and will get back to you as soon as possible. Our team is dedicated to providing the best support and we appreciate your patience.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="bg-gray-50 py-20 px-2">
        <div className="max-w-[1170px] mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">Visit our office</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm">
                  <h3 className="text-2xl font-medium mb-6 text-gray-900">Ceylon Plantations Colombo</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Managing Director</h4>
                      <p className="text-gray-600">Mr. Nihal Wijesinghe</p>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-600">
                        Ceylon Plantations Colombo (Pvt) Ltd,<br />
                        No. 58, Elie House Road,<br />
                        Colombo 15,<br />
                        Sri Lanka.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Hotline</h4>
                      <a href="tel:+94777575501" className="text-green-700 hover:text-green-800">
                        +94 777 575 501
                      </a>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Office</h4>
                      <p className="text-gray-600">
                        <a href="tel:+94112326669" className="text-green-700 hover:text-green-800">+94 112 326 669</a>
                        {' / '}
                        <a href="tel:+94112527007" className="text-green-700 hover:text-green-800">+94 112 527 007</a>
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Email</h4>
                      <a href="mailto:info@ceylonplantationscolombo.com" className="text-green-700 hover:text-green-800">
                        info@ceylonplantationscolombo.com
                      </a>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Viber / WhatsApp</h4>
                      <a href="https://wa.me/94777575501" className="text-green-700 hover:text-green-800">
                        +94 777 575 501
                      </a>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Fax</h4>
                      <p className="text-gray-600">+94 112 326 669</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map/Image */}
              <div className="rounded-2xl overflow-hidden h-[600px] shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6887889457995!2d79.86347631477395!3d6.927078795009896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2596d3cb8b5c5%3A0x5d4f5c5e5f5f5f5f!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
