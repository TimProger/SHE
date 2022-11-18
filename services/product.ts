import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IProductShort} from "../types/Product.types";
import {API_BASE_URL} from "../http/api";

export const productAPI = createApi({
  reducerPath: 'postAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL
  }),
  tagTypes: ['Post'],
  endpoints: (build) => ({
    fetchAllProductsShort: build.query<IProductShort[], string>({
      query: (text) => ({
        url: `/product/search`,
        params: {
          name: text
        }
      }),
    }),
  })
})