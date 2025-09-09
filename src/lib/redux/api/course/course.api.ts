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
    deleteCourse: builder.mutation({
      query: courseMutation.deleteCourse,
      invalidatesTags: [tags.course],
    }),
    editCourse: builder.mutation({
      query: courseMutation.editCourse,
      invalidatesTags: [tags.course],
    }),
    getAllCourse: builder.query({
      query: courseQuery.getAllCourse,
      providesTags: [tags.course],
    }),
    getSingleCourse: builder.query({
      query: courseQuery.getSingleCourse,
      providesTags: [tags.course],
    }),
  }),
});

export const {
  useCreateCourseMutation,
  useGetAllCourseQuery,
  useEditCourseMutation,
  useDeleteCourseMutation,
  useGetSingleCourseQuery,
} = courseApi;
