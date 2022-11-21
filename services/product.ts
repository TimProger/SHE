import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IProductShort} from "../types/Product.types";
import {API_BASE_URL} from "../http/api";

export const productAPI = createApi({
  reducerPath: 'productAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL
  }),
  tagTypes: ['product'],
  endpoints: (build) => ({
    fetchAllProductsSearch: build.query<IProductShort[], string>({
      query: (text) => ({
        url: `/product/search`,
        params: {
          name: text
        }
      }),
    }),
    fetchAllSlides: build.query<IProductShort[], string>({
      query: (text) => ({
        url: `/product/search`,
        params: {
          name: text
        }
      }),
    }),
    fetchAllSlidesNew: build.query<IProductShort[], string>({
      query: (text) => ({
        url: `/product/search`,
        params: {
          name: text
        }
      }),
    }),
    fetchAllSlidesHit: build.query<IProductShort[], string>({
      query: (text) => ({
        url: `/product/search`,
        params: {
          name: text
        }
      }),
    }),
  })
})