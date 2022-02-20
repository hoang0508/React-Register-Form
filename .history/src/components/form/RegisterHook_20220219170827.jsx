import React from "react";
import { useForm } from "react-hook-form";
import CheckboxHook from "../checkbox/Checkbox";
import InputHook from "../input/inputHook";
import RadioHook from "../radio/RadioHook";

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
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="password" className="cursor-pointer">
          Password
        </label>
        <InputHook
          name="password"
          id="password"
          type="password"
          placeholder="Enter your password"
          control={control}
        />
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label className="cursor-pointer">Gender</label>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-x-3">
            <RadioHook control={control} name="gender" value="male" />
            <span>Male</span>
          </div>
          <div className="flex items-center gap-x-3">
            <RadioHook control={control} name="gender" value="female" />
            <span>Female</span>
          </div>
        </div>
      </div>
      <div className="">
        <CheckboxHook
          control={control}
          text="I accept the terms and conditions"
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
