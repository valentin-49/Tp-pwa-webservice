import React from "react";
import { Link, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Page About.</h1>
      <Link to="/">Vers Page Home (Methode avec Link)</Link>
      <div>
        <button onClick={() => navigate("/")}>
          Vers Page Home (Methode avec navigate)
        </button>
      </div>
    </div>
  );
};

export default About;