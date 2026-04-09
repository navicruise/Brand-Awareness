export default function Navbar() {
  return (
<nav className="w-full flex justify-between items-center px-8 py-4 fixed top-0 left-0 z-50 text-white backdrop-blur-md bg-black/30">      
      <h1 className="text-xl font-bold">LOGO</h1>

      <ul className="hidden md:flex gap-8 text-sm">
        <li className="hover:text-blue-400 cursor-pointer">Home</li>
        <li className="hover:text-blue-400 cursor-pointer">About</li>
        <li className="hover:text-blue-400 cursor-pointer">Services</li>
        <li className="hover:text-blue-400 cursor-pointer">Contact</li>
      </ul>

      <button className="bg-blue-500 px-4 py-2 rounded-full text-sm hover:scale-105 transition">
        Get Started
      </button>

    </nav>
  );
}