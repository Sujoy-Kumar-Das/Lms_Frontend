import { tags } from "../../tags";
import { baseApi } from "../base_api";
import { courseMutation } from "./course.mutation";
import { courseQuery } from "./course.query";

const courseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCourse: builder.mutation({
      query: courseMutation.create,
      invalidatesTags: [tags.course],
    }),
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
    getAllCourse: builder.query({
      query: courseQuery.getAllCourse,
      providesTags: [tags.course],
    }),
  }),
});

export const {
  useCreateCourseMutation,
  useEnrollMutation,
  useGetAllCourseQuery,
  useGetUserAllEnrolledCourseQuery,
  useGetEnrolledCourseQuery,
} = courseApi;
