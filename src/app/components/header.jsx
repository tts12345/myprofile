
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Prakash Kumar</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><Link href="/skills" className="hover:underline">Skills</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
