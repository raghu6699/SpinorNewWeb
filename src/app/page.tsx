export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Spinor Innovations</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-500 hover:text-gray-900">Services</a>
              <a href="#about" className="text-gray-500 hover:text-gray-900">About</a>
              <a href="#contact" className="text-gray-500 hover:text-gray-900">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Innovating Digital Solutions
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Empowering businesses with cutting-edge website development, marketing strategies, and app solutions.
            </p>
            <div className="mt-8">
              <a
                href="#services"
                className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl font-extrabold text-gray-900">Our Services</h3>
            <p className="mt-4 text-lg text-gray-500">
              Comprehensive solutions to drive your business forward.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold text-gray-900">Website Development</h4>
              <p className="mt-2 text-gray-600">
                Custom websites tailored to your brand and business needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold text-gray-900">B2C Marketing</h4>
              <p className="mt-2 text-gray-600">
                Effective marketing strategies to engage and convert consumers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold text-gray-900">B2B Marketing</h4>
              <p className="mt-2 text-gray-600">
                Targeted campaigns to connect with businesses and drive leads.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold text-gray-900">Retention Marketing</h4>
              <p className="mt-2 text-gray-600">
                Strategies to keep customers engaged and loyal to your brand.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold text-gray-900">App Development</h4>
              <p className="mt-2 text-gray-600">
                Innovative mobile and web applications for modern businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-gray-900">Contact Us</h4>
            <p className="mt-2 text-gray-600">
              Ready to innovate? Get in touch with Spinor Innovations.
            </p>
            <p className="mt-2 text-gray-500">
              Email: info@spinorinnovations.com | Phone: (123) 456-7890
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
