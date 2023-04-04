import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const songsApi = createApi({
    reducerPath: 'songs',
    baseQuery : fetchBaseQuery({
        baseUrl : 'https://spotify81.p.rapidapi.com'
    }),
    endpoints(builder) {
        return {
            fetchSongs: builder.query({
                query : (searchTerm) => {
                    return {
                        url : '/search',
                        method : 'GET',
                        params: {
                            q: searchTerm,
                            type: 'multi',
                            offset: '0',
                            limit: '10',
                            numberOfTopResults: '5'
                          },
                          headers: {
                            'X-RapidAPI-Key': '33dba06280msh6b5859d8bed45e2p1a60e1jsne974a6cc4963',
                            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
                          }
                    }
                }
            })
        }
    }
})

export const {useFetchSongsQuery} = songsApi



export {songsApi}