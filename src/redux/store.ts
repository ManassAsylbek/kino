/** @format */
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import styleSlice from "./styleSlice";
import {movieAPI} from "../services/movieServices";
import {animatedSeriesAPI} from "../services/animetedSeriesServices";
import {seriesAPI} from "../services/seriesServices";
import {tvShowAPI} from "../services/tvShowServices";
import {cartoonAPI} from "../services/cartoonServices";
import {animeAPI} from "../services/animeServices";


const rootReducer = combineReducers({
    styleSlice,
    [movieAPI.reducerPath]: movieAPI.reducer,
    [animatedSeriesAPI.reducerPath]: animatedSeriesAPI.reducer,
    [seriesAPI.reducerPath]: seriesAPI.reducer,
    [tvShowAPI.reducerPath]: tvShowAPI.reducer,
    [cartoonAPI.reducerPath]: cartoonAPI.reducer,
    [animeAPI.reducerPath]: animeAPI.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(
                movieAPI.middleware,
                animatedSeriesAPI.middleware,
                seriesAPI.middleware,
                tvShowAPI.middleware,
                cartoonAPI.middleware,
                animeAPI.middleware,
                )
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']