import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "./form/Input";
const Resgiter = () => {
  const schema = yup
    .object({
      username: yup.string().required(),
      email: yup.string().email(),
      password: yup.string().required("Plesase enter your passwork"),
      terms: yup.boolean().required("plese chin"),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },

    control,
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });
  // console.log(errors);
  const onSubmit = (data) => {
    if (!isValid) return;
    console.log(data);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-[500px] mx-auto my-10"
      >
        <div className="flex flex-col gap-3 mb-2">
          <label htmlFor="username">Username</label>
          <Input
            name="username"
            id="username"
            placeholder="Enter your name"
            control={control}
            type="text"
          ></Input>
          {errors.username && (
            <p className="text-sm text-red-500">{errors.username.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-3 mb-2">
          <label htmlFor="email">Email</label>
          <Input
            name="email"
            id="email"
            placeholder="Enter your email"
            control={control}
            type="email"
          ></Input>
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-3 mb-2">
          <label htmlFor="password">Password</label>
          <Input
            name="password"
            id="password"
            placeholder="Enter your password"
            control={control}
            type="text"
          ></Input>
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>
        {/* <div className="flex flex-col gap-3">
          <Checkbox
            name="terms"
            control={control}
            text="I accept the terms and conditoinals"
          ></Checkbox>
          {errors.terms && (
            <p className="text-sm text-red-500">{errors.terms.message}</p>
          )}
        </div> */}

        <button className="w-full p-2 mt-5 font-semibold text-white bg-blue-500 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Resgiter;
