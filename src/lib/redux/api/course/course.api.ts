import { tags } from "../../tags";
import { baseApi } from "../base_api";
import { courseMutation } from "./course.mutation";
import { courseQuery } from "./course.query";

const courseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    enroll: builder.mutation({
      query: courseMutation.enroll,
      invalidatesTags: [tags.enroll],
    }),
    getUserAllEnrolledCourse: builder.query({
      query: courseQuery.getUsersAllEnrolled,
      providesTags: [tags.enroll],
    }),
    getEnrolledCourse: builder.query({
      query: courseQuery.getEnrolledCourse,
      providesTags: [tags.enroll],
    }),
  }),
});

export const {
  useEnrollMutation,
  useGetUserAllEnrolledCourseQuery,
  useGetEnrolledCourseQuery,
} = courseApi;
