const allowedChars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=[]{}|;:,.<>?";
const generatePassword = (length: number) => {
  const allowedCharsLength = allowedChars.length;
  let password = "";
  for (let i: number = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedCharsLength);
    password += allowedChars?.[randomIndex];
  }
  return password;
};

export { generatePassword };
