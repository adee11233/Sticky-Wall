"use client";

import { Plus } from "lucide-react";

function App() {
  return (
    <div className="border-2 w-screen h-screen p-5">
      <p className="text-4xl font-bold">Sticky Wall</p>
      <div className=" border-2 w-full h-full ">
        connent
        <button className="border-2 w-60 h-60 flex items-center justify-center">
          <Plus className="w-1/3 h-1/3 " />
        </button>
      </div>
    </div>
  );
}

export default App;
