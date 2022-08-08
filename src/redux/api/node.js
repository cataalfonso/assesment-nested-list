import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const nodeApi=createApi({
    reducerPath: 'nodeApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'http://20.76.179.252/api/v1/node',
        prepareHeaders: (headers, { getState }) => {
           
        const token = getState().user.userToken.token
        
        if (token) {
          headers.set('authorization', `Bearer ${token}`)
        }
        return headers
      }}),
    tagTypes:['Nodes'],  
    endpoints:(builder)=>({
        getNode: builder.query({
            query:()=>({
                url:'./',
            }),
            providesTags:['Nodes'] 
        }),
        getNodeById: builder.query({
            query:(id)=>`/${id}`
        }),
        createNode: builder.mutation({
            query:({name, parentId})=>({
                url:'/',
                method: 'POST',
                body:{name, parentId}
                }),
                invalidatesTags:['Nodes']
            }),
        updateNode: builder.mutation({
            query:({id, name, parentId})=>({
                url:`/${id}`,
                method: 'PATCH',
                body:{name, parentId}
                })
            }),
        deleteNode: builder.mutation({
            query:({id})=>({
                url:`/${id}`,
                method: 'DELETE',
                })
            }), 
            invalidatesTags:['Nodes']  
        })
    });


export const {
    useGetNodeQuery,
    useGetNodeByIdQuery,
    useCreateNodeMutation,
    useUpdateNodeMutation,
    useDeleteNodeMutation} = nodeApi;