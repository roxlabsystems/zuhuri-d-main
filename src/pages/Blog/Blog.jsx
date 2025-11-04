import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Button from "../../components/ui/Button";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>
          Blog | Zuhuri Real Estate - Property Insights & Market Trends
        </title>
        <meta
          name="description"
          content="Learn about real estate management, property investment, and market tips from Zuhuri Real Estate Kenya."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <main className="bg-white w-full overflow-x-hidden font-inter text-gray-800">
        {/* Hero Section */}
        <section
          className="relative w-full min-h-[300px] sm:min-h-[450px] lg:min-h-[600px] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: "url('/images/IMG_1023_Original%201.png')",
          }}
        >
          <div className="absolute inset-0 bg-[#1e1b54]/70"></div>

          <div className="absolute top-0 left-0 right-0 z-20">
            <Header />
          </div>

          <div className="relative z-10 text-center px-4 sm:px-6 mt-10">
            <h1 className="font-league text-white font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl leading-[1.1] max-w-xl mx-auto">
              Why You Should Consider{" "}
              <span className="text-[#f3c225] block sm:inline font-semi-bold">
                Professional Property Management
              </span>
            </h1>
          </div>
        </section>

        {/* Blog Content */}
        <section className="max-w-5xl mx-auto px-5 sm:px-8 py-10 sm:py-14 space-y-10 sm:space-y-14">
          {/* Intro */}
          <article className="space-y-3 sm:space-y-4">
            <h2 className="text-[#1e1b54] font-league text-lg sm:text-xl font-semibold">
              What is Property Management?
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-inter">
              Property management means hiring professionals to handle your
              rental property — from finding tenants and collecting rent to
              maintenance and reporting. It ensures your investment works for
              you, stress-free.
            </p>
          </article>

          {/* Benefits Section */}
          <article className="bg-[#1e1b54] text-white rounded-2xl shadow-lg px-5 py-8 sm:px-8 sm:py-10">
            <h2 className="text-[#f3c225] text-lg sm:text-xl font-league font-semibold mb-5 sm:mb-6">
              Key Benefits
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 text-sm sm:text-base leading-relaxed font-inter">
              {[
                {
                  title: "Peace of Mind",
                  desc: "Professionals handle tenant issues, payments, and repairs.",
                },
                {
                  title: "Reliable Income",
                  desc: "Rent is collected on time and sent directly to you.",
                },
                {
                  title: "Quality Tenants",
                  desc: "Every tenant is screened to ensure reliability and care.",
                },
                {
                  title: "Regular Maintenance",
                  desc: "We handle inspections and repairs to protect your property.",
                },
              ].map((item, index) => (
                <div key={index}>
                  <h3 className="font-bold text-[#f3c225] mb-1 font-league text-sm sm:text-base">
                    {item.title}
                  </h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </article>

          {/* Final Word */}
          <article className="space-y-2 sm:space-y-3">
            <h2 className="text-[#1e1b54] font-league text-lg sm:text-xl font-semibold">
              Final Word
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-inter">
              Managing property doesn’t have to be hard. With Zuhuri’s expert
              team, you get reliable service, trusted oversight, and peace of
              mind — wherever you are.
            </p>
          </article>

          {/* CTA */}
          <div className="flex justify-center pt-4">
            <Link
              to="/contact"
              className="flex items-center bg-[#1e1b54] text-white text-sm sm:text-base font-semibold rounded-full px-5 sm:px-4 py-2 gap-2 hover:bg-[#151244] transition-all font-league"
            >
              Ready to Invest?
              <div className="bg-white rounded-[8px] p-1">
                <Button />
              </div>
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Blog;

