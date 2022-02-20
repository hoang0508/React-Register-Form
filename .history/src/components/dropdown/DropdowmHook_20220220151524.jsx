import React, { useState } from "react";
import { useWatch } from "react-hook-form";
import useClickOutSide from "../../hooks/UseClickOutSide";

const data = [
  {
    id: 1,
    value: "teacher",
    text: "Teacher",
  },
  {
    id: 2,
    value: "developer",
    text: "Developer",
  },
  {
    id: 3,
    value: "Doctor",
    text: "Doctor",
  },
];

const DropdowmHook = ({ control, setValue, name }) => {
  // hook  Click outside ==, Custom select
  const { show, setShow, nodeRef } = useClickOutSide();

  // UseWatch====
  const jobValue = useWatch({
    control,
    name: "job",
  });
  // Click dropdown value
  const handleClickDropdown = (e) => {
    // setValue, (e.target.dataset.value) ==> custom atribute
    setValue(name, e.target.dataset.value);
    // setShow
    setShow(false);
    // setLabel
    setLabel(e.target.textContent);
  };
  // useState
  const [label, setLabel] = useState("Select your job");
  return (
    <div className="relative" ref={nodeRef}>
      <div
        className="p-5 rounded-lg border border-gray-100 bg-white flex items-center justify-between cursor-pointer"
        onClick={(e) => setShow(!show)}
      >
        <span>{label}</span>
      </div>
      <div
        className={`absolute top-full left-0 w-full rounded-lg bg-white ${
          show ? "" : "opacity-0 invisible"
        }`}
      >
        <div
          className="p-5 cursor-pointer hover:bg-gray-100"
          onClick={(e) => handleClickDropdown(e)}
          data-value="teacher"
        >
          Teacher
        </div>
        <div
          className="p-5 cursor-pointer hover:bg-gray-100"
          onClick={(e) => handleClickDropdown(e)}
          data-value="developer"
        >
          Developer
        </div>
        <div
          className="p-5 cursor-pointer hover:bg-gray-100"
          onClick={(e) => handleClickDropdown(e)}
          data-value="doctor"
        >
          Doctor
        </div>
      </div>
    </div>
  );
};

export default DropdowmHook;
