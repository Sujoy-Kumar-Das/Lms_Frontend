import { tags } from "../../tags";
import { baseApi } from "../base_api";
import { moduleMutation } from "./module.mutation";
import { moduleQuery } from "./module.query";

const courseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllModules: builder.query({
      query: moduleQuery.getAll,
      providesTags: [tags.module],
    }),
    getSingleModule: builder.query({
      query: moduleQuery.getSingle,
      providesTags: [tags.module],
    }),
    createModule: builder.mutation({
      query: moduleMutation.create,
      invalidatesTags: [tags.module],
    }),
    editModule: builder.mutation({
      query: moduleMutation.edit,
      invalidatesTags: [tags.module],
    }),
    deleteModule: builder.mutation({
      query: moduleMutation.deleteModule,
      invalidatesTags: [tags.module],
    }),
  }),
});

export const {
  useGetAllModulesQuery,
  useCreateModuleMutation,
  useGetSingleModuleQuery,
  useEditModuleMutation,
  useDeleteModuleMutation,
} = courseApi;
