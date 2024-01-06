import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; 2024 Rj. All rights reserved. | Designed with{' '}
          <span role="img" aria-label="heart">
            ❤️
          </span>{' '}
          by Rameshwar Jaiswal
        </p>
        <a
          href='https://www.facebook.com/rameshwar.jaiswal.16'
          className="text-blue-500 hover:bg-blue-700 px-2 py-1 rounded-md"
        >
          Facebook
        </a>
      </div>
    </footer>
  );
};

export default Footer;
