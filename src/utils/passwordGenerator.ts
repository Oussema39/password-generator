import PasswordSetting from "@/types/PasswordSetting";

const allowedChars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=[]{}|;:,.<>?";
const generatePassword = ({
  length,
  allowDuplicates,
  allowNumbers,
}: PasswordSetting) => {
  const filteredChars = !allowNumbers && allowedChars.replace(/[0-9]/gi, "");
  const allowedCharsLength = allowedChars.length;
  let password = "";
  for (let i: number = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedCharsLength);
    password += allowedChars?.[randomIndex];
  }
  return password;
};

export { generatePassword };
