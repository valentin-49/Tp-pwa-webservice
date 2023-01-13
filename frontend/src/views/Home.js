import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Page Home</h1>
      <Link to="/about">Vers Page About (Methode avec Link)</Link>
      <div>
        <button onClick={() => navigate("/about")}>
          Vers Page About (Methode avec navigate)
        </button>
      </div>
    </div>
  );
};

export default Home;