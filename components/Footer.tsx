export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10 border-t border-white/10">
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo */}
        <h1 className="text-xl font-bold">LOGO</h1>

        {/* Links */}
        <ul className="flex gap-6 text-sm text-gray-400">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">About</li>
          <li className="hover:text-white cursor-pointer">Services</li>
          <li className="hover:text-white cursor-pointer">Contact</li>
        </ul>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} All rights reserved.
        </p>

      </div>

    </footer>
  );
}