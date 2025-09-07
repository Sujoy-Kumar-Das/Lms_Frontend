import { tags } from "../../tags";
import { baseApi } from "../base_api";
import { lectureMutation } from "./lecture.mutation";
import { lectureQuery } from "./lecture.query";

const courseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createLectures: builder.mutation({
      query: lectureMutation.create,
      invalidatesTags: [tags.lecture],
    }),
    getAllLectures: builder.query({
      query: lectureQuery.getAll,
      providesTags: [tags.lecture],
    }),
  }),
});

export const { useGetAllLecturesQuery, useCreateLecturesMutation } = courseApi;
