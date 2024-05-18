import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-4">404 | Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">The page you are looking for does not exist.</p>
      <Link href="/">
        <p className="text-blue-500 font-semibold hover:underline">Go back to home</p>
      </Link>
    </div>
  );
};

export default NotFoundPage;
