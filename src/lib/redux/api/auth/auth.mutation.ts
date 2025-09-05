import { FieldValues } from "react-hook-form";

const login = (data: FieldValues) => ({
  url: "/auth/login",
  method: "POST",
  data,
});

const register = (data: FieldValues) => ({
  url: "/user/student",
  method: "POST",
  data,
});

export const authMutation = {
  login,
  register,
};
