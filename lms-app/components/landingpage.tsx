"use client";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { FaGraduationCap } from "react-icons/fa";
import Link from "next/link";

export default function LandingPage() {

  return (
    <div className="bg-gray-50 text-gray-900">
  
      <nav className="bg-white border-b border-gray-200 py-4 px-8 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
       
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-gray-800 font-semibold text-lg space-x-2">
              <FaGraduationCap className="h-8 w-8 mr-4" />
              <span>SARAi LMS</span>
            </span>
          </div>

          <div className="flex items-center space-x-6">
          <Link href="/sign-in">
            <Button variant="default" size='lg'>
              Log in
            </Button>
          </Link>
          </div>
        </div>
      </nav>

      <header className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-800 to-green-500 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-4">
  
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl sm:text-6xl font-bold mb-4">
              Learning that gets you
            </h1>
            <p className="text-lg sm:text-xl mb-6">
              Skills for your present and your future. Get Started with Us.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <Button variant="default" size="lg">
                Get Started
              </Button>
            </div>
          </div>

          <div className="hidden md:block">
            <img
              src="/banner-img.jpg"
              alt="SARAI LMS"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </header>

     
      <section id="course-us" className="py-16 px-8 bg-white text-gray-800">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Pest Control",
              desc: "Learn effective strategies and tools to identify, manage, and control agricultural pests while minimizing environmental impact.",
              image: "/pest.jpg",
            },
            {
              title: "Crop Protection",
              desc: "Explore techniques and technologies to safeguard crops from diseases, weeds, and pests, ensuring higher yields and sustainable farming.",
              image: "/cropprotection.jpg",
            },
            {
              title: "Soil Management",
              desc: "Gain insights into maintaining soil health and fertility through sustainable practices, ensuring long-term agricultural productivity.",
              image: "/soil.jpg",
            },
            {
              title: "Weather Forecasting",
              desc: "Understand the science of weather prediction to optimize agricultural planning and mitigate the risks of climate variability.",
              image: "/weather.jpg",
            },
          ].map((feature, idx) => (
            <Card key={idx} className="text-center">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <CardHeader className="text-xl font-bold">
                {feature.title}
              </CardHeader>
              <CardContent>{feature.desc}</CardContent>
            </Card>
          ))}
        </div>
      </section>


      <section id="about-us" className="py-16 px-8 bg-gray-100">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          About Project SARAi
        </h2>
        <p className="max-w-4xl mx-auto text-lg text-center">
          Project SARAi aims to develop a national crop forecasting and
          monitoring system for nine priority crops: rice, corn, banana,
          coconut, coffee, cacao, sugarcane, tomato, and soybean. This project
          is funded by DOST-PCAARRD.
        </p>
      </section>

 
      <section id="goals-us" className="py-16 px-8 bg-gray-100">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Goals of SARAi LMS
        </h2>
        <div className="max-w-4xl mx-auto grid gap-8">
          {[
            {
              feedback: "Raise Awareness",
            },
            {
              feedback: "Promote Sustainable Practices",
            },
            {
              feedback: "Support Agricultural Literacy",
            },
            {
              feedback: "Engage Communities",
            },
          ].map((testimonial, idx) => (
            <Card key={idx}>
              <CardContent>
                <p className="text-lg italic">{testimonial.feedback}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="py-8 px-8 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
          <div>
            <h3 className="text-white text-xl font-bold">SARAi LMS</h3>
            <p>Learning that gets you</p>
          </div>
          <div>
            <h4 className="text-white font-bold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#course-us" className="hover:underline">
                  Courses
                </a>
              </li>
              <li>
                <a href="#about-us" className="hover:underline">
                  About Project SARAi
                </a>
              </li>
              <li>
                <a href="#goals-us" className="hover:underline">
                  Goals
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center mt-8">
          &copy; 2024 SARAi LMS. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
