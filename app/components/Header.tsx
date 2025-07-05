// components/Header.tsx
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png" // Make sure you placed your logo image inside /public folder as logo.png
            alt="Dr. Serena Blake Logo"
            width={160}
            height={50}
            className="h-auto w-auto"
          />
        </Link>

        {/* Navigation */}
        <nav className="space-x-6 hidden md:flex">
          <Link href="#services" className="text-gray-700 hover:text-[#1a3b3a]">Services</Link>
          <Link href="#about" className="text-gray-700 hover:text-[#1a3b3a]">About</Link>
          <Link href="#faq" className="text-gray-700 hover:text-[#1a3b3a]">FAQs</Link>
          <Link href="#contact" className="text-gray-700 hover:text-[#1a3b3a]">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
