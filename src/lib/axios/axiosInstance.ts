import { IErrorApiResponse } from "@/interface/api_response.interface";
import getNewAccessToken from "@/utils/get_new_access_token";
import { logoutUserFunc } from "@/utils/logoutUser";
import axios, { AxiosResponse } from "axios";

const axiosInstance = axios.create({ withCredentials: true });

axiosInstance.defaults.headers.post["Content-Type"] = "application/json";
axiosInstance.defaults.headers["Accept"] = "application/json";
axiosInstance.defaults.timeout = 60000;

axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  function (response: AxiosResponse) {
    console.log({ response });
    return { data: response?.data?.data };
  },

  async function (error) {
    const config = error.config;

    const isInvalidAccessToken = error?.response?.status === 500;

    if (isInvalidAccessToken && !config._retry) {
      config._retry = true;

      const res = await getNewAccessToken();

      if (!res.ok) {
        await logoutUserFunc();
        return Promise.reject({
          success: false,
          statusCode: 401,
          message: "Session expired. Please log in again.",
          errorMessages: [
            {
              path: "auth",
              message: "Your session has expired. Please log in again.",
            },
          ],
        });
      }

      return axiosInstance(config);
    }

    const errorResponseData = error?.response?.data || {};

    const responseObject: IErrorApiResponse = {
      success: false,
      statusCode:
        errorResponseData?.statusCode || error?.response?.status || 500,
      message: errorResponseData?.message || "Something went wrong!!!",
      errorMessages: errorResponseData?.errorMessages || [
        {
          path: "unknown",
          message: errorResponseData?.message || "Unknown error occurred",
        },
      ],
    };

    return Promise.reject(responseObject);
  }
);

export default axiosInstance;
