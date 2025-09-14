
import React from 'react';
import type { Category, Section } from '../types';

interface NavbarProps {
    sections: Section[];
    activeSection: Category | 'about';
}

export const Navbar: React.FC<NavbarProps> = ({ sections, activeSection }) => {
    const navItems = [...sections, {id: 'about', title: 'عن الموقع'}]
  return (
    <nav className="bg-[rgba(58,81,153,0.8)] backdrop-blur-md py-2.5 sticky top-[88px] md:top-[98px] z-40 shadow-lg">
      <div className="max-w-7xl mx-auto px-5">
        <ul className="flex justify-center list-none flex-wrap gap-1 md:gap-2.5">
          {navItems.map((section) => (
            <li key={section.id} className="my-1">
              <a
                href={`#${section.id}`}
                className={`text-white no-underline font-semibold text-sm transition-all duration-300 px-4 py-2 rounded-full block relative overflow-hidden transform hover:-translate-y-0.5 ${activeSection === section.id ? 'bg-gradient-to-r from-orange-500 shadow-lg' : ''}`}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
