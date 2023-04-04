import React, { useEffect } from "react"
import { Container } from "react-bootstrap"
import { AccessToken } from "./components/AccessToken"


const AUTH_URL =
    "https://accounts.spotify.com/authorize?client_id=e9418050398b47ed82e5d20bc825b7ff&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

const Login = () => {
    
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "100vh" }}
        >
            <a className="btn btn-success btn-lg" href={AUTH_URL}>
                Login With Spotify
            </a>
        </Container>
    )
}

export default Login