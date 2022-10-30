import SpotifyWebApi from 'spotify-web-api-node';

const Client = new SpotifyWebApi({
	clientId: '6500a893d198432a8511599a60ac8ae3',
	clientSecret: 'c05a4e52084548be863497afbf459486'
});

export default Client;