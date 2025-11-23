export default function NavBar() {
  return (
    <nav className="bg-[#0A74DA] px-8 py-6 flex justify-between items-center font-bold text-white">
      {/* Logo */}
      <h2 className="m-0 text-xl">WashXpress</h2>

      {/* Links */}
      <div className="flex gap-5">
        <a href="/home" className="text-black ">
          Home
        </a>
        <a href="/services" className="text-black">
          Services
        </a>
        <a href="/about" className="text-black">
          About
        </a>
        <a href="/subscription-plans" className="text-black">
          Subscription-plans
        </a>
        <a href="/contact" className="text-black">
          Contact
        </a>
      </div>
    </nav>
  );
}
