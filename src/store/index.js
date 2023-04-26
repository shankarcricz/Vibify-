import { configureStore } from '@reduxjs/toolkit';
import { songsApi } from './apis/index';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { addCurrent, songsList } from './slices/songsSlice';
import { library } from './slices/librarySlice';
import { addToStack } from './slices/librarySlice';


const store = configureStore({
    reducer : {
        [songsApi.reducerPath] : songsApi.reducer,
        songsList: songsList,
        library: library
    },
    middleware : (getDefaultMiddleware) => {
        return getDefaultMiddleware()
        .concat(songsApi.middleware);
    }
});
setupListeners(store.dispatch);

export {useFetchSongsByArtistQuery, useFetchAlbumsByArtistQuery, useFetchAutoSuggestionsQuery} from './apis/index'
export {store}
export {addCurrent} from './slices/songsSlice'
export {addToStack} from './slices/librarySlice'