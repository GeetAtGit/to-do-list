import React from "react";

const Filter = ({ filter, setFilter, sort, setSort }) => {
  const btnBase = "px-3 py-1.5 rounded-2xl text-sm border transition";
  const activeF = "bg-blue-300 text-white border-blue-400";
  const inactiveF = "bg-white text-gray-500 border-gray-300";
  const activeS = "bg-[#AFD198] text-white border-lime-400";
  const inactiveS = "bg-white text-gray-500 border-gray-300";

  return (
    <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-4">
      <div className="flex gap-2 ">
        {["all","active","completed"].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`${btnBase} ${filter===f ? activeF: inactiveF}`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
     
      <div className="flex gap-2  ">
        {[
          ["dateDesc","Newest"],
          ["dateAsc","Oldest"],
          ["alphaAsc","A→Z"],
          ["alphaDesc","Z→A"],
        ].map(([val,label]) => (
          <button
            key={val}
            onClick={() => setSort(val)}
            className={`${btnBase} ${sort===val? activeS: inactiveS}`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
