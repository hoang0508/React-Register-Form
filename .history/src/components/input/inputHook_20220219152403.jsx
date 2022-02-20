import React from "react";
import { useController } from "react-hook-form";

const inputHook = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
  });
  return (
    <input
      className="p-4 border border-gray-100 rounded-lg bg-white outline-none focus:border-blue-500 transition-all"
      {...field}
      {...props}
    />
  );
};

export default inputHook;
