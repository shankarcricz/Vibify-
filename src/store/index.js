import { configureStore } from '@reduxjs/toolkit';
import { songsApi } from './apis/index';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { addCurrent, songsList } from './slices/songsSlice';

const store = configureStore({
    reducer : {
        [songsApi.reducerPath] : songsApi.reducer,
        songsList: songsList
    },
    middleware : (getDefaultMiddleware) => {
        return getDefaultMiddleware()
        .concat(songsApi.middleware);
    }
});
setupListeners(store.dispatch);

export {useFetchSongsByArtistQuery, useFetchAlbumsByArtistQuery} from './apis/index'
export {store}
export {addCurrent} from './slices/songsSlice'