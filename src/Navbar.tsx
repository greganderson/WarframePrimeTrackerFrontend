import { Link } from "react-router-dom";

const navs = [
  { label: "Primary", href: "/primary" },
  { label: "Secondary", href: "/secondary" },
  { label: "Melee", href: "/melee" },
];

const Navbar: React.FC = () => {
  return (
    <nav className="flex flex-row justify-around sm:flex-col sm:justify-start bg-gray-800">
      {navs.map((nav, i) => (
        <Link key={i} to={nav.href} className="text-2xl text-gray-200 hover:bg-gray-900 p-5 hover:cursor-pointer">
          {nav.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
