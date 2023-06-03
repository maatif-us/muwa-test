import { apiSlice } from "../api/apiSlice";
import { Query_Endpoint } from "../../assets/Constants";

export const videoApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllVideos: builder.query({
      query: (token) => {
        return {
          url: Query_Endpoint.getVideo,
          headers: {
            "x-auth-token": token,
          },
        };
      },
      providesTags: ["Video"],
    }),

    uploadVideo: builder.mutation({
      query: (videoData) => {
        return {
          url: Query_Endpoint.uploadVideo,
          method: "POST",
          body: videoData.videoFormData,
          headers: {
            "x-auth-token": videoData.token,
          },
        };
      },
      invalidatesTags: ["Video"],
    }),
  }),
});

export const { useUploadVideoMutation, useGetAllVideosQuery } = videoApiSlice;
