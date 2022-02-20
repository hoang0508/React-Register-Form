import React from "react";
import { useWatch } from "react-hook-form";
import useClickOutSide from "../../hooks/UseClickOutSide";

const DropdowmHook = ({ control, setValue, name }) => {
  // hook  Click outside ==, Custom select
  const { show, setShow, nodeRef } = useClickOutSide();

  // UseWatch====
  const jobValue = useWatch({
    control,
    name: "job",
  });
  console.log(jobValue);
  const handleClickDropdown = (e) => {
    setValue(name, "teacher");
  };
  return (
    <div className="relative" ref={nodeRef}>
      <div
        className="p-5 rounded-lg border border-gray-100 bg-white flex items-center justify-between cursor-pointer"
        onClick={(e) => setShow(!show)}
      >
        <span>Select your job</span>
      </div>
      <div
        className={`absolute top-full left-0 w-full rounded-lg bg-white ${
          show ? "" : "opacity-0 invisible"
        }`}
      >
        <div className="p-5" onClick={(e) => handleClickDropdown(e)}>
          Teacher
        </div>
        <div className="p-5" onClick={(e) => handleClickDropdown(e)}>
          Developer
        </div>
        <div className="p-5" onClick={(e) => handleClickDropdown(e)}>
          Doctor
        </div>
      </div>
    </div>
  );
};

export default DropdowmHook;
