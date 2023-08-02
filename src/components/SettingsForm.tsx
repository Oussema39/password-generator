"use client";

import PasswordSetting from "@/types/PasswordSetting";
import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import FormInput from "./FormElements/FormInput";

const SettingsForm = () => {
  const { register, handleSubmit } = useForm<PasswordSetting>({
    defaultValues: {} as PasswordSetting,
  });

  const onSubmit: SubmitHandler<PasswordSetting> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <br />
      <FormInput
        label="Length"
        {...register("length", { required: true, min: 8, max: 24 })}
        min={8}
        max={24}
        type="number"
        className="text-black rounded-md px-3 py-1 font-medium border-solid border-2 border-gray-500 outline-none"
      />
      {/* <input
        type="submit"
        value="submit"
        className="outline-none border-solid border-2 capitalize border-gray-600/25 py-1 px-5 rounded-md"
      /> */}
    </form>
  );
};

export default SettingsForm;
