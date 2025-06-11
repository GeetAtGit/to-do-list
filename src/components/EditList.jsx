import React, { useState } from "react";

const EditList = ({ task, onSave, onCancel }) => {
  const [text, setText] = useState(task.text);
  const [error, setError] = useState("");

  const handleSave = () => {
    const trimmed = text.trim();
    if (!trimmed) {
      setError("Task cannot be empty!");
      return;
    }
    setError("");
    onSave(task.id, trimmed);
  };

  return (
    <div className="flex flex-col gap-2 py-2">
      <div className="flex gap-2 items-center">
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            if (error) setError("");
          }}
          className="flex-1 border border-gray-300 p-1 rounded-md
                     transition-all duration-200 ease-in-out
                     focus:scale-102 focus:border-blue-400
                     focus:outline-none focus:ring-0"
        />
        <button
          onClick={handleSave}
          className="bg-blue-300 text-white px-3 py-1 rounded-md
                     hover:bg-blue-500 focus:outline-none"
        >
          Save
        </button>
        <button
          onClick={() => {
            setError("");
            onCancel();
          }}
          className="bg-gray-300 text-gray-700 px-3 py-1 rounded-md
                     hover:bg-gray-400 focus:outline-none"
        >
          Cancel
        </button>
      </div>
      {error && (
        <p className="text-red-500 text-sm text-italic ">
          {error}
        </p>
      )}
    </div>
  );
};

export default EditList;
