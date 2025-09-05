import { baseApi } from "../base_api";
import { authMutation } from "./auth.mutation";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: authMutation.login,
    }),
    register: builder.mutation({
      query: authMutation.register,
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
