import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Topics from "../components/Topics";

function Homepage() {
  return (
    <div>
      <Navbar />
      <h2>Home</h2>

      <Topics />
    </div>
  );
}

export default Homepage;
