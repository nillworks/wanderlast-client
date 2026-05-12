import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-red-100 px-6">
      <div className="max-w-xl text-center bg-white shadow-2xl rounded-3xl p-10 border border-orange-100">
        <h1 className="text-7xl font-extrabold text-orange-500 mb-4">404</h1>

        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          The page you are looking for is currently unavailable or still under
          development. Our team is working hard to build this page and make your
          experience better.
        </p>

        <p className="text-gray-500 mb-8">
          Please check the URL or return to the homepage to continue exploring
          the website.
        </p>

        <Link href="/">
          <button className="bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white font-semibold px-8 py-3 rounded-full shadow-lg">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
