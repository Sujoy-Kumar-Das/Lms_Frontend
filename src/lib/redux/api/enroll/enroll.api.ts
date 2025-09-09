import { tags } from "../../tags";
import { baseApi } from "../base_api";
import { enrollQuery } from "./enroll.query";
import { enrollMutation } from "./enroll.mutation";

const enrollApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    enroll: builder.mutation({
      query: enrollMutation.enroll,
      invalidatesTags: [tags.enroll],
    }),
    getAllEnrolledCourseByStudent: builder.query({
      query: enrollQuery.getAllByStudent,
      providesTags: [tags.enroll],
    }),
    getSingleEnrolledCourseByStudent: builder.query({
      query: enrollQuery.getSingleByStudent,
      providesTags: [tags.enroll],
    }),
  }),
});

export const {
  useEnrollMutation,
  useGetAllEnrolledCourseByStudentQuery,
  useGetSingleEnrolledCourseByStudentQuery,
} = enrollApi;
