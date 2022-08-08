import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../redux/slices/userSlice';
import { authApi } from '../redux/api/auth';
import { nodeApi } from '../redux/api/node';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [authApi.reducerPath]: authApi.reducer,
    [nodeApi.reducerPath]: nodeApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware).concat(nodeApi.middleware)
});
