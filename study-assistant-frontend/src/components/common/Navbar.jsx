import React from 'react';
import { Search, Bell } from 'lucide-react';

export default function Nav() {
  return (
    <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
      <div className="flex items-center justify-between gap-6 md:gap-12">
        <span className="font-medium text-base text-gray-900">Acme</span>

        <nav className="flex items-center gap-5 flex-1">
          <a href="#" className="text-sm font-medium text-gray-900">Home</a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Products</a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Pricing</a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900">About</a>
        </nav>

        <input
          type="text"
          placeholder="Search"
          className="w-40 px-3 py-2 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />

        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-xs font-medium text-blue-700">
          JD
        </div>
        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-xs font-medium text-blue-700">
        </div>
      </div>
    </div>
  );
}