import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Head>
        <title>DentalPro - A better life starts with a beautiful smile</title>
        <meta name="description" content="Welcome to the Dentist Office of Dr. Thomas Dooley, where trust and comfort are priorities." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="antialiased bg-white font-sans text-gray-900">
        <main className="w-full">
          {/* Header */}
          <header className="absolute top-0 left-0 w-full z-50 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64">
            {/* Top bar - hidden on mobile */}
            <div className="hidden md:flex justify-between items-center py-2 border-b text-sm py-3" style={{borderColor: 'rgba(255,255,255,.25)'}}>
              <div>
                <ul className="flex text-white">
                  <li>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                        <path d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z" />
                      </svg>
                      <span className="ml-2">1985 Kerry Way, Whittier, CA, USA</span>
                    </div>
                  </li>
                  <li className="ml-6">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                        <path d="M14.594,13.994l-1.66,1.66c-0.577-0.109-1.734-0.471-2.926-1.66c-1.193-1.193-1.553-2.354-1.661-2.926l1.661-1.66 l0.701-0.701L5.295,3.293L4.594,3.994l-1,1C3.42,5.168,3.316,5.398,3.303,5.643c-0.015,0.25-0.302,6.172,4.291,10.766 C11.6,20.414,16.618,20.707,18,20.707c0.202,0,0.326-0.006,0.358-0.008c0.245-0.014,0.476-0.117,0.649-0.291l1-1l0.697-0.697 l-5.414-5.414L14.594,13.994z" />
                      </svg>
                      <span className="ml-2">+1 562-789-1935</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <ul className="flex justify-end text-white space-x-6">
                  <li><a href="#" target="_blank" title="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                      <path d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325,1.42-3.592,3.5-3.592	c0.699-0.002,1.399,0.034,2.095,0.107v2.42h-1.435c-1.128,0-1.348,0.538-1.348,1.325v1.735h2.697l-0.35,2.725h-2.348V21H20	c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z" />
                    </svg>
                  </a></li>
                  <li><a href="#" target="_blank" title="Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                      <path d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809	c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793	c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05	c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032	c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028	c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22	c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z" />
                    </svg>
                  </a></li>
                  <li><a href="#" target="_blank" title="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                      <path d="M20.947,8.305c-0.011-0.757-0.151-1.508-0.419-2.216c-0.469-1.209-1.424-2.165-2.633-2.633 c-0.699-0.263-1.438-0.404-2.186-0.42C14.747,2.993,14.442,2.981,12,2.981s-2.755,0-3.71,0.055 c-0.747,0.016-1.486,0.157-2.185,0.42C4.896,3.924,3.94,4.88,3.472,6.089C3.209,6.788,3.067,7.527,3.053,8.274 c-0.043,0.963-0.056,1.268-0.056,3.71s0,2.754,0.056,3.71c0.015,0.748,0.156,1.486,0.419,2.187 c0.469,1.208,1.424,2.164,2.634,2.632c0.696,0.272,1.435,0.426,2.185,0.45c0.963,0.043,1.268,0.056,3.71,0.056s2.755,0,3.71-0.056 c0.747-0.015,1.486-0.156,2.186-0.419c1.209-0.469,2.164-1.425,2.633-2.633c0.263-0.7,0.404-1.438,0.419-2.187 c0.043-0.962,0.056-1.267,0.056-3.71C21.003,9.572,21.003,9.262,20.947,8.305z M11.994,16.602c-2.554,0-4.623-2.069-4.623-4.623 s2.069-4.623,4.623-4.623c2.552,0,4.623,2.069,4.623,4.623S14.546,16.602,11.994,16.602z M16.801,8.263 c-0.597,0-1.078-0.482-1.078-1.078s0.481-1.078,1.078-1.078c0.595,0,1.077,0.482,1.077,1.078S17.396,8.263,16.801,8.263z" />
                      <circle cx="11.994" cy="11.979" r="3.003" />
                    </svg>
                  </a></li>
                  <li><a href="#" target="_blank" title="YouTube">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                      <path d="M21.593,7.203c-0.23-0.858-0.905-1.535-1.762-1.766C18.265,5.007,12,5,12,5S5.736,4.993,4.169,5.404	c-0.84,0.229-1.534,0.921-1.766,1.778c-0.413,1.566-0.417,4.814-0.417,4.814s-0.004,3.264,0.406,4.814	c0.23,0.857,0.905,1.534,1.763,1.765c1.582,0.43,7.83,0.437,7.83,0.437s6.265,0.007,7.831-0.403c0.856-0.23,1.534-0.906,1.767-1.763	C21.997,15.281,22,12.034,22,12.034S22.02,8.769,21.593,7.203z M9.996,15.005l0.005-6l5.207,3.005L9.996,15.005z" />
                    </svg>
                  </a></li>
                </ul>
              </div>
            </div>

            {/* Main navigation */}
            <div className="flex flex-wrap items-center justify-between py-6">
              <div className="w-1/2 md:w-auto">
                <Link href="/" className="text-white font-bold text-2xl">
                  DentalPro
                </Link>
              </div>

              <button 
                className="md:hidden block text-white"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>

              <div className={`${menuOpen ? 'block' : 'hidden'} md:block w-full md:w-auto`}>
                <nav className="w-full bg-white md:bg-transparent rounded shadow-lg px-6 py-4 mt-4 text-center md:p-0 md:mt-0 md:shadow-none">
                  <ul className="md:flex items-center">
                    <li><Link className="py-2 inline-block md:text-white md:hidden lg:block font-semibold" href="/about">About Us</Link></li>
                    <li className="md:ml-4"><Link className="py-2 inline-block md:text-white md:px-2 font-semibold" href="/treatments">Treatments</Link></li>
                    <li className="md:ml-4"><Link className="py-2 inline-block md:text-white md:px-2 font-semibold" href="/testimonials">Testimonials</Link></li>
                    <li className="md:ml-4 md:hidden lg:block"><Link className="py-2 inline-block md:text-white md:px-2 font-semibold" href="/blog">Blog</Link></li>
                    <li className="md:ml-4"><Link className="py-2 inline-block md:text-white md:px-2 font-semibold" href="/contact">Contact Us</Link></li>
                    <li className="md:ml-6 mt-3 md:mt-0">
                      <Link className="inline-block font-semibold px-4 py-2 text-white bg-blue-600 md:bg-transparent md:text-white border border-white rounded" href="/book-appointment">
                        Book Appointment
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>

          {/* Hero Section */}
          <div className="bg-gray-100">
            <section className="cover relative px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 overflow-hidden py-48 flex items-center min-h-screen" 
                     style={{background: 'linear-gradient(90deg, rgba(49, 130, 206, 1) 0%, rgba(56, 178, 172, 1) 100%)'}}>
              <div className="h-full absolute top-0 left-0 z-0">
                <Image 
                  src="/public/images/cover-bg.jpg" 
                  alt="Dental office background" 
                  fill
                  className="object-cover opacity-20"
                  priority
                />
              </div>

              <div className="lg:w-3/4 xl:w-2/4 relative z-10 h-100 lg:mt-16">
                <div>
                  <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                    A better life starts with a beautiful smile.
                  </h1>
                  <p className="text-blue-100 text-xl md:text-2xl leading-snug mt-4">
                    Welcome to the Dentist Office of Dr. Thomas Dooley, where trust and comfort are priorities.
                  </p>
                  <Link href="/book-appointment" className="px-8 py-4 bg-teal-500 text-white rounded inline-block mt-8 font-semibold">
                    Book Appointment
                  </Link>
                </div>
              </div>
            </section>
          </div>

          {/* About Section */}
          <section className="relative px-4 py-16 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 lg:py-32">
            <div className="flex flex-col lg:flex-row lg:-mx-8">
              <div className="w-full lg:w-1/2 lg:px-8">
                <h2 className="text-3xl leading-tight font-bold mt-4">Welcome to the Dentist Office of Dr. Thomas Dooley</h2>
                <p className="text-lg mt-4 font-semibold">Excellence in Dentistry in the Heart of NY</p>
                <p className="mt-2 leading-relaxed">
                  Donec convallis sollicitudin facilisis. Integer nisl ligula, accumsan non tincidunt ac, imperdiet in enim.
                  Donec efficitur ullamcorper metus, eu venenatis nunc. Nam eget neque tempus, mollis sem a, faucibus mi.
                </p>
              </div>

              <div className="w-full lg:w-1/2 lg:px-8 mt-12 lg:mt-0">
                <div className="md:flex">
                  <div>
                    <div className="w-16 h-16 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="md:ml-8 mt-4 md:mt-0">
                    <h4 className="text-xl font-bold leading-tight">Everything You Need Under One Roof</h4>
                    <p className="mt-2 leading-relaxed">
                      Our comprehensive services allow you to receive all needed dental care right here in our state-of-art
                      office – from dental cleanings and fillings to dental implants and extractions.
                    </p>
                  </div>
                </div>

                <div className="md:flex mt-8">
                  <div>
                    <div className="w-16 h-16 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="md:ml-8 mt-4 md:mt-0">
                    <h4 className="text-xl font-bold leading-tight">Our Patient-Focused Approach</h4>
                    <p className="mt-2 leading-relaxed">
                      Your treatment plan will perfectly match your needs, lifestyle, and goals. Even if it's been years
                      since you last visited the dentist, we can help. Our comfortable office, compassionate team, and
                      minimally-invasive treatments will help you feel completely at ease.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="md:flex md:flex-wrap mt-24 text-center md:-mx-4">
              {[
                { icon: 'public/images/teeth-whitening.svg', title: 'Teeth Whitening', description: 'Let us show you how our experience.' },
                { icon: 'public/images/oral-surgery.svg', title: 'Oral Surgery', description: 'Let us show you how our experience.' },
                { icon: 'public/images/painless-dentistry.svg', title: 'Painless Dentistry', description: 'Let us show you how our experience.' },
                { icon: 'public/images/periodontics.svg', title: 'Periodontics', description: 'Let us show you how our experience.' }
              ].map((service, index) => (
                <div key={index} className="md:w-1/2 md:px-4 lg:w-1/4 mt-4 md:mt-0 lg:mt-0">
                  <div className="bg-white rounded-lg border border-gray-300 p-8">
                    <Image src={service.icon} alt={service.title} width={80} height={80} className="mx-auto" />
                    <h4 className="text-xl font-bold mt-4">{service.title}</h4>
                    <p className="mt-1">{service.description}</p>
                    <Link href="#" className="block mt-4">Read More</Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="relative bg-gray-100 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 lg:py-32">
            <div className="flex flex-col lg:flex-row lg:-mx-8">
              <div className="w-full lg:w-1/2 lg:px-8">
                <h2 className="text-3xl leading-tight font-bold mt-4">Why choose the Mesothelioma Center?</h2>
                <p className="mt-2 leading-relaxed">
                  Aenean ut tellus tellus. Suspendisse potenti. Nullam tincidunt lacus tellus, sed aliquam est vehicula a. 
                  Pellentesque consectetur condimentum nulla, eleifend condimentum purus vehicula in. Donec convallis 
                  sollicitudin facilisis. Integer nisl ligula, accumsan non tincidunt ac, imperdiet in enim. 
                  Donec efficitur ullamcorper metus, eu venenatis nunc. Nam eget neque tempus, mollis sem a, faucibus mi.
                </p>
              </div>

              <div className="w-full md:max-w-md md:mx-auto lg:w-1/2 lg:px-8 mt-12 lg:mt-0">
                <div className="bg-gray-400 w-full h-72 rounded-lg"></div>
                <p className="italic text-sm mt-2 text-center">Aenean ante nisi, gravida non mattis semper.</p>
              </div>
            </div>
          </section>

          {/* Blog Section */}
          <section className="relative bg-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-32">
            <div>
              <h2 className="text-3xl leading-tight font-bold">Health Blog</h2>
              <p className="text-gray-600 mt-2 md:max-w-lg">
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
              </p>
              <Link href="/blog" className="inline-block text-teal-500 font-semibold mt-6">View All Posts</Link>
            </div>

            <div className="md:flex mt-12 md:-mx-4">
              {[1, 2].map((post) => (
                <div key={post} className="md:px-4 md:w-1/2 xl:w-1/4 mt-4 md:mt-0">
                  <div className="bg-white rounded border border-gray-300">
                    <div className="w-full h-48 overflow-hidden bg-gray-300"></div>
                    <div className="p-4">
                      <div className="flex items-center text-sm">
                        <span className="text-teal-500 font-semibold">Business</span>
                        <span className="ml-4 text-gray-600">29 Nov, 2019</span>
                      </div>
                      <p className="text-lg font-semibold leading-tight mt-4">Card Title</p>
                      <p className="text-gray-600 mt-1">
                        This card has supporting text below as a natural lead-in to additional content.
                      </p>
                      <div className="flex items-center mt-4">
                        <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300"></div>
                        <div className="ml-4">
                          <p className="text-gray-600">By <span className="text-gray-900 font-semibold">Abby Sims</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-12 text-center md:text-left"
                   style={{background: 'linear-gradient(90deg, rgba(49, 130, 206, 1) 0%, rgba(56, 178, 172, 1) 100%)'}}>
            <div className="md:flex md:items-center md:justify-center">
              <h2 className="text-xl font-bold text-white">
                Get in touch with us today! <br className="block md:hidden" />Call us on: +1 562-789-1935
              </h2>
              <Link href="/book-appointment" className="px-8 py-4 bg-white text-blue-600 rounded inline-block font-semibold md:ml-8 mt-4 md:mt-0">
                Book Appointment
              </Link>
            </div>
          </section>

          {/* Footer */}
          <footer className="relative bg-gray-900 text-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-12 lg:py-24">
            <div className="flex flex-col md:flex-row">
              <div className="w-full lg:w-2/6 lg:mx-4 lg:pr-8">
                <h3 className="font-bold text-2xl">DentalPro</h3>
                <p className="text-gray-400">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>

                <form className="flex items-center mt-6">
                  <div className="w-full">
                    <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2">
                      Subscribe for our Newsletter
                    </label>
                    <div className="relative">
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        type="email" 
                        placeholder="Enter Your Email Address"
                      />
                      <button type="submit" className="bg-teal-500 hover:bg-teal-400 text-white px-4 py-2 text-sm font-bold rounded absolute top-0 right-0 my-2 mr-2">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="w-full lg:w-1/6 mt-8 lg:mt-0 lg:mx-4">
                <h5 className="uppercase tracking-wider font-semibold text-gray-500">Treatments</h5>
                <ul className="mt-4">
                  <li className="mt-2"><Link href="#" className="opacity-75 hover:opacity-100">General Dentistry</Link></li>
                  <li className="mt-2"><Link href="#" className="opacity-75 hover:opacity-100">Cosmetic Dentistry</Link></li>
                  <li className="mt-2"><Link href="#" className="opacity-75 hover:opacity-100">Oral Health</Link></li>
                </ul>
              </div>

              <div className="w-full lg:w-2/6 mt-8 lg:mt-0 lg:mx-4 lg:pr-8">
                <h5 className="uppercase tracking-wider font-semibold text-gray-500">Contact Details</h5>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="block flex items-center opacity-75 hover:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                        <path d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z" />
                      </svg>
                      <span className="ml-3">1985 Kerry Way, Whittier, CA, USA</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block flex items-center opacity-75 hover:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                        <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10c5.514,0,10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z" />
                        <path d="M13 7L11 7 11 13 17 13 17 11 13 11z" />
                      </svg>
                      <span className="ml-3">Mon - Fri: 9:00 - 19:00<br />Closed on Weekends</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block flex items-center opacity-75 hover:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                        <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10c5.514,0,10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z" />
                        <path d="M13 7L11 7 11 13 17 13 17 11 13 11z" />
                      </svg>
                      <span className="ml-3">Mon - Fri: 9:00 - 19:00<br />Closed on Weekends</span>
                    </a>
                  </li>
                  <li>
                    <a href="tel:+1234567890" className="block flex items-center opacity-75 hover:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                        <path d="M17.707 12.293a.999.999 0 0 0-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594a.999.999 0 0 0 0-1.414L8.586 3.172a.999.999 0 0 0-1.414 0L5.636 4.708c-.395.395-.408.972-.03 1.378.27.29.635.706.906 1.26C7.18 9.146 9.354 11.32 11.154 13.12s3.974 3.974 5.774 4.642c.554.271.97.636 1.26.906.406.378.983.365 1.378-.03l1.536-1.536a.999.999 0 0 0 0-1.414l-3.121-3.121-.274-.274z"/>
                      </svg>
                      <span className="ml-3">+1 (234) 567-8900</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@company.com" className="block flex items-center opacity-75 hover:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                        <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM8.553 14.106L4 18.659V9.341l4.553 4.765zm1.127 1.179L12 17.642l2.32-2.357L20 21H4l5.68-5.715zM15.447 14.106L20 9.341v9.318l-4.553-4.553zM20 7.659L12 14.648 4 7.659V6h16v1.659z"/>
                      </svg>
                      <span className="ml-3">info@company.com</span>
                    </a>
                  </li>
                </ul>
                </div>
                </div>
                </footer>
                </main>
                </div>
                </>
  )
}
