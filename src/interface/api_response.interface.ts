export type IMetaData = {
  page: number;
  limit: number;
  total: number;
  totalPage?: number;
};

export type ISuccessApiResponse<T> = {
  success: boolean;
  data: T;
  meta?: IMetaData;
  message?: string;
};

export type IErrorApiResponse = {
  statusCode: number;
  success: boolean;
  message: string;
  errorMessages?: IApiError[];
};

export type IApiError = {
  path: string | number;
  message: string;
};
