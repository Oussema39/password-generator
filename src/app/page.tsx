import PasswordGenerator from "@/components/PasswordGenerator";
import Image from "next/image";

const Home = () => {
  return (
    <main className="px-32 max-[500px]:px-8 text-center">
      <h1 className="text-5xl font-extrabold p-10 pb-12">
        Online password generator
      </h1>
      <p className="text-slate-500/60 text-center font-medium capitalize">
        generator version 1.0.0
      </p>
      <PasswordGenerator />
    </main>
  );
};

export default Home;
