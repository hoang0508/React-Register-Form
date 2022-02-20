import React from "react";
import { useController } from "react-hook-form";

const CheckboxHook = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
  });
  return (
    <label className="cursor-pointer custom-checkbox">
      <input
        type="checkbox"
        {...field}
        value={props.value}
        className="hidden"
      />
      <div className="bg-white w-full h-full rounded-full"></div>
    </label>
  );
};

export default CheckboxHook;
