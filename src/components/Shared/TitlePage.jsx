import React from "react";

const TitlePage = ({ name }) => {
  return (
    <div className="hidden md:block">
    <div className="flex flex-col  items-center gap-20 absolute top-0 left-8">
      {/* Vertical line */}
      <div className="w-px h-16 bg-slate-200" />

      {/* Rotated title */}
      <h1 className="rotate-90 text-slate-200 tracking-[0.4em] font-spartan text-md font-bold">
        {name.toUpperCase()}
      </h1>
    </div>
    </div>

  );
};

export default TitlePage;