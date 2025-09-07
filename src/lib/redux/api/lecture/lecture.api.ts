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
    getSingleLectures: builder.query({
      query: lectureQuery.getSingle,
      providesTags: [tags.lecture],
    }),
    getAllLectures: builder.query({
      query: lectureQuery.getAll,
      providesTags: [tags.lecture],
    }),

    updateLectures: builder.mutation({
      query: lectureMutation.update,
      invalidatesTags: [tags.lecture],
    }),

    deleteLectures: builder.mutation({
      query: lectureMutation.remove,
      invalidatesTags: [tags.lecture],
    }),
  }),
});

export const {
  useGetSingleLecturesQuery,
  useGetAllLecturesQuery,
  useUpdateLecturesMutation,
  useCreateLecturesMutation,
  useDeleteLecturesMutation,
} = courseApi;
