import React from 'react';
import {
  SunIcon
} from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <div className="w-full h-24 flex justify-between items-center">
      <h3 className="font-bold">SquareDocs</h3>
      <SunIcon className="h-5 w-5 text-slate-500" />
      <button>Get Template</button>
    </div>
  );
}

export default Navbar;