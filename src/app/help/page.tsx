"use client";

import { useState } from "react";
import { FaQuestionCircle, FaTools} from "react-icons/fa"; 

type AccordionState = number | null;

export default function HelpPage() {
  const [activeAccordion, setActiveAccordion] = useState<AccordionState>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="text-center mb-12">
          <h1 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">
            Need Help? We're Here for You!
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Browse through the frequently asked questions or contact us directly if you need more assistance.
          </p>
        </div>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <button
                className="flex items-center justify-between w-full bg-gray-200 p-4 rounded-lg hover:bg-gray-300"
                onClick={() => toggleAccordion(1)}
              >
                <span className="text-lg text-gray-800">
                  <FaQuestionCircle className="inline-block mr-2" /> 
                  How do I create a Mini Zine?
                </span>
                <span>{activeAccordion === 1 ? "−" : "+"}</span>
              </button>
              {activeAccordion === 1 && (
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p>To create a Mini Zine, simply upload your images, arrange them in the template, and then export it as a PDF. Print, fold, and you're done!</p>
                </div>
              )}
            </div>
            <div>
              <button
                className="flex items-center justify-between w-full bg-gray-200 p-4 rounded-lg hover:bg-gray-300"
                onClick={() => toggleAccordion(3)}
              >
                <span className="text-lg text-gray-800">
                  <FaQuestionCircle className="inline-block mr-2" />
                  How do I print my Mini Zine?
                </span>
                <span>{activeAccordion === 3 ? "−" : "+"}</span>
              </button>
              {activeAccordion === 3 && (
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p>Once you've created your Mini Zine, simply export it as a PDF and print it on A4 paper. Follow the folding instructions included with the PDF.</p>
                </div>
              )}
            </div>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Troubleshooting Tips</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gray-200 rounded-lg">
              <FaTools className="text-indigo-600 text-2xl" />
              <div>
                <h3 className="font-semibold text-gray-800">Images are not uploading</h3>
                <p>Make sure your images are in JPG, PNG, or JPEG format and are under 5MB in size.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-200 rounded-lg">
              <FaTools className="text-indigo-600 text-2xl" />
              <div>
                <h3 className="font-semibold text-gray-800">PDF not printing correctly</h3>
                <p>Ensure you're printing the PDF on A4 paper size and choose "Fit to Page" in your print settings.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-200 rounded-lg">
              <FaTools className="text-indigo-600 text-2xl" />
              <div>
                <h3 className="font-semibold text-gray-800">Account issues</h3>
                <p>If you're having trouble logging in, try resetting your password or contact our support team for assistance.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <form className="bg-white p-6 rounded-lg shadow-md space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold">Your Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold">Your Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold">Your Message</label>
              <textarea
                id="message"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                rows={5}
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
             className="btn btn-primary"
            >
              Send Message
            </button>
          </form>
        </section>
        
      </div>
    </div>
  );
}
