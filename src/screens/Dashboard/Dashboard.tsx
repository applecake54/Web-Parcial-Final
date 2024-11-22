import React from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";
import { usePoems } from "../../contexts/PoemContext"; 

const Dashboard: React.FC = () => {
  const { poems, addPoem } = usePoems();
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Poem Dashboard</h1>
      <button className="create-poem-button" onClick={() => navigate("/form")}>
        Create New Poem
      </button>
      <div className="poem-list">
        {poems.map((poem) => (
          <div key={poem.id} className="poem-card">
            <h2 className="poem-title">{poem.title}</h2>
            <p className="poem-excerpt">{poem.lines}llanto, angustia, sufrimiento</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

