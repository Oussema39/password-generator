"use client";

import PasswordGenerator from "@/components/PasswordGenerator";
import SettingsForm from "@/components/SettingsForm";
import PasswordSetting from "@/types/PasswordSetting";
import { useState } from "react";

const Home = () => {
  const [password, setPassword] = useState<string>("");
  const [passwordSettings, setPasswordSettings] = useState<PasswordSetting>(
    {} as PasswordSetting
  );

  return (
    <main className="px-32 max-[500px]:px-8 text-center">
      <h1 className="text-5xl font-bold p-10 pb-12">
        Online password generator
      </h1>
      <p className="text-slate-500/60 text-center font-medium capitalize">
        generator version 1.0.0
      </p>
      <PasswordGenerator
        passwordSettings={passwordSettings}
        password={password}
        setPassword={setPassword}
      />
      <SettingsForm setPasswordSettings={setPasswordSettings} />
    </main>
  );
};

export default Home;
