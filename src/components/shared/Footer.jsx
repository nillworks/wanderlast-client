const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-4 sm:px-6 md:px-12 lg:px-16 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="mb-10 md:mb-14 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white break-words">
            Wanderlust
          </h1>

          <p className="mt-4 max-w-2xl text-sm sm:text-base mx-auto md:mx-0 leading-relaxed">
            Your gateway to extraordinary travel experiences around the world.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Newsletter */}
          <div>
            <h3 className="text-white mb-3 tracking-wide text-sm font-semibold">
              NEWSLETTER
            </h3>

            <p className="mb-4 text-sm leading-relaxed">
              Subscribe for exclusive travel deals and inspiration.
            </p>

            <div className="flex items-center bg-gray-800 rounded-md px-4 py-3 overflow-hidden">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-transparent outline-none flex-1 text-sm text-white placeholder-gray-500 w-full"
              />

              <button className="text-white text-lg ml-2 hover:scale-110 transition">
                ↗
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-3 tracking-wide text-sm font-semibold">
              QUICK LINKS
            </h3>

            <ul className="space-y-2 text-sm">
              <li className="hover:text-white duration-300 cursor-pointer">
                Home
              </li>

              <li className="hover:text-white duration-300 cursor-pointer">
                Destinations
              </li>

              <li className="hover:text-white duration-300 cursor-pointer">
                My Bookings
              </li>

              <li className="hover:text-white duration-300 cursor-pointer">
                My Profile
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white mb-3 tracking-wide text-sm font-semibold">
              SUPPORT
            </h3>

            <ul className="space-y-2 text-sm">
              <li className="hover:text-white duration-300 cursor-pointer">
                Help Center
              </li>

              <li className="hover:text-white duration-300 cursor-pointer">
                Terms of Service
              </li>

              <li className="hover:text-white duration-300 cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-3 tracking-wide text-sm font-semibold">
              CONTACT US
            </h3>

            <ul className="space-y-2 text-sm break-words">
              <li>786 901 1622</li>
              <li>info@wanderlust.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-10 md:mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-xs sm:text-sm">
            © 2026 Wanderlust. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-white text-lg">
            <span className="cursor-pointer hover:text-gray-300 duration-300">
              X
            </span>

            <span className="cursor-pointer hover:text-gray-300 duration-300">
              in
            </span>

            <span className="cursor-pointer hover:text-gray-300 duration-300">
              ◎
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
