import React from "react";
import { useController } from "react-hook-form";

const RadioHook = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: false,
  });
  return (
    <label className="cursor-pointer custom-radio">
      <input
        type="radio"
        {...field}
        value={props.value}
        className="hidden"
        defaultChecked={props.defaultChecked}
      />
      <div className="bg-white w-full h-full rounded-full"></div>
    </label>
  );
};

export default RadioHook;
