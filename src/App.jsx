import React, { useState } from "react";
import Localstorage from "./components/LocalStorage";
import Filter from "./components/Filter";
import TodoList from "./components/TodoList";

function App() {
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("dateDesc");

  return (
    <Localstorage>
      {(tasks, setTasks) => {
        let filtered = tasks.filter(t => {
          if (filter === "active") return !t.completed;
          if (filter === "completed") return t.completed;
          return true;
        });
        
        const sorted = [...filtered].sort((a, b) => {
          switch (sort) {
            case "dateAsc":   return a.id - b.id;
            case "dateDesc":  return b.id - a.id;
            case "alphaAsc":  return a.text.localeCompare(b.text);
            case "alphaDesc": return b.text.localeCompare(a.text);
            default:          return 0;
          }
        });

        return (
          <div className="min-h-screen bg-[#FFDCDC]  p-4">
            <div className="max-w-xl  mx-auto bg-[#FFF2EB] shadow-lg rounded-lg p-6 mt-20 ">
              <h1 className="text-7xl font-cursive mb-5 text-center  text-[#c07171] "> Things To-Do </h1>
          
              <div className=" max-h-80 overflow-y-auto  overflow-x-hidden   text-gray-500 font-second text-lg  pr-2 
                scrollbar-thin  scrollbar-thumb-[#FFDCDC] scrollbar-track-[#FFDCDC] "> 
                <TodoList tasks={sorted} setTasks={setTasks} />
              </div>

              <div className="mt-auto pt-4">
                <Filter
                  filter={filter}
                  setFilter={setFilter}
                  sort={sort}
                  setSort={setSort}
                />
              </div>
            </div>
          </div>
        );
      }}
    </Localstorage>
  );
}

export default App;
