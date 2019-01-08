const clientId = '33c842c37a0242a5add060b9629e9455';
const spotifyRedirectUrl = 'http://localhost:3000';


class Spotify {

    constructor() {
        this.accessToken = null
    }
 
    getAccessToken() {
        // 1. case: already there?
        if (this.accessToken) {
            return this.accessToken;
        }
        // 2. case: already in URL?
        let urlString = window.location.href;
        urlString = urlString.replace('#', '?')
        let url = new URL(urlString);
        this.accessToken = url.searchParams.get("access_token");
        console.log(this.accessToken)
        // this.accessToken = this.extract(url, "access_token=", "&");
        if (this.accessToken) {
            const expiresIn = url.searchParams.get("expires_in");
            window.setTimeout(() => this.accessToken = null, expiresIn * 1000);
            // window.history.pushState('Access Token', null, '/');
            console.log("access token successfully retrieved.");
            return this.accessToken;
        } else {
            // 3. case: fetch from spotify
            let state = 4321; // TODO generate state, save to app-state and validate
            // window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-private&redirect_uri=${spotifyRedirectUrl}&state=${state}`;
            window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${spotifyRedirectUrl}&scope=user-read-private%20user-read-email&response_type=token&state=${state}`;
        }
    }
}


export default Spotify;