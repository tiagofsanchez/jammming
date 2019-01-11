
import SearchBar from "../components/SearchBar/searchbar";

const clientId = '33c842c37a0242a5add060b9629e9455';
const redirectUri = 'http://localhost:3000';
let accessToken
let expiresIn = undefined;


const Spotify = {
  getAccessToken() {
    if(accessToken)
      return accessToken;
    else if(window.location.href.match(/access_token=([^&]*)/) && window.location.href.match(/expires_in=([^&]*)/))
    {
      accessToken = window.location.href.match(/access_token=([^&]*)/)[1];
      expiresIn = window.location.href.match(/expires_in=([^&]*)/)[1];
      window.setTimeout(() => accessToken = '', expiresIn*1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;
      console.log("access token successfully retrieved.");
    }
    else
    {
      let url = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = url;
    }
  },

  search(searchterm) {
    const options = {headers: {Authorization: `Bearer ${accessToken}`},}
    const searchUrl = `https://api.spotify.com/v1/search?type=track&q=${searchterm.replace(' ', '%20')}`;
    
    return fetch (searchUrl, options)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      return data.tracks.items.map(track => {
        return {
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri
        };
      });
  })
  .catch (err => console.log(err));
  },  
      
  savePlaylist (playListName, trackURIs) {
  
    /* geting the user id and this is workign as I am getting my userId logged*/
    const headers = {Authorization: `Bearer ${accessToken}`};
    const userUrl= 'https://api.spotify.com/v1/me' 
    let userId;
    let playlistId;

    fetch (userUrl , {headers: headers})
    .then (res => res.json())
    .then (data => {
      userId = data.id;

      // return new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     resolve(userId)
      //   }, 3000)
      // })
    })
  
  /* posting the playlistName and getting a playlistId */
    .then(() => {

      // console.log('resolved')

      const newPlaylistUrl = `https://api.spotify.com/v1/users/${userId}/playlists`;
      return fetch (newPlaylistUrl, {
        method: 'POST',
        headers: headers, 
        body: JSON.stringify({
          name: playListName
        }) 
      })
    })
    .then (res => res.json())
    .then (data => {
      playlistId = data.id;

      // return new Promise((resolve, reject) => {
      //   resolve(playlistId)
      // })
    })
        
  /* posting the tracks with a uri that is in the playList into Spotify */
    .then(() => {
      const addPlayListTracksUrl = `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`;
      fetch(addPlayListTracksUrl , {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          uris: trackURIs
        })
      });
    })
  },
      
}
  
    
  

    
/* Questions: 
1. To check the url I think this will be here https://developer.spotify.com/documentation/web-api/reference-beta/#endpoint-search
2. Do I need to take care of any error, or that is just for POST method?*/


export default Spotify;