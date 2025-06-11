import React, { useState, useEffect } from "react";

const LocalStorage = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    try {
      const raw = localStorage.getItem("tasks");
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      console.error("Failed to load tasks from localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
      console.error("Failed to save tasks to localStorage:", error);
    }
  }, [tasks]);
  
  return children(tasks, setTasks);
};

export default LocalStorage;
