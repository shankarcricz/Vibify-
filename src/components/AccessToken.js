import SpotifyWebApi from 'spotify-web-api-js';

export const AccessToken = () => {
    const CLIENT_ID = 'e9418050398b47ed82e5d20bc825b7ff';
    const CLIENT_SECRET = '55d6920797a34115a4ddb96fdc319aa1';
    const REDIRECT_URI = 'http://localhost:3000';
    const AUTHORIZATION_ENDPOINT = 'https://accounts.spotify.com/authorize';
    const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

    // Get the authorization code from the URL query string
    const code = new URLSearchParams(window.location.search).get('code');

    // Exchange the authorization code for an access token
    const data = {
        grant_type: 'authorization_code',
        code,
        redirect_uri: REDIRECT_URI,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
    };

    fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        body: new URLSearchParams(data),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    }).then(response => response.json()).then(data => {
        console.log(data, "kmimimim")
        const access_token = data.access_token;
        const expires_in = data.expires_in;
        localStorage.setItem('access_token', access_token);
        // Do something with the access token
        console.log(`Access token: ${access_token}`);
    }).catch(error => {
        console.error(error);
    });


}

