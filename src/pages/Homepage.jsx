import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Topics from "../components/Topics";

function Homepage() {
  return (
    <div className="grid grid-cols-1 gap-4 place-items-center p-4 md:p-8">
      <Navbar />
      <h2 className="text-7xl md:text-8xl font-bold text-gray-800">Home</h2>

      <Topics />
    </div>
  );
}

export default Homepage;
