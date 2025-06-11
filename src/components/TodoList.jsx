import React, { useState } from "react";
import EditList from "./EditList";
import { Edit2, Trash2 } from "lucide-react";

const TodoList = ({ tasks, setTasks }) => {
  const [newText, setNewText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");

  const addTask = () => {
    const t = newText.trim();
    if (!t) {
      setError("Task cannot be empty!");
      return;
    }
    setError("");
    setTasks(prev => [{ id: Date.now(), text: t, completed: false }, ...prev]);
    setNewText("");
  };

  const toggle = id =>
    setTasks(prev =>
      prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t))
    );

  const del = id =>
    setTasks(prev => prev.filter(t => t.id !== id));

  const saveEdit = (id, text) => {
    setTasks(prev =>
      prev.map(t => (t.id === id ? { ...t, text } : t))
    );
    setEditingId(null);
  };

  return (
    <div>
      {/* Add New Task */}
      <div className="flex mb-2">
        <input
          type="text"
          value={newText}
          onChange={e => {
            setNewText(e.target.value);
            if (error) setError("");
          }}
           onKeyDown={e => {
            if (e.key === 'Enter') addTask();
          }}
          placeholder="Add a task..."
          className="flex-1 border border-gray-300 p-2 rounded-l-md transition-transform duration-200 ease-in-out font-serif focus:border-[#ebc6b2] focus:outline-none focus:ring-0"
        />
        <button
          onClick={addTask}
          className="bg-[#AFD198] text-white px-4 py-2 rounded-r-md hover:bg-lime-500 font-sans focus:outline-none"
        >
          Add
        </button>
      </div>
      {/* Validation Error */}
      {error && (
        <p className="text-red-500 text-sm mb-4">
          {error}
        </p>
      )}

      {/* Task List */}
      <ul className="divide-y divide-gray-200">
        {tasks.length === 0 ? (
          <li className="text-gray-500 text-center py-2 pb-6">No tasks to show.</li>
        ) : (
          tasks.map(task => (
            <li key={task.id} className="py-2">
              {editingId === task.id ? (
                <EditList
                  task={task}
                  onSave={saveEdit}
                  onCancel={() => setEditingId(null)}
                />
              ) : (
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggle(task.id)}
                      className="mr-2"
                    />
                    <span className={task.completed ? "text-lg line-through text-gray-400" : "text-lg"}>
                      {task.text}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setEditingId(task.id)}
                      aria-label="Edit Task"
                      className="focus:outline-none"
                    >
                      <Edit2 className="w-5 h-5 text-blue-400 hover:text-blue-600" />
                    </button>
                    <button
                      onClick={() => del(task.id)}
                      aria-label="Delete Task"
                      className="focus:outline-none"
                    >
                      <Trash2 className="w-5 h-5 text-red-300 hover:text-red-600" />
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoList;
