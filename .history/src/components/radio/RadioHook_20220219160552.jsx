import React from "react";
import { useController } from "react-hook-form";

const RadioHook = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
  });
  return <div className="w-5 h-5 bg-white rounded-full"></div>;
};

export default RadioHook;
