import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const songsApi = createApi({
    reducerPath: 'songs',
    baseQuery : fetchBaseQuery({
        baseUrl : 'https://api.jamendo.com/v3.0'
    }),
    endpoints(builder) {
        return {
            fetchSongsByArtist: builder.query({
                query : (searchTerm) => {
                    return {
                        url : '/albums/tracks/',
                        method : 'GET',
                        params: {
                            format : 'jsonpretty',
                            limit : 10,
                            artist_name : searchTerm,
                            client_id : '0db4c8f4'
                          }
                    }
                }
            }),
            fetchAlbumsByArtist: builder.query({
                query : (searchTerm) => {
                    return {
                        url : '/albums/',
                        method : 'GET',
                        params: {
                            format : 'jsonpretty',
                            artist_name : searchTerm,
                            client_id : '0db4c8f4'
                        }
                    }
                }
            })
        }
    }
})

export const {useFetchSongsByArtistQuery, useFetchAlbumsByArtistQuery} = songsApi



export {songsApi}