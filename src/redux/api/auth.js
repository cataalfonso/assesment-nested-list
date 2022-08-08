import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi=createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl:'http://20.76.179.252/api/v1/auth'}),
    endpoints:(builder)=>({
        authLogin: builder.mutation({
            query:({email, password})=>({
                url:'/login',
                method: 'POST',
                body:{email, password},
                validateStatus: (response) => response.status !== 401 
                })
            })
        })
    });


export const {useAuthLoginMutation} = authApi;