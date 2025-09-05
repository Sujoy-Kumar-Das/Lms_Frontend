import { axiosBaseQuery } from "@/lib/axios/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { tagList } from "../tags";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: axiosBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BACKEND_BASE_URL as string,
  }),
  tagTypes: tagList,
  endpoints: () => ({}),
});
