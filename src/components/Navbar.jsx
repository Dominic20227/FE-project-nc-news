import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <Link
        className="font-semibold text-xl hover:text-blue-200 mr-[50px]"
        to="/"
      >
        Home
      </Link>
      <Link
        className='className="font-semibold text-xl hover:text-blue-200 '
        to="/allArticles"
      >
        All Articles
      </Link>
    </nav>
  );
}

export default Navbar;
