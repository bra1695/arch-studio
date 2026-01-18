import React from "react";

const TitlePage = ({ name }) => {
  return (
    <div className="flex flex-col items-center gap-16 absolute top-0 left-8">
      {/* Vertical line */}
      <div className="w-px h-24 bg-slate-200" />

      {/* Rotated title */}
      <h1 className="rotate-90 text-slate-200 tracking-[1em] font-spartan text-md font-bold">
        {name.toUpperCase()}
      </h1>
    </div>
  );
};

export default TitlePage;
