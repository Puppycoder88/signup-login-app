export const validName = (name) => /^[A-Za-z\s]+$/.test(name);

export const validUsername = (username) =>
  /^[a-zA-Z0-9._-]+$/.test(username);

export const validPassword = (password, username) =>
  /^[a-zA-Z0-9._-]+$/.test(password) && password !== username;

export const validConfirmPassword = (password, confirm) =>
  password === confirm;

export const validEmail = (email) =>
  /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);

export const validPhone = (phone) =>
  /^\+\d{1,3}\d{7,12}$/.test(phone);
