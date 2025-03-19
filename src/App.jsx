import React, { useState } from "react";
import "./App.css";

const AgeCalculator = () => {
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (!birthdate) return;
    const birthDateObj = new Date(birthdate);
    const today = new Date();
    let calculatedAge = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
      calculatedAge--;
    }
    setAge(calculatedAge);
  };

  return (
    <div className="container">
      <h2>Age Calculator</h2>
      <input
        type="date"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
      />
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== null && <p>Your Age: {age} years</p>}
    </div>
  );
};

export default AgeCalculator;
