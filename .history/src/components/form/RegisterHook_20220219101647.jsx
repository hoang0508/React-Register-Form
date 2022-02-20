import React from "react";

const RegisterHook = () => {
  return (
    <div className="max-w-[300px] mx-auto my-10">
      <div className="flex flex-col gap-3">
        <label htmlFor="">Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          className="p-4 border border-gray-100 rounded-lg bg-white outline-none"
        />
        <p></p>
      </div>
    </div>
  );
};

export default RegisterHook;
