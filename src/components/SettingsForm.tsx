import PasswordSetting from "@/types/PasswordSetting";
import React, { Dispatch, SetStateAction, memo, useEffect } from "react";
import { useForm } from "react-hook-form";
import FormInput from "./FormElements/FormInput";

const SettingsForm = ({
  setPasswordSettings,
}: {
  setPasswordSettings: Dispatch<SetStateAction<PasswordSetting>>;
}) => {
  const { register, watch } = useForm<PasswordSetting>({
    defaultValues: { length: 8 } as PasswordSetting,
  });

  useEffect(() => {
    setPasswordSettings(watch());
  }, [JSON.stringify(watch())]);

  return (
    <form>
      <fieldset className="border-2 border-solid border-white p-2 rounded-sm">
        <legend className="text-white text-left">Settings</legend>
        <FormInput
          label="Length"
          {...register("length", { required: true, min: 8, max: 24 })}
          min={8}
          max={24}
          type="number"
          className="text-black rounded-sm px-3 w-fit py-1 font-medium border-solid border-2 border-gray-500 outline-none"
        />
        <FormInput
          label="Allow numbers"
          type="checkbox"
          {...register("allowNumbers", { required: true, min: 8, max: 24 })}
        />
        <FormInput
          label="Allow duplicates"
          type="checkbox"
          {...register("allowDuplicates", { required: true, min: 8, max: 24 })}
        />
      </fieldset>
    </form>
  );
};

export default SettingsForm;
