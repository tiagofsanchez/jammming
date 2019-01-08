const clientID = '33c842c37a0242a5add060b9629e9455';
let accessToken


const Spotify = {
 
    getAccessToken() {
        // 1. case: already there?
        if (accessToken) {
            return accessToken;
        }
        // 2. case: already in URL?
        let url = window.location.href;
        accessToken = this.extract(url, "access_token=", "&");
        if (accessToken) {
            expiresIn = this.extract(url, "expires_in=", "&");
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            console.log("access token successful retrieved.");
            return accessToken;
        } else {
            // 3. case: fetch from spotify
            let state = 4321; // TODO generate state, save to app-state and validate
            window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-private&redirect_uri=${spotifyRedirectUrl}&state=${state}`;
        }
    },



    

}


export default Spotify;