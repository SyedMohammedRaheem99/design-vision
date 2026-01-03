import Link from 'next/link';
import { Home, ArrowRight } from 'lucide-react';

/**
 * 404 Not Found page
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="max-w-md mx-auto px-4 text-center">
        <h1 className="font-serif text-6xl font-semibold text-primary-400 mb-4">404</h1>
        <h2 className="font-serif text-2xl font-semibold text-neutral-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-neutral-600 mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary-400 text-white font-medium hover:bg-primary-500 transition-colors"
          >
            <Home className="mr-2 w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-neutral-900 text-neutral-900 font-medium hover:bg-neutral-900 hover:text-white transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
