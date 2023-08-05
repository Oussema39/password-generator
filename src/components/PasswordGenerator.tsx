import { generatePassword } from "@/utils/passwordGenerator";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";
import PasswordSetting from "@/types/PasswordSetting";

type Props = {
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  passwordSettings: PasswordSetting;
};

const PasswordGenerator = ({
  password,
  setPassword,
  passwordSettings,
}: Props) => {
  const refresh = () => {
    setPassword(generatePassword(passwordSettings));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard");
  };

  return (
    <>
      <div className="grid grid-cols-1 grid-rows-2 mb-1.5 lg:max-w-2xl m-auto">
        <div className="flex justify-center gap-2 mb-2">
          <p className="font-semibold text-2xl whitespace-nowrap text-center truncate">
            {password || "{ Your password goes here }"}
          </p>
          <button
            onClick={refresh}
            className="w-10 h-10 flex-shrink-0 bg-gray-500 px-3 py-2 outline-none border-none rounded-full"
          >
            <Image
              src="/icons/RefreshIcon.svg"
              alt="refresh"
              width={20}
              height={20}
            />
          </button>
        </div>
        <div className="group inline-block relative">
          <button
            onClick={copyToClipboard}
            className="m-auto justify-self-center text-black font-medium bg-gray-500 px-3 py-2 text-sm outline-none border-none rounded-sm flex gap-2 align-middle"
          >
            <Image
              src="/icons/CopyIcon.svg"
              alt="copy"
              width={20}
              height={20}
            />
            Copy
          </button>
        </div>
      </div>
    </>
  );
};

export default PasswordGenerator;
