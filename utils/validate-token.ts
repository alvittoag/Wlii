export const ValidateToken = () => {
  const token = localStorage.getItem("token");

  const validate = token ? true : false;

  return validate;
};
