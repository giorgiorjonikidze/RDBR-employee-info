import React, { useState } from "react";

const Test = () => {
  const [selects, setSelects] = useState([{ value: "" }]);

  const handleAddSelect = () => {
    setSelects([...selects, { value: "" }]);
  };

  const handleSelectChange = (event, index) => {
    const newSelects = [...selects];
    newSelects[index].value = event.target.value;
    setSelects(newSelects);
    localStorage.setItem("selects", JSON.stringify(newSelects));
  };

  return (
    <div>
      <button onClick={handleAddSelect}>Add Select</button>
      {selects.map((select, index) => (
        <select key={index} value={select.value} onChange={(e) => handleSelectChange(e, index)}>
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      ))}
    </div>
  );
};

export default Test;