import React from "react";
import { useForm } from "react-hook-form";
import CheckboxHook from "../checkbox/Checkbox";
import DropdowmHook from "../dropdown/DropdowmHook";
import InputHook from "../input/inputHook";
import RadioHook from "../radio/RadioHook";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Validation vs Yup
const schema = yup
  .object({
    // username
    username: yup.string().required("Please enter your username"),
    // email
    email: yup
      .string()
      .email("Please enter valid email address")
      .required("Please enter your email"),
    // password
    password: yup
      .string()
      .min(8, "Your password must be at least 8 characters or greate")
      // regex
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/,
        {
          message:
            "Your password must be have at least 1 uppercase , 1 lowercase, 1 special character",
        }
      )
      .required("Please enter your password"),
    // gender
    gender: yup
      .string()
      .required("Please select your gender")
      .oneOf(["male", "female"], "You can only select male of fenale"),
    // Dropdown
    job: yup.string().required("Please dropdown your job"),
    // Term
    term: yup.boolean().required("Please accept the term and conditions"),
  })
  .required();

// Data Dropdown
const Dropdowndata = [
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
    value: "doctor",
    text: "Doctor",
  },
];

const RegisterHook = () => {
  // Sử dụng useForm
  const {
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    control,
    setValue,
    getValues,
  } = useForm({
    defaultValues: {
      job: "",
    },
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  console.log(errors);
  // Submit Form
  const onSubmitHandler = (values) => {
    // kiểm tra isValid
    if (!isValid) return;
    console.log(values);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="max-w-[300px] mx-auto my-10"
      autoComplete="off"
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
        {errors.username && (
          <p className="text-sm text-red-500">{errors.username.message}</p>
        )}
        {/* <p className="text-sm text-red-500">Please enter your username</p> */}
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
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
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
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
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
        {errors.gender && (
          <p className="text-sm text-red-500">{errors.gender.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="" className="cursor-pointer">
          Are you
        </label>
        <DropdowmHook
          control={control}
          setValue={setValue}
          name="job"
          data={Dropdowndata}
        />
        {errors.job && (
          <p className="text-sm text-red-500">{errors.job.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <CheckboxHook
          control={control}
          text="I accept the terms and conditions"
          name="term"
        />
        {errors.term && (
          <p className="text-sm text-red-500">{errors.term.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="w-full p-3 mt-5 bg-blue-500 text-white rounded-lg font-semibold"
      >
        {isSubmitting ? (
          <div className="w-5 h-5 border-2 border-t-2 border-white rounded-full border-t-transparent mx-auto"></div>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};

export default RegisterHook;
