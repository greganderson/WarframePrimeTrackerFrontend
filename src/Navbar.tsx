const Navbar: React.FC = () => {
  return (
    <nav className="flex flex-col gap-4 p-5 bg-gray-800">
      <p className="text-xl">All Primes</p>
      <p className="text-xl">Search</p>
      <p className="text-xl">Your Primes</p>
      <p className="text-xl">Why This App</p>
    </nav>
  );
};

export default Navbar;
