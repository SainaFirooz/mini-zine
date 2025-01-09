"use client";

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">
            Create Your Own Mini Zine – Simple and Fun!
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            A Mini Zine is a small, creative booklet made from a single A4 sheet of paper. With our app, you can easily create your very own personalized Mini Zine, ready to print and fold!
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            What is a Mini Zine?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            A Mini Zine is an 8-page small book created by printing, folding, and cutting a single A4 paper. 
            It's a fun and creative way to express yourself with images and text!
          </p>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            What can you do with our app?
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Upload your own images and add text to each section.</li>
            <li>Place your content in an easy-to-use template.</li>
            <li>Export your Mini Zine as a PDF, ready to print.</li>
            {/* <li>Create an account to save and return to your projects later.</li> */}
          </ul>
        </section>

        {/* Purpose and Vision */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why did we create this app?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The purpose of this project is to make it easy and accessible for students to create personalized Mini Zines. 
            By offering a simple online tool that doesn’t require complex design programs, students can express their creativity and create unique small books.
          </p>
        </section>

        {/* Call to Action */}
        <div className="text-center">
          <a
            href="/sign-up"
            className="btn btn-primary"
          >
            Start creating your Mini Zine now!
          </a>
        </div>
      </div>
    </div>
  );
}
