import apiSlice from "../api/apiSlice";

export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
    }),
  }),
  overrideExisting: true,
});

export const { useGetProductsQuery } = productApi;
