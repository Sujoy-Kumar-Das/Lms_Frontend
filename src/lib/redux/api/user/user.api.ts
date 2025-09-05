import { tags } from "../../tags";
import { baseApi } from "../base_api";
import { userQuery } from "./user.query";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query({
      query: userQuery.getMe,
      providesTags: [tags.user],
    }),
  }),
});

export const { useGetMeQuery } = userApi;
