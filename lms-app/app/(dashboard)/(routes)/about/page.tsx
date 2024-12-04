import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | SARAI E-Learning Platform</title>
        <meta name="description" content="About our E-learning platform and Learning Management System." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Welcome to SARAi E-Learning Platform</h1>
          <p className="text-lg text-gray-600 mb-8">
            Our platform leverages a cutting-edge Learning Management System (LMS) to help educators deliver high-quality courses and empower students to succeed.
          </p>
        </div>

        <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/lms-feature1.svg" alt="Feature 1" className="w-full h-60 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">What is Our LMS?</h3>
              <p className="text-gray-600">Our Learning Management System allows teachers to create courses, deliver content, and manage course documents easily and efficiently. It empowers both educators and learners.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/lms-feature2.svg" alt="Feature 2" className="w-full h-60 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Interactive Course Materials</li>
                <li>Real-time Analytics and Reporting</li>
                <li>Easy to use</li>
                <li>Mobile Access to Courses Anytime</li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/lms-feature3.svg" alt="Feature 3" className="w-full h-60 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600">Our mission is to provide educators and students with a platform that facilitates engaging, efficient, and effective learning experiences to help them reach their goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
          <p className="text-lg text-gray-600 mb-6">
            We are a passionate team of developers and educators committed to transforming how education is delivered. Our platform helps create a personalized learning experience with robust features and intuitive tools.
          </p>
        </div>
      </section>

      {/* Contact Info and Footer Section */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 SARAi E-Learning Platform. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  )
}
