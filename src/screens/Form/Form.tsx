import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";

import PoemStepOne from "../../components/PoemStepOne/PoemStepOne";
import PoemStepTwo from "../../components/PoemStepTwo/PoemStepTwo";
import PoemStepThree from "../../components/PoemStepThree/PoemStepThree";
import { usePoems } from "../../contexts/PoemContext"; 

const Form: React.FC = () => {
  const [step, setStep] = useState(1);
  const [newPoem, setNewPoem] = useState({
    title: "",
    author: "",
    lines: [],
    category: "",
  });
  const { addPoem } = usePoems();
  const navigate = useNavigate();

  const handleStep1Next = (data) => {
    setNewPoem({ ...newPoem, ...data });
    setStep(2);
  };

  const handleStep2Next = (data) => {
    setNewPoem({ ...newPoem, ...data });
    setStep(3);
  };

  const handleFormComplete = (data) => {
    const completePoem = { ...newPoem, ...data };
    addPoem(completePoem);
    navigate("/dashboard");
  };

  return (
    <div>
      {step === 1 && <PoemStepOne onNext={handleStep1Next} />}
      {step === 2 && <PoemStepTwo onNext={handleStep2Next} />}
      {step === 3 && <PoemStepThree onComplete={handleFormComplete} />}
    </div>
  );
};

export default Form;
