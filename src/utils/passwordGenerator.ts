import PasswordSetting from "@/types/PasswordSetting";

const Chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=[]{}|;:,.<>?";
const generatePassword = ({
  length,
  allowDuplicates,
  allowNumbers,
}: PasswordSetting) => {
  console.log(allowNumbers, allowDuplicates);
  const allowedChars = allowNumbers ? Chars : Chars.replace(/[0-9]/gi, "");
  const allowedCharsLength = allowedChars.length;
  let password = "";
  for (let i: number = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * allowedCharsLength);
    if (!allowDuplicates) {
      while (password.includes(allowedChars?.[randomIndex])) {
        randomIndex = Math.floor(Math.random() * allowedCharsLength);
      }
    }
    password += allowedChars?.[randomIndex];
  }
  return password;
};

export { generatePassword };
