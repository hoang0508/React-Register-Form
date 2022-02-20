import React from "react";
import { useForm } from "react-hook-form";
import InputHook from "../input/inputHook";

const RegisterHook = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const onSubmitHandler = (values) => {
    console.log(values);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="max-w-[300px] mx-auto my-10"
    >
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="username" className="cursor-pointer">
          Username
        </label>
        <InputHook
          name="username"
          id="username"
          type="text"
          placeholder="Enter your username"
          control={control}
        />
        <p className="text-sm text-red-500">Please enter your username</p>
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="email" className="cursor-pointer">
          Email address
        </label>
        <InputHook
          name="email"
          id="email"
          type="text"
          placeholder="Enter your email"
          control={control}
        />
      </div>
      <button
        type="submit"
        className="w-full p-3 mt-5 bg-blue-500 text-white rounded-lg font-semibold"
      >
        Submit
      </button>
    </form>
  );
};

export default RegisterHook;
