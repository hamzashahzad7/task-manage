import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="max-w-screen-xl mx-auto mb-8">
        <nav className="px-4 sm:px-5 py-12 flex items-center justify-between space-x-12">
          <div className="flex items-center space-x-8">
            <div id="logo" className="flex items-center space-x-2">
              <img
                src="/assets/img/logo.png"
                className="w-8 h-8"
                alt="Trippi Logo"
              />
              <h5 className="text-xl font-bold text-[#094067]">Trippi</h5>
            </div>
          </div>
          <div className="lg:hidden">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="18" x2="20" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex items-center space-x-5">
            <Link href={'/login'} className="px-5 py-3 rounded-md text-[#094067] font-semibold hover:text-[#094067]/75 transition duration-300">
              Login
            </Link>
            <Link href={'/register'} className="px-5 py-3 text-white bg-[#3DA9FC] rounded-md shadow-[0_6px_30px_rgba(61,169,252,0.6)] font-semibold hover:bg-[#3498E4] transition-colors duration-300">
              Register
            </Link>
            <button className="px-5 py-3 flex items-center space-x-1 font-semibold text-[#094067] hover:text-[#094067]/75 transition duration-300">
              <span>ID</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
        </nav>
      </header>
      <main className="max-w-screen-xl mx-auto overflow-x-hidden px-4 sm:px-5">
        {/* <!-- Hero Section --> */}
        <section
          data-aos="fade-up"
          data-aos-duration="1000"
          className="grid grid-cols-6 lg:grid-cols-12 mb-20"
        >
          <div className="col-span-6 text-center lg:text-left">
            <span className="inline-block px-3 py-1.5 mb-4 bg-[#3DA9FC] bg-opacity-10 text-white font-semibold tracking-wide rounded-full">
              Stay Organized, Stay Ahead
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl mb-4 font-extrabold text-[#094067] leading-tight">
              {" "}
              Manage your <span className="text-[#3DA9FC]">tasks</span> easier
              than ever!
            </h1>
            <p className="mb-6 text-base md:text-lg tracking-wide leading-8 font-medium text-[#5F6C7B] pr-0 md:pr-4 xl:pr-32">
              The ultimate task management tool to boost productivity
            </p>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 justify-center lg:justify-start">
              <Link href={'/login'} className="w-full md:w-fit px-9 py-5 bg-[#3DA9FC] flex items-center justify-center md:justify-start text-white font-semibold rounded-md shadow-[0_6px_30px_rgba(61,169,252,0.6)] hover:bg-[#3498E4] group transition-colors duration-300">
                <span>Login</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-arrow-narrow-right group-hover:translate-x-1.5 transition duration-300"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <line x1="15" y1="16" x2="19" y2="12"></line>
                  <line x1="15" y1="8" x2="19" y2="12"></line>
                </svg>
              </Link>
              <Link href={'/register'} className="w-fit px-9 py-5 border-solid border-2 rounded-md flex items-center justify-center md:justify-start text-[#3DA9FC] font-semibold space-x-4 hover:scale-105 transition duration-300">
                <span>Register</span>
              </Link>
            </div>
          </div>
          <div className="col-span-6 pl-24 hidden lg:block">
            <img src="/assets/img/1.svg" alt="" />
          </div>
        </section>

        {/* <!-- second Section --> */}
        <section className="grid grid-cols-1 lg:grid-cols-2 pt-16 pb-8 lg:pb-56">
          <div
            data-aos="fade-right"
            data-aos-duration="700"
            className="relative"
          >
            <img src="/assets/img/2.svg" className="w-[80%]" alt="" />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="700"
            className="pt-12 text-center lg:text-left"
          >
            <span className="mb-4 text-[#3DA9FC] inline-block font-semibold leading-tight">
              Features
            </span>
            <h2 className="mb-4 text-4xl md:text-5xl text-[#094067] font-extrabold leading-tight pr-0 xl:pr-8">
              Everything You Need to Stay on Track
            </h2>
            <p className="mb-4 text-base md:text-lg tracking-wide leading-8 font-medium text-[#5F6C7B] pr-0 xl:pr-24">
              Say goodbye to chaos and hello to clarity with these powerful
              features.{" "}
            </p>
            <ul className="text-[#5F6C7B]">
              <li>🔹 Task Organization</li>
              <li>🔹 Collaboration Made Easy</li>
              <li>🔹 Smart Automation</li>
              <li>🔹 Cross-Platform Sync</li>
            </ul>
          </div>
        </section>

        {/* <!-- Testimonial Section --> */}
        <section
          data-aos="fade-down"
          data-aos-delay="100"
          data-aos-duration="700"
          className="relative w-[95%] mx-auto min-h-[742px] py-24 flex flex-col items-center bg-[#D8EEFE] bg-opacity-75 rounded-xl mb-24"
        >
          <span className="mb-4 text-[#3DA9FC] inline-block font-semibold leading-tight">
            Testimonials
          </span>
          <h2 className="mb-4 text-4xl md:text-5xl text-[#094067] font-extrabold leading-tight text-center lg:text-left">
            See Why Teams Love Us
          </h2>
          <p className="mb-8 text-base md:text-lg tracking-wide leading-8 font-medium text-[#5F6C7B] text-center px-2 lg:px-56">
            Real stories from real users who have transformed their
            productivity.
          </p>
          <div className="relative w-full">
            <div className="absolute top-0 left-[-3%] w-[106%]">
              <div className="swiper comment-slider px-5 h-[340px]">
                {/* <!-- Additional required wrapper --> */}
                <div className="swiper-wrapper">
                  {/* <!-- Slides --> */}
                  <div className="swiper-slide w-full max-h-[240px] md:max-h-[215px] xl:max-h-[260px] p-8 sm:px-12 sm:py-8 md:p-6 xl:p-8 rounded-xl shadow-lg bg-white flex flex-col justify-between">
                    <p className="text-sm sm:text-lg md:text-sm xl:text-base text-[#5F6C7B] leading-relaxed">
                      “This app has completely changed the way we manage
                      projects. Our team is more productive than ever!”
                    </p>
                    <div className="flex items-center space-x-4">
                      <img
                        src="/assets/img/avatar/sigit-rendang.jpg"
                        className="w-10 xl:w-12 h-10 xl:h-12 rounded-full"
                        alt=""
                      />
                      <div className="flex flex-col justify-between">
                        <h6 className="text-[#094067] font-medium">
                          Joseph M.
                        </h6>
                        <p className="text-sm text-[#5F6C7B]">
                          Creative Designer
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide w-full max-h-[240px] md:max-h-[215px] xl:max-h-[260px] px-12 py-8 md:p-6 xl:p-8 rounded-xl shadow-lg bg-white flex flex-col justify-between">
                    <p className="text-sm sm:text-lg md:text-sm xl:text-base text-[#5F6C7B] leading-relaxed">
                      “The intuitive interface and collaboration tools have made
                      work so much smoother. Highly recommended!”
                    </p>
                    <div className="flex items-center space-x-4">
                      <img
                        src="/assets/img/avatar/ilham-jawir.jpg"
                        className="w-10 xl:w-12 h-10 xl:h-12 rounded-full"
                        alt=""
                      />
                      <div className="flex flex-col justify-between">
                        <h6 className="text-[#094067] font-medium">David R.</h6>
                        <p className="text-sm text-[#5F6C7B]">
                          Startup Founder
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide w-full max-h-[240px] md:max-h-[215px] xl:max-h-[260px] px-12 py-8 md:p-6 xl:p-8 rounded-xl shadow-lg bg-white flex flex-col justify-between">
                    <p className="text-sm sm:text-lg md:text-sm xl:text-base text-[#5F6C7B] leading-relaxed">
                      “I love the automated reminders and progress tracking—it
                      keeps me on top of everything!”
                    </p>
                    <div className="flex items-center space-x-4">
                      <img
                        src="/assets/img/avatar/giga-chad.jpg"
                        className="w-10 xl:w-12 h-10 xl:h-12 rounded-full"
                        alt=""
                      />
                      <div className="flex flex-col justify-between">
                        <h6 className="text-[#094067] font-medium">Jack L.</h6>
                        <p className="text-sm text-[#5F6C7B]">Freelancer</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- If we need pagination --> */}
                <div className="swiper-pagination"></div>

                {/* <!-- If we need navigation buttons --> */}
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- CTA Section --> */}
        <section
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="500"
          className="relative w-full bg-[#D8EEFE] py-12 rounded-xl shadow-[0_6px_30px_rgba(9,64,103,0.13)] mb-24 overflow-hidden"
        >
          <div className="relative z-10 flex flex-col items-center px-4 sm:px-8">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl text-[#094067] text-center font-bold leading-tight px-0 lg:px-24 xl:px-48 mb-9">
              Ready to Take Control of Your Tasks?
            </h3>
            <div className="w-full flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="px-6 py-4 w-full md:w-[550px] bg-white shadow-md rounded-md flex space-x-2 focus-within:ring-2 focus-within:ring-[#3DA9FC] ring-offset-2 transition duration-300">
                <input
                  className="w-full border-none outline-none focus:outline-none"
                  type="text"
                  placeholder="Email"
                />
              </div>
              <button className="w-full sm:w-fit bg-[#EF4565] px-6 py-4 text-white font-bold shadow-md shadow-[rgba(239,69,101,0.25)] rounded-md hover:bg-[#d03753] transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
          <div className="absolute top-[-140%] left-[-27%] w-[500px] h-[680px] border-8 border-[rgba(255,255,255,0.75)] rounded-full"></div>
          <div className="absolute bottom-[-190%] left-[-25%] w-[500px] h-[680px] rotate-45 border-8 border-[rgba(255,255,255,0.75)] rounded-full"></div>
          <div className="absolute top-[-140%] right-[-27%] w-[500px] h-[680px] border-8 border-[rgba(255,255,255,0.75)] rounded-full"></div>
          <div className="absolute bottom-[-190%] right-[-16%] w-[500px] h-[680px] rotate-45 border-8 border-[rgba(255,255,255,0.75)] rounded-full"></div>
        </section>
        {/* <!-- Footer Section --> */}
        <section data-aos="fade-down">
          <div className="py-12 grid grid-cols-6 lg:grid-cols-12 gap-y-8 lg:gap-y-0 lg:gap-x-8">
            <div className="col-span-6 space-y-4">
              <img src="/assets/img/logo.png" className="w-9 h-9" alt="" />
              <h5 className="text-xl font-bold text-[#094067]">Trippi</h5>
              <p className="text-[#5F6C7B] tracking-wide leading-relaxed pr-8">
                Ready to Take Control of Your Tasks?
              </p>
            </div>
            <div className="col-span-6 sm:col-span-2">
              <h6 className="text-[#094067] text-sm font-bold uppercase tracking-wide mb-5">
                Halaman
              </h6>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-[#5F6C7B] hover:text-[#33393f] transition duration-300"
                  >
                    Destinasi Wisata
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#5F6C7B] hover:text-[#33393f] transition duration-300"
                  >
                    Booking Penginapan
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#5F6C7B] hover:text-[#33393f] transition duration-300"
                  >
                    Destinasi Terdekat
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#5F6C7B] hover:text-[#33393f] transition duration-300"
                  >
                    Profil Saya
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-6 sm:col-span-2">
              <h6 className="text-[#094067] text-sm font-bold uppercase tracking-wide mb-5">
                Tentang
              </h6>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-[#5F6C7B] hover:text-[#33393f] transition duration-300"
                  >
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#5F6C7B] hover:text-[#33393f] transition duration-300"
                  >
                    Kebijakan Privasi
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#5F6C7B] hover:text-[#33393f] transition duration-300"
                  >
                    Galeri
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#5F6C7B] hover:text-[#33393f] transition duration-300"
                  >
                    Bantuan
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-6 sm:col-span-2">
              <h6 className="text-[#094067] text-sm font-bold uppercase tracking-wide mb-5">
                Sosial Media
              </h6>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-[#5F6C7B] hover:text-[#33393f] transition duration-300"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#5F6C7B] hover:text-[#33393f] transition duration-300"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#5F6C7B] hover:text-[#33393f] transition duration-300"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#5F6C7B] hover:text-[#33393f] transition duration-300"
                  >
                    Tiktok
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
