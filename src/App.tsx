import "./App.css";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Intro from "./screens/Intro/Intro";
import Dashboard from "./screens/Dashboard/Dashboard";
import Detail from "./screens/Detail/Detail";
import Form from "./screens/Form/Form";
import { PoemProvider } from "./contexts/PoemContext";

function App() {
  const NavigateToDashboard = () => {
    const navigate = useNavigate();
    return <Intro onNext={() => navigate("/dashboard")} />;
  };

  return (
    <Router>
      <PoemProvider>
        <Routes>
          <Route path="/" element={<NavigateToDashboard />} />
          <Route path="/dashboard" element={<Dashboard poems={[]} onViewPoem={() => {}} />} />
          <Route path="/detail/:id" element={<Detail poem={{}} onBack={() => {}} />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </PoemProvider>
    </Router>
  );
}

export default App;